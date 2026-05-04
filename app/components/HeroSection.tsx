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
          <div className="flex flex-col items-start lg:items-start xl:items-start ml-1 mb-6 lg:mb-[2vh] xl:mb-[10vh] mt-4 lg:mt-0 xl:mt-0 z-10">
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
              className="w-[226px] lg:w-[30vw] xl:w-[24vw] object-contain mb-1 -lg:mb-16 -xl:mb-16"
            />

            <h2 className="text-white font-semibold text-[20px] lg:text-[1.3rem] xl:text-[1.5vw] lg:mt-[-1rem] xl:mt-[-1.5rem] tracking-wide mb-1 lg:ml-[1vw] text-center lg:text-left drop-shadow-md">
              Lakefront Residences
            </h2>
            <p className="text-white font-medium text-[14px] lg:text-[1rem] xl:text-[1.1vw] lg:ml-[1vw] xl:ml-[1vw] text-center lg:text-left drop-shadow-md opacity-90">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>

          {/* Spacious Premium Cluster */}
          <div className="flex flex-col items-center lg:items-start xl:items-start z-10 lg:ml-4 xl:ml-4 mx-auto lg:mx-0 xl:mx-0">
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-overwave text-white text-[2rem] lg:text-[2.5rem] xl:text-[3.2vw] uppercase tracking-wider mb-2 lg:mb-4 xl:mb-4 drop-shadow-lg text-center lg:text-left xl:text-left leading-none"
            >
              Spacious Premium
            </h2>

            <p className="text-white/90 text-[16px] lg:text-[1.2rem] xl:text-[1.4vw] text-center lg:text-left xl:text-left font-light leading-relaxed drop-shadow-md">
              3 BHK+ Homes from
              <br />
              2565 to 3495 sq. ft.
            </p>
          </div>
        </div>

        {/* Floating Lotus Bottom Left - Overflows the section */}
        <div className="absolute  top-[20rem] floating-lotus-buttom-left lg:top-[38rem] xl:top-auto lg:bottom-[-10vh] xl:bottom-[-10vh] left-[8vw] lg:left-[2vw] xl:left-[2vw] z-20 pointer-events-none w-[20vw] lg:w-[10vw] xl:w-[10vw]">
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
