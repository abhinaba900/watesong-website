"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { TourSelectionModal } from "./TourSelectionModal";

interface NavigationPillProps {
  label: string;
  action?: () => void;
  isHighlight?: boolean;
  textColor?: string;
  bgColor?: string;
}

const TopGlare: React.FC = () => (
  <svg
    viewBox="0 0 41 11"
    fill="none"
    className="absolute w-[25vw] h-[1.2vh] lg:w-[2vw] lg:h-[0.7vh] xl:w-[2vw] xl:h-[1.2vh] top-[0.4vh] right-[2vw] lg:top-[0.3vh] xl:top-[0.3vh] lg:right-[1.4vw] xl:right-[1.4vw] pointer-events-none opacity-40"
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
    className="absolute w-[10vw] h-[1.5vh] lg:w-[0.9vw] lg:h-[1vh] xl:w-[0.9vw] xl:h-[2vh] top-[0.6vh] right-[2vw] lg:right-[0.5vw] xl:right-[0.5vw] pointer-events-none opacity-50"
  >
    <path
      d="M12 9.72418C12 11.0893 5.76311 6.94347 4.42424 6.94347C3.08537 6.94347 2 5.83684 2 4.47174C2 3.10663 3.08537 2 4.42424 2C5.76311 2 12 8.35907 12 9.72418Z"
      fill="white"
    />
  </svg>
);

const NavigationPill: React.FC<NavigationPillProps> = ({
  label,
  action,
  isHighlight = false,
  textColor,
  bgColor,
}) => {
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
                 w-full lg:w-auto xl:w-auto px-6 lg:px-[2.2vw] xl:px-[2.3vw] lg:min-w-[8vw] xl:min-w-[8vw] h-12 lg:h-[2.5vh] xl:h-[4.5vh] text-[1rem] lg:text-[0.73vw] xl:text-[0.73vw]
                 rounded-full select-none outline-none border-none
                 ${action ? "cursor-pointer" : "cursor-default drop-shadow-sm"}`}
      style={{
        backgroundColor: bgColor
          ? bgColor
          : isHighlight
            ? "rgba(201, 160, 80, 0.9)"
            : "rgba(177, 178, 176, 0.6)",
        color: textColor ? textColor : isHighlight ? "#113239" : "white",
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
      <span
        className={`relative z-10 opacity-90 ${textColor ? "" : isHighlight ? "text-[#113239] font-bold" : "text-white font-medium"} pointer-events-none drop-shadow-md`}
        style={textColor ? { color: textColor, fontWeight: "bold" } : {}}
      >
        {label}
      </span>
    </motion.button>
  );
};

const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const togglePlay = () => {
    triggerAnimation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/Water and Soothing Meditation.mp3.mpeg"
        loop
      />
      <motion.button
        onMouseEnter={triggerAnimation}
        onClick={togglePlay}
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
        className={`relative flex items-center justify-center overflow-hidden
                   w-12 h-12 lg:w-[2.5vh] lg:h-[2.5vh] xl:w-[4.5vh] xl:h-[4.5vh]
                   rounded-full select-none outline-none border-none cursor-pointer drop-shadow-sm`}
        style={{
          backgroundColor: isPlaying ? "white" : "rgba(177, 178, 176, 0.6)",
          boxShadow: `
            -3px 5px 15px 3px rgba(0,0,0,0.4) inset,
            -16px 12px 30px -12px rgba(0,0,0,1),
            0px 4px 4px 0px rgba(0,0,0,0.25),
            0px 4px 4px 0px rgba(0,0,0,0.4) inset
          `,
        }}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className="relative z-10 w-[45%] h-[45%] flex items-center justify-center pointer-events-none drop-shadow-md">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill={isPlaying ? "black" : "white"}
              d="M21 3v13.5a3.5 3.5 0 1 1-3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.1v11.4a3.5 3.5 0 1 1-3.5-3.5c.54 0 1.05.12 1.5.34V5l14-2Z"
            />
            {!isPlaying && (
              <line
                x1="2"
                y1="2"
                x2="22"
                y2="22"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </div>
      </motion.button>
    </>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide Navbar on Tour pages
  if (pathname === "/virtual-tour" || pathname === "/internal-tour")
    return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    router.push("/");
    const navbarHeight = 20; // approximate fixed navbar height in px
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    if (id == "location") {
      window.scrollTo({ top: top - 50, behavior: "smooth" });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  type NavigationItem = {
    label: string;
    action?: () => void;
    isHighlight?: boolean;
    textColor?: string;
    bgColor?: string;
  };

  const navigationItems: NavigationItem[] = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "Amenities", action: () => scrollToSection("amenities") },
    { label: "Masterplan", action: () => scrollToSection("masterplan") },
    { label: "Floor Plans", action: () => scrollToSection("floor-plans") },
    { label: "Location", action: () => scrollToSection("location") },
    { label: "About Us", action: () => scrollToSection("about") },
    { label: "Contact Us", action: () => scrollToSection("contact") },
    {
      label: "360° View",
      action: () => setIsTourModalOpen(true),
      bgColor: "#e30022",
      textColor: "white",
    },
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
            <div className="flex flex-col h-full p-8 relative overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-white mb-10"
              >
                <X size={32} />
              </button>
              <div className="flex flex-col gap-4 relative z-10">
                {navigationItems.map((item, index) => (
                  <NavigationPill
                    key={index}
                    label={item.label}
                    isHighlight={item.isHighlight}
                    textColor={item.textColor}
                    bgColor={item.bgColor}
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

              {/* Stone Background Image at Bottom */}
              <div className="absolute bottom-0 -right-10 w-[280px] h-[280px] pointer-events-none z-0">
                <Image
                  src="/assets/stone bg.webp"
                  alt="Stone decoration"
                  fill
                  className="object-contain object-bottom rotate-90 object-right"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#113239]/90 backdrop-blur-md px-4 py-4 md:px-8 md:py-4 lg:px-[4vw] xl:px-[4vw] lg:py-[2vh] xl:py-[2vh] shadow-xl"
            : "bg-transparent px-4 py-6 md:px-10 md:py-8 lg:px-[5vw] xl:px-[5vw] lg:py-[4vh] xl:py-[4vh]"
        }`}
      >
        <div className="shrink-0 order-1 lg:order-2 relative z-[99] ">
          <Link href="/">
            <Image
              src="/assets/navbar-right-logo.webp"
              alt="Logo"
              width={200}
              height={100}
              priority
              className={`w-24 md:w-36 lg:w-[8.5vw] xl:w-[8.5vw] h-auto object-contain cursor-pointer ${
                scrolled || isOpen ? "block" : "hidden"
              } lg:block xl:block`}
            />
          </Link>
        </div>
        <nav className="hidden lg:flex xl:flex flex-wrap gap-x-[1.2vw] gap-y-[1vh] order-2 lg:order-1 xl:order-1 justify-center items-center">
          {navigationItems.map((item, index) => (
            <NavigationPill
              key={index}
              label={item.label}
              action={item.action}
              isHighlight={item.isHighlight}
              textColor={item.textColor}
              bgColor={item.bgColor}
            />
          ))}
          <MusicButton />
        </nav>
        <div className="flex items-center gap-4 lg:hidden order-2">
          <div className="scale-90 md:scale-100">
            <MusicButton />
          </div>
          <button onClick={() => setIsOpen(true)} className="text-white">
            <Menu size={32} />
          </button>
        </div>
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

      <TourSelectionModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </>
  );
};
