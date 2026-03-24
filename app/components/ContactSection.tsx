"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialIconButton: React.FC<{ icon: string; index: number; href: string }> = ({
  icon,
  index,
  href,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={triggerAnimation}
      onFocus={triggerAnimation}
      onClick={triggerAnimation}
      animate={
        isAnimating
          ? {
              scale: [1.3, 1.45, 1.2, 1.35, 1.3],
              scaleX: [1.3, 1.45, 1.1, 1.35, 1.3],
              scaleY: [1.3, 1.45, 1.4, 1.25, 1.3],
            }
          : {
              scale: 1.3,
              scaleX: 1.3,
              scaleY: 1.3,
            }
      }
      whileTap={{ scale: 1.1 }}
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
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("7026112224");

  const socialIcons = [
    {
      icon: "/assets/facebook-icon.webp",
      href: "https://www.facebook.com/habitatventures",
    },
    {
      icon: "/assets/twtter-icon.webp",
      href: "#",
    },
    {
      icon: "/assets/instagram-icon.webp",
      href: "https://www.instagram.com/habitatventures",
    },
    {
      icon: "/assets/linkedin-icon.webp",
      href: "https://www.linkedin.com/company/habitatventures",
    },
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
            {socialIcons.map((social, index) => (
              <SocialIconButton key={index} icon={social.icon} href={social.href} index={index} />
            ))}
          </div>

          {/* Phone Number */}
          <button
            onClick={handleCallClick}
            className="text-[7vw] md:text-[5vw] flex items-center gap-2 lg:text-[2vw] text-white font-semibold hover:scale-103 transition-all duration-300 tracking-wide"
          >
            <Image
              src="/assets/call-icon-svg.svg"
              alt="Call icon"
              width={100}
              height={100}
              className="object-contain w-[4vw] md:w-[3vw] lg:w-[1.5vw] h-auto "
            />
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
