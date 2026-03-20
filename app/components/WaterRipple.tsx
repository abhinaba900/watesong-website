"use client";

import { useEffect, useRef, useState } from "react";

interface WaterRippleProps {
  backgroundImage: string;
  children?: React.ReactNode;
  className?: string;
  resolution?: number;
  dropRadius?: number;
  perturbance?: number;
  interactive?: boolean;
}

export const WaterRipple: React.FC<WaterRippleProps> = ({
  backgroundImage,
  children,
  className = "",
  resolution: userResolution,
  dropRadius = 20,
  perturbance = 0.04,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const rippleRef = useRef<any>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    // Detect mobile and scale resolution for performance
    const isMobile = window.innerWidth < 768;
    const resolution = userResolution || (isMobile ? 256 : 512);

    let $el: any;

    const initRipple = async () => {
      try {
        const { default: $ } = await import("jquery");
        (window as any).jQuery = $;
        // @ts-ignore
        await import("jquery.ripples");

        $el = $(containerRef.current!);
        rippleRef.current = $el;

        // @ts-ignore
        if (typeof $el.ripples === "function") {
          // @ts-ignore
          $el.ripples({
            resolution,
            dropRadius,
            perturbance,
            interactive: false, // We'll handle interactivity manually for better control
            imageUrl: backgroundImage,
          });

          if (interactive) {
            let lastEvent: MouseEvent | null = null;

            const updateRipple = () => {
              if (lastEvent && containerRef.current && rippleRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = lastEvent.clientX - rect.left;
                const y = lastEvent.clientY - rect.top;
                
                // Trigger drop based on event type
                const radius = lastEvent.type === "mousedown" ? dropRadius * 1.5 : dropRadius;
                const strength = lastEvent.type === "mousedown" ? perturbance * 2 : perturbance;
                
                rippleRef.current.ripples("drop", x, y, radius, strength);
                lastEvent = null;
              }
              frameRef.current = requestAnimationFrame(updateRipple);
            };

            const handleMouseMove = (e: MouseEvent) => {
              lastEvent = e;
            };

            const handleClick = (e: MouseEvent) => {
              lastEvent = e;
            };

            if (containerRef.current) {
              containerRef.current.addEventListener("mousemove", handleMouseMove, { passive: true });
              containerRef.current.addEventListener("mousedown", handleClick, { passive: true });
            }
            
            frameRef.current = requestAnimationFrame(updateRipple);

            return () => {
              if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", handleMouseMove);
                containerRef.current.removeEventListener("mousedown", handleClick);
              }
              if (frameRef.current) cancelAnimationFrame(frameRef.current);
            };
          }
        }
      } catch (error) {
        console.error("Failed to initialize ripples:", error);
      }
    };

    const cleanupPromise = initRipple();

    return () => {
      if (rippleRef.current && typeof rippleRef.current.ripples === "function") {
        try {
          rippleRef.current.ripples("destroy");
        } catch (e) {}
      }
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isMounted, backgroundImage, userResolution, dropRadius, perturbance, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden will-change-transform ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
