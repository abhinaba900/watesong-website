"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CompanySection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex flex-col justify-start pt-[30vh] lg:pt-[10vh] lg:mt-[10vh] pb-[15vh] lg:pb-[10vh] lg:mb-[40vh]">
      {/* Left-Aligned Text Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[6vw] lg:px-[8vw] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left max-w-[95dvw] lg:max-w-[55dvw]"
        >
          {/* Main Title */}
          <h2 className="text-white font-normal lg:font-normal uppercase tracking-wider text-[1.6rem] md:text-[2.2vw] lg:text-[1.8vw]  lg:leading-[1.5] mb-6 lg:mb-2 pointer-events-auto lg:leading-tight">
            PRIVAE: <br className="lg:hidden" /> SEASONED EXPERIENCE. <br  className="lg:hidden"/> FRESH THINKING.
          </h2>

          {/* Stats Bar */}
          <div className="text-white font-normal uppercase tracking-widest text-[1.6rem] md:text-[2vw] lg:text-[1.8vw] mb-6 lg:mb-8 flex flex-wrap items-center gap-x-4 lg:gap-y-2 pointer-events-auto">
            <span className=" font-normal whitespace-nowrap">20 YEARS</span>
            <span className="text-[#FF3B30] font-light hidden lg:block">|</span>
            <span className="font-normal whitespace-nowrap">
              4 MILLION SQ. FT.
            </span>
          </div>

          {/* Descriptive Text */}
          <p className="text-white/80 font-medium text-[1rem]  leading-[1.7] md:text-[1.8vw] lg:text-[1rem] lg:leading-[1.8] pointer-events-auto z-20">
            Privae draws from a legacy of building world-class living spaces. A
            deep understanding of market needs and individual aspirations,
            combined with strong technical expertise, guides every decision. The
            brand is shaped by industry professionals with over 60 years of
            combined experience, often surpassing established benchmarks.
          </p>
        </motion.div>
      </div>

      {/* Visual Elements Container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Boat - Bottom Leftish */}
        <motion.div
          animate={{ rotate: [-0.5, 1], y: ["-1%", "1%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute left-[-22vw] lg:left-[-6vw] bottom-[-15vh] lg:bottom-[-52vh] w-[65vw] md:w-[45vw] lg:w-[40vw] z-5 opacity-80 lg:opacity-100"
        >
          <Image
            src="/assets/fishing boat.webp"
            alt="Fishing boat"
            width={600}
            height={800}
            className="object-contain w-full  rotate-[0deg] translate-x-[30%] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Wooden Pier - Middle Right */}
        <motion.div className="absolute right-16 bottom-[70vh] lg:top-[60%] w-[40vw] md:w-[25vw] lg:w-[40dvw] z-5 translate-x-[20%] lg:translate-x-[15%]  lg:opacity-100">
          <Image
            src="/assets/hf_20260304_121041_3fde8b1c-31ed-4253-9046-06cd9fa2486e.webp"
            alt="Wooden pier"
            width={800}
            height={200}
            className="object-contain transform   skew-y-2 w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Animated Fish Group - Center Bottom */}
        <div className="absolute bottom-[-13vh] left-[48%] -translate-x-1/2 flex gap-[8vw] lg:gap-[6vw] opacity-80">
          <motion.div
            animate={{ x: [15, -15], y: [10, -10], rotate: [10, -10] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 1,
            }}
            className="w-[50vw] lg:w-[17vw] mt-12"
          >
            <Image
              src="/assets/fish-image-2.webp"
              alt=""
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
