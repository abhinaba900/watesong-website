"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SocialIconButton: React.FC<{
  icon: string;
  index: number;
  href: string;
}> = ({ icon, index, href }) => {
  const controls = useAnimation();

  const triggerAnimation = () => {
    controls.start({
      scale: [1, 1.15, 0.9, 1.08, 1],
      scaleX: [1, 1.2, 0.8, 1.1, 1],
      scaleY: [1, 0.8, 1.2, 0.9, 1],
      rotate: [0, -3, 3, -1.5, 0],
      transition: {
        duration: 0.45,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.7, 1],
      },
    });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={triggerAnimation}
      animate={controls}
      initial={{ scale: 1, rotate: 0 }}
      whileTap={{ scale: 0.92 }}
      className="relative flex items-center justify-center w-[16vw] md:w-[6vw] lg:w-[5vw] xl:w-[3.5vw] aspect-square rounded-full pointer-events-auto group overflow-hidden"
      style={{
        backgroundColor: "rgba(177, 178, 176, 0.6)",
        boxShadow: `
          -3px 5px 15px 3px rgba(0,0,0,0.4) inset,
          -16px 12px 30px -12px rgba(0,0,0,1),
          0px 4px 4px 0px rgba(0,0,0,0.25),
          0px 4px 4px 0px rgba(0,0,0,0.4) inset
        `,
      }}
      aria-label={`Social media link ${index + 1}`}
    >
      <div className="relative w-[50%] h-[50%] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={icon}
          alt={`Social icon ${index + 1}`}
          fill
          className="object-contain opacity-90 drop-shadow-md"
        />
      </div>
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber] = useState("+91 70261-12224");

  const socialIcons = [
    {
      icon: "/assets/instagram-icon.webp",
      href: "https://www.instagram.com/privae_realty/",
    },
    {
      icon: "/assets/facebook-icon.webp",
      href: "https://www.facebook.com/profile.php?id=61588515953675",
    },
    {
      icon: "/assets/linkedin-icon.webp",
      href: "https://www.linkedin.com/company/privae-reality-llp/",
    },
    {
      icon: "/assets/twtter-icon.webp",
      href: "https://x.com/PrivaeRealty",
    },
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/[\s-]/g, "")}`;
  };

  return (
    <div className="overflow-hidden">
      <section className="relative no-scrollbar bg-transparent w-full px-[5vw] lg:px-[5vw] xl:px-[5vw] py-[8vh] pb-8 lg:pb-[5vh] xl:pb-[5vh] lg:py-[5vh] xl:py-[5vh] overflow-x-hidden">
        {/* Main Grid */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row xl:flex-row items-center justify-between px-0 py-[1rem] gap-10 lg:gap-4 xl:gap-4 mt-[10vh]">
          {/* COLUMN 1 */}
          <div className="w-full lg:w-[35%] xl:w-[35%] flex flex-col items-start text-center lg:text-left xl:text-left text-white pointer-events-auto">
            <div className="mb-[2vh]">
              <Image
                src="/assets/navbar-right-logo.webp"
                alt="PRÍVAE"
                width={120}
                height={40}
                className="object-contain w-[171px] md:w-[10vw] lg:w-[6vw] xl:w-[6vw]"
              />
            </div>

            <div className="flex flex-col items-start lg:items-start xl:items-start">
              <Image
                src="/assets/watersong-logo-blue.webp"
                alt="Watersong"
                width={600}
                height={200}
                className="object-contain w-[350px] md:w-[50vw] lg:w-[24vw] xl:w-[24vw] mb-[-1vh]"
              />
              <h3 className="text-[20px] md:text-[4vw] lg:text-[1.6vw] xl:text-[1.6vw]  lg:ml-0 xl:ml-0  lg:mt-[-0.5rem] xl:mt-[-1rem] font-medium tracking-tight mb-[0.5vh]">
                Lakefront Residences
              </h3>
              <p className="text-[14px] md:text-[2.2vw] lg:text-[1vw] xl:text-[1vw] font-medium opacity-80">
                1 KM from Nallurhalli Metro, Whitefield
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[30%] xl:w-[30%] flex flex-col items-center xl:gap-[4vh] gap-[4vh] lg:gap-[2vh] pointer-events-auto">
            <div className="flex items-center gap-[4vw] lg:gap-[1.5vw] xl:gap-[1.5vw] isolate">
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
              className="text-[7vw] md:text-[5vw] lg:text-[1.8vw] xl:text-[1.8vw] text-white font-medium flex items-center gap-3 hover:opacity-80 transition-opacity tracking-wide"
            >
              <Image
                src="/assets/call-icon-svg.svg"
                alt="Call"
                width={30}
                height={30}
                className="w-[5vw] md:w-[3vw] lg:w-[1.4vw] xl:w-[1.4vw] brightness-0 invert"
              />
              {phoneNumber}
            </button>
          </div>

          {/* COLUMN 3 */}
          <div className="w-full lg:w-[35%] xl:w-[35%]  relative flex justify-center lg:justify-end xl:justify-end pointer-events-auto">
            <div className="relative lg:mb-10 xl:mb-10 w-full lg:w-[90%] xl:w-[90%] lg:mt-[-3rem] xl:mt-[-3rem] z-10">
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

      <footer className="relative bg-transparent w-full px-[5vw] lg:px-[5vw] xl:px-[5vw] pb-[6vh] lg:pb-[6vh] xl:pb-[8vh] pt-0  no-scrollbar">
        {/* Corner Stones Pile */}
        <div className="absolute right-0 buttom-stone-for-some-screen -bottom-5 w-[75vw] lg:w-[15vw] xl:w-[15vw] h-[5vh] z-0 opacity-100 -translate-y-35 lg:-translate-y-16 xl:-translate-y-35 pointer-events-none">
          <Image
            src="/assets/stone bg.webp"
            alt="Decorative stones"
            width={600}
            height={200}
            className="object-contain w-full h-auto rotate-180 scale-x-[-1]"
          />
        </div>

        <div className="flex flex-col relative w-full items-center z-10 pointer-events-none">
          {/* Decorative Wave Line */}
          <div className="w-full mb-[4vh] lg:mb-[5vh] xl:mb-[5vh] mt-[-1vh] lg:mt-[-4vh] xl:mt-[-4vh]">
            <Image
              src="/assets/line-for-footer.webp"
              alt="Decorative line"
              width={1920}
              height={100}
              className="w-full h-auto object-contain opacity-100 lg:opacity-50 xl:opacity-50 brightness-0 invert"
            />
          </div>

          {/* Footer Links & Copyright */}
          <div
            className="relative flex flex-col md:flex-row w-full justify-between items-center 
                        gap-[0.5rem] md:gap-[2vw] 
                        text-white font-normal text-center 
                        text-[1rem] md:text-[1.5vw] lg:text-[0.9vw] xl:text-[0.9vw] tracking-[0.02em] pointer-events-auto"
          >
            {/* Copyright Section */}
            <div className="opacity-60 font-medium ">
              © 2026 All Right Reserved by PRIVAE
            </div>

            {/* Links Section */}
            <div className="flex items-center gap-[6vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw]">
              <Link
                href="/terms-and-conditions"
                className="opacity-80 font-medium hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                Terms and conditions
              </Link>
              <span className="opacity-30">|</span>
              <Link
                href="/privacy-policy"
                className="opacity-80 font-medium hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
