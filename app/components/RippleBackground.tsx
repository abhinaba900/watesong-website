"use client";

import { useEffect, useRef } from "react";

interface RippleBackgroundProps {
  image: string;
}

export default function RippleBackground({ image }: RippleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let $el: any;
    let cleanupMouse: any;
    let observer: IntersectionObserver | null = null;

    const initRipples = async () => {
      const { default: $ } = await import("jquery");
      (window as any).jQuery = $;
      await import("jquery.ripples");

      if (!containerRef.current) return;

      $el = $(containerRef.current);

      $el.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: false,
        imageUrl: image,
      });

      if (typeof window !== "undefined" && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if ($el && typeof $el.ripples === "function") $el.ripples("play");
              } else {
                if ($el && typeof $el.ripples === "function") $el.ripples("pause");
              }
            });
          },
          { threshold: 0 }
        );
        observer.observe(containerRef.current!);
      }

      // Strong ripple on click
      const handleClick = (e: MouseEvent) => {
        if ($el && typeof $el.ripples === "function") {
          const offset = $el.offset();
          const x = e.pageX - offset.left;
          const y = e.pageY - offset.top;
          $el.ripples("drop", x, y, 30, 0.08);
        }
      };

      containerRef.current!.addEventListener("mousedown", handleClick, { passive: true });

      cleanupMouse = () => {
        containerRef.current?.removeEventListener("mousedown", handleClick);
      };
    };

    initRipples();

    return () => {
      if (cleanupMouse) cleanupMouse();
      if (observer) observer.disconnect();
      if ($el && typeof $el.ripples === "function") {
        $el.ripples("destroy");
      }
    };
  }, [image]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 cursor-crosshair"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
