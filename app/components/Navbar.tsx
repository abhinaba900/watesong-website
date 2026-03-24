"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface NavigationPillProps {
  label: string;
  action?: () => void;
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

const NavigationPill: React.FC<NavigationPillProps> = ({ label, action }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClick = () => {
    triggerAnimation();
    // Delay the action slightly to let the button bounce animation play out visually
    if (action) setTimeout(action, 200);
  };

  return (
    <motion.button
      onMouseEnter={triggerAnimation}
      onClick={handleClick}
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
      whileTap={{ scale: 0.9 }}
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      className={`relative font-medium flex items-center justify-center whitespace-nowrap overflow-hidden
                 w-full lg:w-[8vw] h-12 lg:h-[2.5vh] xl:h-[4.5vh] text-[1rem] lg:text-[0.73vw]
                 rounded-full select-none outline-none border-none
                 ${action ? "cursor-pointer" : "cursor-default drop-shadow-sm"}`}
      style={{
        backgroundColor: action ? "rgba(201, 160, 80, 0.9)" : "rgba(177, 178, 176, 0.6)",
        color: action ? "#113239" : "white", // Dark text on gold for the action button
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
      <span className={`relative z-10 opacity-90 ${action ? 'text-[#113239] font-bold' : 'text-white font-medium'} pointer-events-none drop-shadow-md`}>
        {label}
      </span>
    </motion.button>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "About us" },
    { label: "Highlights" },
    { label: "Gallery" },
    { label: "Amenities" },
    { label: "Floor Plans" },
    { label: "Location" },
    { label: "Enquire Now", action: () => setIsModalOpen(true) },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[110] bg-[#113239]/95 backdrop-blur-xl lg:hidden"
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
                  <NavigationPill
                    key={index}
                    label={item.label}
                    action={
                      item.action
                        ? () => {
                            setIsOpen(false);
                            item.action!();
                          }
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#113239]/90 backdrop-blur-md px-4 py-4 md:px-8 md:py-4 lg:px-[4vw] lg:py-[2vh] shadow-xl"
            : "bg-transparent px-6 py-6 md:px-10 md:py-8 lg:px-[5vw] lg:py-[4vh]"
        }`}
      >
        <div className="shrink-0 order-1 lg:order-2">
          <Link href="/">
            <Image
              src="/assets/navbar-right-logo.webp"
              alt="Logo"
              width={200}
              height={100}
              priority
              className="w-24 md:w-36 lg:w-[8.5vw] h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex flex-wrap gap-x-[2.5vw] gap-y-[1vh] order-2 lg:order-1">
          {navigationItems.map((item, index) => (
            <NavigationPill
              key={index}
              label={item.label}
              action={item.action}
            />
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white order-2"
        >
          <Menu size={32} />
        </button>
      </header>

      {/* Luxury Enquire Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg"
            >
              {/* 
                Gradient border technique: 
                Outer wrapper has the gradient background, inner card clips it to show as border
              */}
              <div
                style={{
                  padding: "3.67px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(235,235,235,0.4) 11.32%, rgba(161,160,160,0.5) 83.6%, rgba(255,255,255,0.5) 100%)",
                }}
              >
                {/* Inner card */}
                <div
                  style={{
                    background:
                      "linear-gradient(160deg, #1a4a52 0%, #113239 40%, #0d2a31 100%)",
                    borderRadius: "13px",
                    backdropFilter: "blur(20px)",
                  }}
                  className="relative overflow-hidden flex flex-col"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-10"
                  >
                    <X size={20} />
                  </button>

                  {/* Modal Header */}
                  <div className="px-8 pt-8 pb-5"></div>

                  {/* Modal Body / Form */}
                  <div className="px-8 pb-8 flex flex-col gap-4">
                    {/* Row: Name + Contact Number */}
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-1.5 flex-1">
                        <label className="text-white/80 text-xs font-medium">
                          Name*
                        </label>
                        {/* Gradient-bordered input */}
                        <div
                          style={{
                            padding: "2px",
                            borderRadius: "6px",
                            background:
                              "linear-gradient(171.78deg, rgba(255,255,255,0.6) 13.3%, rgba(235,235,235,0.4) 29.62%, rgba(161,160,160,0.5) 78.73%, rgba(255,255,255,0.5) 92.12%)",
                          }}
                        >
                          <input
                            type="text"
                            className="w-full bg-[#113239]/80 rounded-[4px] px-3 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:bg-[#113239]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 flex-1">
                        <label className="text-white/80 text-xs font-medium">
                          Contact Number*
                        </label>
                        <div
                          style={{
                            padding: "2px",
                            borderRadius: "6px",
                            background:
                              "linear-gradient(171.78deg, rgba(255,255,255,0.6) 13.3%, rgba(235,235,235,0.4) 29.62%, rgba(161,160,160,0.5) 78.73%, rgba(255,255,255,0.5) 92.12%)",
                          }}
                        >
                          <input
                            type="tel"
                            className="w-full bg-[#113239]/80 rounded-[4px] px-3 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:bg-[#113239]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/80 text-xs font-medium">
                        Email Address
                      </label>
                      <div
                        style={{
                          padding: "2px",
                          borderRadius: "6px",
                          background:
                            "linear-gradient(171.78deg, rgba(255,255,255,0.6) 13.3%, rgba(235,235,235,0.4) 29.62%, rgba(161,160,160,0.5) 78.73%, rgba(255,255,255,0.5) 92.12%)",
                        }}
                      >
                        <input
                          type="email"
                          className="w-full bg-[#113239]/80 rounded-[4px] px-3 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:bg-[#113239]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/80 text-xs font-medium">
                        Message
                      </label>
                      <div
                        style={{
                          padding: "2px",
                          borderRadius: "6px",
                          background:
                            "linear-gradient(171.78deg, rgba(255,255,255,0.6) 13.3%, rgba(235,235,235,0.4) 29.62%, rgba(161,160,160,0.5) 78.73%, rgba(255,255,255,0.5) 92.12%)",
                        }}
                      >
                        <textarea
                          placeholder="Write your message here..."
                          rows={4}
                          className="w-full bg-[#113239]/80 rounded-[4px] px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:bg-[#113239] resize-none"
                        />
                      </div>
                    </div>

                    {/* Send Button - gradient bordered */}
                    <div className="flex justify-end mt-1">
                      <div
                        style={{
                          padding: "2px",
                          borderRadius: "6px",
                          background:
                            "linear-gradient(171.78deg, rgba(255,255,255,0.6) 13.3%, rgba(235,235,235,0.4) 29.62%, rgba(161,160,160,0.5) 78.73%, rgba(255,255,255,0.5) 92.12%)",
                        }}
                      >
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="bg-[#113239]/90 hover:bg-[#1a4a52] text-white text-xs font-medium px-8 py-2.5 rounded-[4px] transition-colors"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
