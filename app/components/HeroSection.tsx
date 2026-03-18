"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationPillProps {
  label: string;
}

const TopGlare: React.FC = () => (
  <svg
    viewBox="0 0 41 11"
    fill="none"
    className="absolute w-[2vw] h-[0.7vh] xl:w-[2vw] xl:h-[1.2vh] top-[0.3vh] right-[1.4vw] pointer-events-none opacity-40 hidden lg:block"
  >
    <path
      d="M37.9952 8.97509C37.0777 9.36997 29.2478 4.94799 14.5277 4.35839C12.0929 4.26087 2 4.08677 2 2.78427C2 1.48177 19.7522 2.19473 31.127 2.19473C32.717 2.19473 33.7371 2.19456 35.1985 2.78425C37.7638 3.81937 40.5336 7.88268 37.9952 8.97509Z"
      fill="white"
    />
  </svg>
);

const RightGlare: React.FC = () => (
  <svg
    viewBox="0 0 14 12"
    fill="none"
    className="absolute w-[0.9vw] h-[1vh] xl:w-[0.9vw] xl:h-[2vh] top-[0.4vh] right-[0.5vw] pointer-events-none opacity-50 hidden lg:block"
  >
    <path
      d="M12 9.72418C12 11.0893 5.76311 6.94347 4.42424 6.94347C3.08537 6.94347 2 5.83684 2 4.47174C2 3.10663 3.08537 2 4.42424 2C5.76311 2 12 8.35907 12 9.72418Z"
      fill="white"
    />
  </svg>
);

const NavigationPill: React.FC<NavigationPillProps> = ({ label }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    // If it's already animating, we reset it to false for a split second
    // to force a fresh restart from the beginning
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <motion.button
      onMouseEnter={triggerAnimation}
      onClick={triggerAnimation}
      // The core fix: using 'animate' instead of 'whileHover'
      // This ensures the sequence [1, 1.1, 0.95...] always completes.
      animate={
        isAnimating
          ? {
              scale: [1, 1.1, 0.95, 1.05, 1],
              scaleX: [1, 1.15, 0.85, 1.05, 1],
              scaleY: [1, 0.85, 1.15, 0.95, 1],
            }
          : {
              scale: 1,
              scaleX: 1,
              scaleY: 1,
            }
      }
      // Snap down effect on click (still works alongside the jiggle)
      whileTap={{ scale: 0.9 }}
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      className="relative font-medium flex items-center justify-center whitespace-nowrap cursor-pointer overflow-hidden
                 w-full lg:w-[8vw] h-12 lg:h-[2.5vh] xl:h-[4.5vh] text-[1rem] lg:text-[0.73vw]
                 rounded-full select-none outline-none border-none will-change-transform"
      style={{
        backgroundColor: "rgba(177, 178, 176, 0.6)",
        boxShadow: `
          -3px 5px 15px 3px rgba(0,0,0,0.4) inset,
          -16px 12px 30px -12px rgba(0,0,0,1),
          0px 4px 4px 0px rgba(0,0,0,0.25),
          0px 4px 4px 0px rgba(0,0,0,0.4) inset
        `,
      }}
    >
      <TopGlare />
      <RightGlare />
      <span className="relative z-10 opacity-90 text-white pointer-events-none drop-shadow-md">
        {label}
      </span>
    </motion.button>
  );
};

export const HeroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationItems = [
    "About us",
    "Highlights",
    "Gallery",
    "Amenities",
    "Floor Plans",
    "Location",
    "Contact Us",
  ];

  if (!mounted) return <section className="w-full h-screen bg-[#113239] bg-cover bg-center" />;

  return (
    <section className="relative w-full overflow-hidden bg-[#113239] bg-[url('/assets/hero-bg-image.webp')] bg-cover bg-center font-sans h-screen lg:h-[60vh] xl:h-screen">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-[#113239]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-white mb-10"
              >
                <X size={32} />
              </button>
              <div className="flex flex-col gap-4">
                {navigationItems.map((item, index) => (
                  <NavigationPill key={index} label={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col w-full h-full px-6 py-6 md:px-10 md:py-8 lg:px-[5vw] lg:py-[4vh] mx-auto">
        <header className="flex justify-between items-center w-full lg:mb-[2vh]">
          <div className="shrink-0 order-1 lg:order-2">
            <img
              src="/assets/navbar-right-logo.webp"
              alt="Logo"
              className="w-24 md:w-36 lg:w-[8.5vw]"
            />
          </div>
          <nav className="hidden lg:flex flex-wrap gap-x-[2.5vw] gap-y-[1vh] order-2 lg:order-1">
            {navigationItems.map((item, index) => (
              <NavigationPill key={index} label={item} />
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white order-2"
          >
            <Menu size={32} />
          </button>
        </header>

        <div className="flex flex-col flex-grow justify-center mt-4 lg:mt-0 mb-4 lg:mb-[4vh]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white leading-[1.1] tracking-tight mb-6 lg:mb-[6vh] text-[6.5vw] md:text-5xl lg:text-[2.9vw] drop-shadow-lg"
          >
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">NEIGHBOUR</span> <br />
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">ELEVATOR ACCESS</span> <br />
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">LAKE LOUNGE</span>
          </motion.h1>

          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/75 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full lg:w-[50vw] rounded-2xl lg:rounded-[2.1vw] h-auto lg:h-[20vh] xl:h-[35vh] transition-all hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]"
          >
            <div className="w-full lg:w-[55%] p-6 md:p-10 lg:p-[3vw] flex flex-col justify-center">
              <img
                src="/assets/card-inside-image-of-hero-section.webp"
                className="w-16 md:w-28 lg:w-[7vw] mb-3 lg:mb-[2vh]"
                alt="Brand"
              />
              <img
                src="/assets/watersong-logo-blue.webp"
                alt="Watersong"
                className="w-40 md:w-56 lg:w-[14.5vw] object-contain mb-2"
              />
              <h2 className="text-[#0C637E] font-bold text-lg md:text-2xl lg:text-[1.25vw]">
                Lakefront Residences
              </h2>
              <p className="text-[#0C637E] font-medium text-xs md:text-base lg:text-[0.73vw] mt-1">
                1 KM from Nallurhalli Metro, Whitefield
              </p>
            </div>
            <div className="w-full lg:w-[45%] relative h-50 md:h-72 lg:h-full">
              <img
                src="/assets/lackfront-recidance.webp"
                alt="Building"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
