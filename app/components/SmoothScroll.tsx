"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        // The sweet spot for ultimate smoothness without feeling laggy:
        lerp: 0.07, 
        
        // Helps the scroll cover more distance naturally so the lower lerp doesn't feel like you are stuck in mud
        wheelMultiplier: 1.1, 
        
        // Only used for anchor links (e.g. clicking "Contact" and scrolling down)
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo.easeOut for buttery anchor scrolls

        smoothWheel: true,
        touchMultiplier: 2, 
      }}
    >
      {children}
    </ReactLenis>
  );
}
