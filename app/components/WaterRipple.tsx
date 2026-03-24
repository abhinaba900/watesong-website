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
    const resolution = userResolution || (isMobile ? 128 : 256);

    let $el: any;
    let cleanupEvents: (() => void) | null = null;
    let observer: IntersectionObserver | null = null;

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

          if (typeof window !== "undefined" && "IntersectionObserver" in window) {
            observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    try {
                      if (rippleRef.current && typeof rippleRef.current.ripples === "function") {
                        rippleRef.current.ripples("play");
                      }
                    } catch (e) {}
                  } else {
                    try {
                      if (rippleRef.current && typeof rippleRef.current.ripples === "function") {
                        rippleRef.current.ripples("pause");
                      }
                    } catch (e) {}
                  }
                });
              },
              { threshold: 0 }
            );
            observer.observe(containerRef.current!);
          }

          if (interactive) {
            const handleClick = (e: MouseEvent) => {
              if (containerRef.current && rippleRef.current && typeof rippleRef.current.ripples === "function") {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const radius = dropRadius * 1.5;
                const strength = perturbance * 2;
                
                try {
                  rippleRef.current.ripples("drop", x, y, radius, strength);
                } catch (err) {}
              }
            };

            if (containerRef.current) {
              containerRef.current.addEventListener("mousedown", handleClick, { passive: true });
              cleanupEvents = () => {
                containerRef.current?.removeEventListener("mousedown", handleClick);
              };
            }
          }
        }
      } catch (error) {
        console.error("Failed to initialize ripples:", error);
      }
    };

    initRipple();

    return () => {
      if (cleanupEvents) cleanupEvents();
      if (observer) observer.disconnect();
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
