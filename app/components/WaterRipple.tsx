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
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);


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

          // Fix: periodic "keep-alive" drops prevent the ripple effect from
          // freezing when no events are occurring (WebGL contexts can stall)
          keepAliveRef.current = setInterval(() => {
            if (rippleRef.current && typeof rippleRef.current.ripples === "function") {
              if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                const h = containerRef.current.offsetHeight;
                // Drop a tiny invisible ripple in a random spot just to keep the WebGL ticker alive
                try {
                  rippleRef.current.ripples("drop",
                    Math.random() * w,
                    Math.random() * h,
                    3, // tiny radius - nearly invisible
                    0.001 // nearly zero strength
                  );
                } catch (e) {}
              }
            }
          }, 2000);

          // Fix: tab visibility changes kill the WebGL loop. Resume on tab focus.
          const handleVisibilityChange = () => {
            if (!document.hidden && rippleRef.current && typeof rippleRef.current.ripples === "function") {
              try {
                rippleRef.current.ripples("play");
              } catch (e) {}
            }
          };
          document.addEventListener("visibilitychange", handleVisibilityChange);

          // handleClick must be declared before cleanupEvents references it
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

          cleanupEvents = () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            if (containerRef.current) {
              containerRef.current.removeEventListener("mousedown", handleClick);
            }
          };

          if (interactive && containerRef.current) {
            containerRef.current.addEventListener("mousedown", handleClick, { passive: true });
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
      if (keepAliveRef.current) clearInterval(keepAliveRef.current);
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
        // Solid fallback color prevents white flash when WebGL canvas resets between frames
        backgroundColor: "transparent",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
