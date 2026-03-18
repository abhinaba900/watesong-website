"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialIconButton: React.FC<{ icon: string; index: number }> = ({
  icon,
  index,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <motion.button
      onMouseEnter={triggerAnimation}
      onClick={triggerAnimation}
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
      // Removed will-change-transform to save GPU memory
      className="relative cursor-pointer select-none outline-none border-none"
      aria-label={`Social media link ${index + 1}`}
    >
      <Image
        src={icon}
        alt={`Social icon ${index + 1}`}
        width={100}
        height={100}
        className="aspect-square object-contain w-[12vw] md:w-[8vw] lg:w-[4vw] h-auto"
      />
    </motion.button>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("7026112224");

  const socialIcons = [
    "/assets/facebook-icon.webp",
    "/assets/instagram-icon.webp",
    "/assets/twtter-icon.webp",
    "/assets/linkedin-icon.webp",
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    // Removed overflow-hidden from the section
    <section className="relative bg-transparent w-full px-[5vw] lg:px-[8vw] py-[4vh] lg:pt-[6vh] lg:pb-[2vh]">
      {/* Main Grid: Stacks on mobile, 3 columns on desktop */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-[8vw] lg:gap-[2vw]">
        {/* LEFT COLUMN: Logos & Address Info */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left text-white font-semibold leading-[1.4]">
          {/* Privae Logo */}
          <Image
            src="/assets/navbar-right-logo.webp"
            alt="Privae logo"
            width={300}
            height={100}
            className="object-contain w-[40vw] md:w-[25vw] lg:w-[12vw] mb-[2vh] h-auto"
          />
          {/* Watersong Logo */}
          <Image
            src="/assets/watersong-logo-blue.webp"
            alt="Watersong logo"
            width={400}
            height={150}
            className="object-contain w-[70vw] md:w-[45vw] lg:w-[22vw] h-auto"
          />
          {/* Location Text */}
          <h3 className="text-[6vw] md:text-[4vw] lg:text-[1.8vw] tracking-[-0.04vw]">
            Lakefront Residences
          </h3>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] tracking-[-0.02vw] font-normal opacity-90">
            1 KM from Nallurhalli Metro, Whitefield
          </p>
        </div>

        {/* MIDDLE COLUMN: Socials & Phone Number */}
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center gap-[4vh]">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-[4vw] lg:gap-[1.5vw]">
            {socialIcons.map((icon, index) => (
              <SocialIconButton key={index} icon={icon} index={index} />
            ))}
          </div>

          {/* Phone Number */}
          <button
            onClick={handleCallClick}
            className="text-[7vw] md:text-[5vw] lg:text-[2vw] text-white font-semibold hover:text-blue-300 transition-colors tracking-wide"
          >
            {phoneNumber}
          </button>
        </div>

        {/* RIGHT COLUMN: Illustration / Map */}
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
          <Image
            src="/assets/lackfront-recidance.webp"
            alt="Contact illustration"
            width={800}
            height={640} // Maintains the 1.25 aspect ratio
            className="object-contain w-[80vw] md:w-[60vw] lg:w-[100%] aspect-[1.25] h-auto"
          />
        </div>
      </div>
    </section>
  );
};
