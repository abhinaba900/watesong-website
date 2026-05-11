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
    <section className="relative w-full h-fit lg:h-[50vh] xl:h-screen bg-transparent">
      <div className="relative lg:absolute xl:absolute lg:inset-0 xl:inset-0 flex flex-col lg:flex-row xl:flex-row items-center justify-center lg:justify-between xl:justify-between px-[4vw] lg:pl-[5vw] xl:pl-[10vw] lg:pr-[5vw] xl:pr-[5vw] pt-[0.8rem] lg:pt-10 xl:pt-0 gap-8 lg:gap-0 xl:gap-0 h-auto lg:h-full xl:h-full pointer-events-none">
        {/* Make children pointer-events-auto so they can be interacted with, but the background passes clicks to the global ripple */}
        {/* LEFT */}
        <div className="flex flex-col  items-start lg:items-start xl:items-start w-full lg:w-[45vw] xl:w-[45vw] h-auto lg:h-full xl:h-full justify-center relative pointer-events-auto gap-4 lg:gap-0 xl:gap-0">
          {/* Top Logo Cluster */}
          <div className="flex flex-col items-start lg:items-start xl:items-start ml-1 mb-6 lg:mb-[2vh] xl:mb-[6vh] mt-4 lg:mt-0 xl:mt-0 z-10">
            {/* PRIVAE Logo */}
            <div className="mb-1 lg:mb-2 xl:mb-2 lg:ml-2 xl:ml-2">
              <Image
                src="/assets/navbar-right-logo.webp"
                alt="Privae"
                width={120}
                height={40}
                className="object-contain w-[94px] lg:w-[10vw] xl:w-[7vw] "
              />
            </div>

            {/* Watersong Logo */}
            <Image
              src="/assets/watersong-logo-blue.webp"
              alt="Watersong"
              width={500}
              height={150}
              className="w-[226px] lg:w-[30vw] xl:w-[24vw] object-contain mb-4 lg:mb-2 xl:mb-2"
            />

            <h2 className="text-white font-semibold text-[20px] lg:text-[1.3rem] xl:text-[1.5vw] tracking-wide mb-1 lg:ml-[1vw] text-center lg:text-left drop-shadow-md -mt-10">
              Lakefront Residences
            </h2>
            <p className="text-white font-medium text-[14px] lg:text-[1rem] xl:text-[1.1vw] lg:ml-[1vw] xl:ml-[1vw] text-center lg:text-left drop-shadow-md opacity-90">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>

          {/* Feature Highlight Cluster */}
          <div className="flex flex-col items-start z-10 lg:ml-4 xl:ml-4 gap-4 lg:gap-[1.5vh] xl:gap-[2vh] mb-8 lg:mb-[2vh] xl:mb-[6vh]">
            <h3 className="text-white text-[1.8rem] lg:text-[2.2rem] xl:text-[2.4vw] uppercase tracking-wider drop-shadow-md leading-none font-medium">
              <span className="font-bold">ONE</span> NEIGHBOUR
            </h3>
            <h3 className="text-white text-[1.8rem] lg:text-[2.2rem] xl:text-[2.4vw] uppercase tracking-wider drop-shadow-md leading-none font-medium">
              <span className="font-bold">ONE</span> LAKE LOUNGE
            </h3>
            <h3 className="text-white text-[1.8rem] lg:text-[2.2rem] xl:text-[2.4vw] uppercase tracking-wider drop-shadow-md leading-none font-medium">
              <span className="font-bold">ONE</span> ELEVATOR ACCESS
            </h3>
            <p className="text-white/80 text-[12px] lg:text-[14px] xl:text-[0.9vw] mt-1 italic drop-shadow-sm">
              *One private elevator access per home per floor.
            </p>
          </div>

          {/* Configuration Cluster */}
          <div className="flex flex-col items-start z-10 lg:ml-4 xl:ml-4">
            <p className="text-white text-[1.4rem] lg:text-[1.8rem] xl:text-[2vw] uppercase tracking-wide drop-shadow-md leading-tight font-medium">
              3 BHK+ HOMES FROM
              <br />
              2565 TO 3495 SQ. FT.
            </p>
          </div>
        </div>

        {/* Floating Lotus Bottom Left - Overflows the section */}
        <div className="absolute  top-[22rem] floating-lotus-buttom-left lg:top-[38rem] xl:top-auto lg:bottom-[-10vh] xl:bottom-[-12vh] left-[8vw] lg:left-[2vw] xl:left-[2vw] z-20 pointer-events-none w-[20vw] lg:w-[10vw] xl:w-[10vw]">
          <Image
            src="/assets/with-flower-lily-image.webp"
            alt="Lotus Flower"
            width={120}
            height={120}
            className="w-full h-auto scale-[1] lg:scale-[1.2] xl:scale-auto object-contain drop-shadow-2xl opacity-90"
          />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center w-full lg:w-[50vw] xl:w-[50vw] h-auto lg:h-full xl:h-full relative z-10 translate-y-[2vh] lg:translate-y-[0] xl:translate-y-[4vh] pointer-events-auto pb-12 lg:pb-0 xl:pb-0">
          <div className="relative aspect-square w-full lg:w-[45vw] xl:w-[45vw] ">
            <Image
              src="/assets/elevation.webp"
              alt="Elevation"
              fill
              className="object-contain scale-[1.2] lg:scale-[1.3] xl:scale-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
