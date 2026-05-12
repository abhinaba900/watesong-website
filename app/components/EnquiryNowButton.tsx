"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const EnquiryNowButton = ({ onClick }: { onClick: () => void }) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  // Hide on tour pages
  if (pathname === "/virtual-tour" || pathname === "/internal-tour") return null;

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleEnquiry = () => {
    triggerAnimation();
    if (onClick) onClick();
  };

  const isHighlight = true; // Use the gold highlight by default

  return (
    <div className="fixed z-50 top-[26rem] lg:top-[30rem] 2xl:top-[26rem] right-0 flex items-center justify-center pointer-events-auto">
      <motion.button
        onMouseEnter={triggerAnimation}
        onClick={handleEnquiry}
        animate={
          isAnimating
            ? {
                scale: [1, 1.05, 0.95, 1.02, 1],
              }
            : {
                scale: 1,
              }
        }
        whileTap={{ scale: 0.95 }}
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className={`relative font-medium flex items-center justify-center overflow-hidden
                    py-4 px-1.5 lg:py-6 lg:px-2 2xl:py-[1vw] 2xl:px-[0.6vw]
                    rounded-l-2xl select-none outline-none border-none cursor-pointer origin-right`}
        style={{
          backgroundColor: isHighlight
            ? "rgba(201, 160, 80, 0.9)"
            : "rgba(177, 178, 176, 0.6)",
          color: isHighlight ? "#113239" : "white",
          boxShadow: `
            -3px 5px 15px 3px rgba(0,0,0,0.4) inset,
            -16px 12px 30px -12px rgba(0,0,0,1),
            0px 4px 4px 0px rgba(0,0,0,0.25),
            0px 4px 4px 0px rgba(0,0,0,0.4) inset
          `,
        }}
      >
        <span
          className={`relative z-10 opacity-90 ${isHighlight ? "text-[#113239] font-bold" : "text-white font-medium"} pointer-events-none drop-shadow-md tracking-wider text-sm lg:text-base 2xl:text-[0.65vw]`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Enquire Now
        </span>
      </motion.button>
    </div>
  );
};
