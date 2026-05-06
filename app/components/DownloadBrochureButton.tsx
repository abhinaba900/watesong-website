"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const DownloadBrochureButton = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  // Hide on tour pages
  if (pathname === "/virtual-tour" || pathname === "/internal-tour") return null;

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleDownload = () => {
    triggerAnimation();
    // Delay download slightly to let the animation play
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/Watersong brochure 3mb.pdf";
      link.download = "Watersong brochure 3mb.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 200);
  };

  const isHighlight = true; // Use the gold highlight by default

  return (
    <div className="fixed z-50 top-[12rem] right-0 flex items-center justify-center pointer-events-auto">
      <motion.button
        onMouseEnter={triggerAnimation}
        onClick={handleDownload}
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
                    py-4 px-1.5 lg:py-[1vw] lg:px-[0.6vw] xl:py-[1vw] xl:px-[0.6vw]
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
          className={`relative z-10 opacity-90 ${isHighlight ? "text-[#113239] font-bold" : "text-white font-medium"} pointer-events-none drop-shadow-md tracking-wider text-sm lg:text-[0.65vw] xl:text-[0.65vw]`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Download Brochure
        </span>
      </motion.button>
    </div>
  );
};
