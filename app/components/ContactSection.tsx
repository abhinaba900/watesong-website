"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialIconButton: React.FC<{
  icon: string;
  index: number;
  href: string;
}> = ({ icon, index, href }) => {
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
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-[12vw] md:w-[6vw] lg:w-[3.5vw] aspect-square rounded-full transition-colors pointer-events-auto overflow-hidden hover:bg-white/10"
      aria-label={`Social media link ${index + 1}`}
    >
      <div className="relative w-full h-full mix-blend-screen">
        <Image
          src={icon}
          alt={`Social icon ${index + 1}`}
          fill
          className="object-contain opacity-90"
        />
      </div>
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber] = useState("7026112224");

  const socialIcons = [
    {
      icon: "/assets/instagram-icon.webp",
      href: "https://www.instagram.com/habitatventures",
    },
    {
      icon: "/assets/facebook-icon.webp",
      href: "https://www.facebook.com/habitatventures",
    },
    {
      icon: "/assets/linkedin-icon.webp",
      href: "https://www.linkedin.com/company/habitatventures",
    },
    {
      icon: "/assets/twtter-icon.webp",
      href: "#",
    },
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  return (
    <section className="relative no-scrollbar bg-transparent w-full px-[5vw] lg:px-[5vw] py-[8vh] lg:py-[5vh] overflow-x-hidden">
      {/* Main Grid */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-[4vw] py-[1rem] gap-10 lg:gap-4 mt-[10vh]">
        {/* COLUMN 1 */}
        <div className="w-full lg:w-[35%] flex flex-col items-start text-center lg:text-left text-white pointer-events-auto">
          <div className="mb-[2vh]">
            <Image
              src="/assets/navbar-right-logo.webp"
              alt="PRÍVAE"
              width={120}
              height={40}
              className="object-contain w-[171px] md:w-[10vw] lg:w-[6vw] ml-[1rem] lg:ml-0"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/assets/watersong-logo-blue.webp"
              alt="Watersong"
              width={600}
              height={200}
              className="object-contain w-[350px] md:w-[50vw] lg:w-[24vw] mb-[-1vh]"
            />
            <h3 className="text-[20px] md:text-[4vw] lg:text-[1.6vw] ml-[-4rem] lg:ml-0 mt-[-1.5rem] lg:mt-[-1rem] font-medium tracking-tight mb-[0.5vh]">
              Lakefront Residences
            </h3>
            <p className="text-[14px] md:text-[2.2vw] lg:text-[1vw] font-medium opacity-80">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] flex flex-col items-center gap-[4vh] pointer-events-auto">
          <div className="flex items-center gap-[4vw] lg:gap-[1.5vw] isolate">
            {socialIcons.map((social, index) => (
              <SocialIconButton
                key={index}
                icon={social.icon}
                href={social.href}
                index={index}
              />
            ))}
          </div>

          <button
            onClick={handleCallClick}
            className="text-[7vw] md:text-[5vw] lg:text-[1.8vw] text-white font-medium flex items-center gap-3 hover:opacity-80 transition-opacity tracking-wide"
          >
            <Image
              src="/assets/call-icon-svg.svg"
              alt="Call"
              width={30}
              height={30}
              className="w-[5vw] md:w-[3vw] lg:w-[1.4vw] brightness-0 invert"
            />
            {phoneNumber}
          </button>
        </div>

        {/* COLUMN 3 */}
        <div className="w-full lg:w-[35%]  relative flex justify-center lg:justify-end pointer-events-auto">
          <div className="relative lg:mb-10 w-full lg:w-[90%] lg:mt-[-3rem] z-10">
            <Image
              src="/assets/footer right side image.webp"
              alt="Lakefront Residence"
              width={900}
              height={500}
              className="object-contain w-full h-auto drop-shadow-2xl scale-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
