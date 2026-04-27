"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="w-full h-screen bg-transparent" />;

  return (
    <section className="relative w-full h-screen bg-transparent">
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-[4vw] lg:pl-[10vw] lg:pr-[5vw] pt-[10vh] lg:pt-0 gap-0 lg:gap-0 h-full pointer-events-none">
        
        {/* Make children pointer-events-auto so they can be interacted with, but the background passes clicks to the global ripple */}
        {/* LEFT */}
        <div className="flex flex-col items-start lg:items-start w-full lg:w-[45vw] h-full justify-center relative pointer-events-auto">
          {/* Top Logo Cluster */}
          <div className="flex flex-col items-start lg:items-start mb-6 lg:mb-[6vh] mt-4 lg:mt-0 z-10">
            {/* PRIVAE Logo */}
            <div className="mb-1 lg:mb-2 ml-0 lg:ml-2">
              <Image
                src="/assets/navbar-right-logo.webp"
                alt="Privae"
                width={120}
                height={40}
                className="object-contain w-[20vw] lg:w-[7vw] hidden lg:block"
              />
            </div>

            {/* Watersong Logo */}
            <Image
              src="/assets/watersong-logo-blue.webp"
              alt="Watersong"
              width={500}
              height={150}
              className="w-[65vw] lg:w-[28vw] object-contain mb-1 -lg:mb-16"
            />

            <h2 className="text-white font-semibold text-[4vw] lg:text-[1.5vw] tracking-wide mb-1 lg:ml-[1vw] text-center lg:text-left drop-shadow-md">
              Lakefront Residences
            </h2>
            <p className="text-white font-semibold text-[3vw] lg:text-[1.1vw] lg:ml-[1vw] text-center lg:text-left drop-shadow-md opacity-90">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>

          {/* Spacious Premium Cluster */}
          <div className="flex flex-col items-center lg:items-start z-10 lg:ml-4  mx-auto lg:mx-0">
            <h2 className="font-overwave text-white text-[6vw] lg:text-[2.5vw] uppercase tracking-wider mb-2 lg:mb-4 drop-shadow-lg text-center lg:text-left leading-none">
              Spacious Premium
            </h2>

            <p className="text-white/90 text-[3.5vw] lg:text-[1.25vw] text-center lg:text-left font-light leading-relaxed drop-shadow-md">
              3 BHK+ Homes from
              <br />
              2565 to 3495 sq. ft.
            </p>
          </div>
        </div>

        {/* Floating Lotus Bottom Left - Overflows the section */}
        <div className="absolute  top-[50vh] lg:bottom-[-10vh] left-[4vw] lg:left-[2vw] z-20 pointer-events-none w-[20vw] lg:w-[10vw]">
          <Image
            src="/assets/with-flower-lily-image.webp"
            alt="Lotus Flower"
            width={120}
            height={120}
            className="w-full h-auto object-contain drop-shadow-2xl opacity-90"
          />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center w-full lg:w-[50vw] h-full relative z-10 translate-y-[2vh] lg:translate-y-[4vh] pointer-events-auto">
          <div className="relative aspect-square w-full lg:w-[55vw] ">
            <Image
              src="/assets/elevation.webp"
              alt="Elevation"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
