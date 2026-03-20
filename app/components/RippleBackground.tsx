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
        interactive: true,
        imageUrl: image,
      });

      // Strong ripple on click
      const handleClick = (e: MouseEvent) => {
        const offset = $el.offset();
        const x = e.pageX - offset.left;
        const y = e.pageY - offset.top;

        $el.ripples("drop", x, y, 30, 0.08);
      };

      containerRef.current.addEventListener("mousedown", handleClick);

      cleanupMouse = () => {
        containerRef.current?.removeEventListener("mousedown", handleClick);
      };
    };

    initRipples();

    return () => {
      if (cleanupMouse) cleanupMouse();
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
