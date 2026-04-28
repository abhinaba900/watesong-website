"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Shared floating animation settings
const floatAnim = {
  animate: {
    rotate: [-3, 3] as [number, number],
    y: ["-4%", "4%"] as [string, string],
  },
  transition: {
    rotate: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
    y: {
      duration: 4.5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  },
} as const;

export const FeatureSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="highlights" className="relative w-full pt-[10vh] lg:pt-[12vh]">
      {/* ── BLOCK 1 ─ Just 40 Residences ───────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[2vh] lg:py-[2vh] gap-0 lg:gap-[4vw] pointer-events-none">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50vw] flex justify-center items-center order-2 lg:order-1 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full lg:w-[55vw]">
            <Image
              src="/assets/features-so-thoughtful-you-feel-spcial.webp"
              alt="Family enjoying life at Watersong"
              fill
              className="object-contain drop-shadow-2xl scale-[1.3] lg:scale-auto"
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] mb-0 lg:mt-[20vh] text-white text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center z-10 pointer-events-auto"
        >
          <div className="flex flex-col items-start lg:items-start gap-3 lg:gap-4 mb-6">
            <h2 className="font-overwave text-white text-[6.5vw] lg:text-[1.8vw] leading-tight tracking-wide drop-shadow-lg uppercase text-center lg:text-left">
              Just forty Residences.
            </h2>
            <h2 className="font-overwave text-white text-[6.5vw] lg:text-[1.8vw] leading-tight tracking-wide drop-shadow-lg uppercase text-center lg:text-left">
              Just two homes per floor.
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/90 text-left lg:text-left font-medium leading-relaxed text-[20px] lg:text-[18px] lg:max-w-[90%] mx-auto lg:mx-0 drop-shadow-md"
          >
            Homes at Watersong are so private, it feels like a villa.{" "}
            <br className="hidden lg:block" /> No doors face each other. No
            shared walls. <br className="hidden lg:block" /> Only expansive
            balconies, open air & a serene lake view.
          </motion.p>
        </motion.div>

        {/* Top Right Floating Lotus */}
        <div className="absolute -top-[20%] right-0 lg:-top-[5%] lg:right-[5%] pointer-events-none z-20 w-[150px] lg:w-[280px]">
          <Image
            src="/assets/Lotus - webp.webp"
            alt="Lotus"
            width={300}
            height={300}
            className="w-full h-auto mt-6 object-contain drop-shadow-2xl opacity-90"
          />
        </div>
      </div>

      {/* ── BLOCK 2 ─ Lake Lounge ───────────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[0vh] lg:py-[2vh] gap-0 lg:gap-[4vw] pointer-events-none">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] text-white text-center lg:text-left order-1 flex flex-col justify-center lg:pl-[6vw] z-10 pointer-events-auto"
        >
          {/* FLOATING LOTUS */}
          <div className="mb-0 lg:mb-8 flex justify-start lg:justify-start lg:ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/middle image.webp"
                alt="Lotus"
                width={300}
                height={300}
                className="h-auto object-contain opacity-90 s transform -translate-x-[20%] lg:translate-x-0 translate-y-0 lg:translate-y-0 rotate-180 lg:rotate-0  w-[220px] lg:w-[260px]"
              />
            </motion.div>
          </div>

          <motion.p className="text-white/90 text-left lg:text-left max-w-[90%] lg:max-w-[100%] mx-auto lg:mx-0 font-medium uppercase tracking-[0.1em] lg:tracking-[0.15em] mb-2 font-light text-[18px] lg:text-[15px]">
            A lake like this deserves
          </motion.p>

          <h2 className="font-overwave text-white text-left max-w-[90%] lg:max-w-[100%] ml-[7%] lg:mx-0 lg:text-left text-[6.5vw] lg:text-[1.8vw] tracking-wider mb-4 drop-shadow-lg uppercase mx-0 lg:mx-0 leading-none">
            A Lake Lounge
          </h2>

          <motion.p className="text-white/80 font-medium max-w-[90%] lg:max-w-[100%] ml-[7%] lg:mx-0 lg:text-left uppercase tracking-wide lg:tracking-widest mb-6 font-light text-[18px] lg:text-[14px]">
            UP TO 200 SQ. FT. LAKE LOUNGE.
          </motion.p>

          {/* PARAGRAPH */}
          <motion.p className="text-white/80 font-medium text-left lg:text-left ml-[7%] lg:mx-0 leading-relaxed text-[20px] lg:text-[15px] lg:max-w-[90%] lg:max-w-[95%] mx-auto lg:mx-0 drop-shadow-md">
            Forget boring balconies. Step out into a rare 200 sq. ft.{" "}
            <br className="hidden lg:block" /> lake lounge: your private front
            row to rippling water, <br className="hidden lg:block" /> open
            skies, and evening breeze. It is a place to linger,{" "}
            <br className="hidden lg:block" /> breathe, and truly unwind.
          </motion.p>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[50vw] flex justify-center items-center order-2 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full lg:w-[55vw]">
            <Image
              src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
              alt="Lake lounge"
              fill
              className="object-contain drop-shadow-2xl scale-[1.3] lg:scale-auto"
            />
          </div>
        </motion.div>
      </div>
      {/* ── BLOCK 3 ─ Healthy & Active Lifestyle ────────────────────────── */}
      <div
        id="amenities"
        className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[0vh] lg:py-[2vh] gap-0 lg:gap-[4vw] pointer-events-none"
      >
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50vw] flex justify-center items-center order-2 lg:order-1 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full scale-[0.77] lg:w-[55vw] ">
            <Image
              src="/assets/swimming.webp"
              alt="Swimming Pool"
              fill
              className="object-contain drop-shadow-2xl scale-[1.35] lg:scale-auto"
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] text-white text-left lg:text-left order-1 lg:order-2 flex flex-col justify-start z-10 lg:pl-[4vw] pointer-events-auto"
        >
          {/* LILY (TOP DECORATION) */}
          <div className="flex justify-start lg:justify-start -ml-4 mb-6 lg:mb-8 lg:-ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/with-flower-lily-image.webp"
                alt="Lotus"
                width={160}
                height={160}
                className="h-auto object-contain opacity-90 w-[150px] lg:w-[140px]"
              />
            </motion.div>
          </div>

          {/* HEADING */}
          <h2 className="font-overwave text-white text-left lg:text-left text-[5.5vw] lg:text-[1.8vw] tracking-wider mb-6 drop-shadow-lg uppercase mx-0 lg:mx-0 leading-tight">
            Healthy and Active Lifestyle
          </h2>

          {/* LIST */}
          <ul className="text-white/90 font-medium leading-[1.8] text-[20px] text-left lg:text-[16px] lg:max-w-[90%] mx-0 lg:mx-0 text-left list-none space-y-1">
            {[
              "Jogging / Walking Path",
              "Children’s play area",
              "Multipurpose court",
              "Private Terrace",
              "Gym",
              "Swimming Pool",
              "Multi-purpose Hall",
              "Indoor Games Room",
              "Open Yoga / Aerobics Area",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── BLOCK 3 ─ Features So Thoughtful ───────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col flex-col-reverse lg:flex-row items-center lg:items-end px-[6vw] lg:px-[8vw] py-[4vh] lg:py-[2vh] pt-0 lg:pt-[20vh] gap-8 lg:gap-[4vw] pointer-events-none">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[60%] flex flex-col items-center lg:items-start order-2 lg:order-1 relative z-10 lg:pb-[5vh] pointer-events-auto"
        >
          {/* Framed Image */}
          <div className="relative w-full max-w-[900px] aspect-[4/3] lg:aspect-[16/10] rounded-[16px] lg:rounded-[24px] overflow-hidden border-[2px] lg:border-[4px] border-white/20 shadow-2xl mb-4 lg:mb-6">
            <Image
              src="/assets/just-40-residences.webp"
              alt="Family"
              fill
              className="object-cover"
            />
          </div>

          {/* Caption Image */}
          <h2 className="font-overwave text-white text-left lg:text-left text-[4.5vw] lg:text-[1.8vw] tracking-wider drop-shadow-md uppercase mx-auto lg:mx-0 lg:ml-[2vw] text-center lg:text-left leading-tight mt-4">
            Features so thoughtful, you feel special
          </h2>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[40%] text-white text-center lg:text-left order-1 lg:order-2 flex flex-col  flex-col-reverse justify-end lg:h-[70vh] z-10 lg:pl-[4vw] pb-[0h] lg:pb-[12vh] pointer-events-auto"
        >
          {/* FLOATING FISH */}
          <div className="absolute top-[18vh] lg:top-[5vh] -right-[15vw] lg:left-[1vw] pointer-events-none z-0">
            <motion.div
              animate={{ x: ["-3%", "3%"], y: ["-2%", "2%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="w-[240px] h-0 lg:w-[260px] "
            >
              <Image
                src="/assets/fish-image-1.webp"
                alt="Fish group"
                width={260}
                height={180}
                className="w-full h-auto opacity-80 drop-shadow-lg"
              />
            </motion.div>
          </div>

          {/* LIST */}
          <ul className="text-white/85 font-medium leading-[2] text-[20px] lg:text-[15px] max-w-[90%] mx-0 lg:mx-0 text-left list-none space-y-1 relative z-10 mt-[0vh] lg:mt-auto">
            {[
              "Double-height car parking",
              "3 balconies per home",
              "Anti-skid tiles on the balcony",
              "Seamless common areas",
              "Provision for island kitchen",
              "No common walls",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
