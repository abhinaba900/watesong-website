"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WaterRipple } from "./WaterRipple";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <section className="w-full h-[100dvh] lg:h-screen bg-[#113239]" />;

  return (
    <section className="relative w-full overflow-hidden font-sans h-[100dvh] lg:h-[60vh] xl:h-screen bg-[#113239]">
      <WaterRipple
        backgroundImage="/assets/hero-bg-image.webp"
        className="absolute inset-0 z-0 h-full w-full"
      >
        {/* 2. Black Overlay */}
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

        {/* 4. Content Wrapper */}
        <div className="absolute inset-0 z-10 flex flex-col w-full h-full px-6 py-6 md:px-10 md:py-8 lg:px-[5vw] lg:py-[4vh] mx-auto">
          
          <div className="flex flex-col flex-grow justify-center mt-4 lg:mt-0 mb-4 lg:mb-[4vh] pt-[12vh] lg:pt-[10vh]">
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
                <Image
                  src="/assets/card-inside-image-of-hero-section.webp"
                  alt="Brand"
                  width={100}
                  height={100}
                  className="w-16 md:w-28 lg:w-[7vw] mb-3 lg:mb-[2vh] h-auto object-contain"
                />
                <Image
                  src="/assets/watersong-logo-blue.webp"
                  alt="Watersong"
                  width={300}
                  height={100}
                  className="w-40 md:w-56 lg:w-[14.5vw] object-contain mb-2 h-auto"
                />
                <h2 className="text-[#0C637E] font-bold text-lg md:text-2xl lg:text-[1.25vw]">
                  Lakefront Residences
                </h2>
                <p className="text-[#0C637E] font-medium text-xs md:text-base lg:text-[0.73vw] mt-1">
                  1 KM from Nallurhalli Metro, Whitefield
                </p>
              </div>
              <div className="w-full lg:w-[45%] relative h-50 md:h-72 lg:h-full">
                <Image
                  src="/assets/lackfront-recidance.webp"
                  alt="Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.article>
          </div>
        </div>
      </WaterRipple>
    </section>
  );
};
