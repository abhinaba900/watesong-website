"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
const amenitiesData = [
  {
    label: "Jogging / Walking Path",
    image: "/assets/Walking Path.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Children’s play area",
    image: "/assets/Children's play area.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Multipurpose court",
    image: "/assets/Multi-purpose court.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Private Terrace",
    image: "/assets/Private Terrace.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Gym",
    image: "/assets/Gym.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Swimming Pool",
    image: "/assets/swimming.webp",
    scale: "scale-[1.45]",
    fit: "object-contain",
  },
  {
    label: "Multi-purpose Hall",
    image: "/assets/Multipurpose hall.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Indoor Games Room",
    image: "/assets/Indoor Games Room.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
  {
    label: "Open Yoga / Aerobics Area",
    image: "/assets/Yoga.webp",
    scale: "scale-[1.35] lg:scale-[1.48]",
    fit: "object-cover",
  },
];

const featuresData = [
  {
    label: "Double-height car parking",
    image: "/assets/Double-height car parking.webp",
  },
  { label: "3 balconies per home", image: "/assets/3 balconies per home.webp" },
  {
    label: "Anti-skid tiles on the balcony",
    image: "/assets/Anti-skid tiles on the balcony.webp",
  },
  {
    label: "Provision for island kitchen",
    image: "/assets/Provision for island kitchen.webp",
  },
  { label: "No common walls", image: "/assets/No common walls.webp" },
  
];

export const FeatureSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [currentAmenityIndex, setCurrentAmenityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAmenityIndex((prev) => (prev + 1) % amenitiesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % featuresData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="highlights"
      className="relative w-full pt-[15vh] lg:pt-[0vh] xl:pt-[12vh] gap-need-to-be-removed-from-this-section"
    >
      {/* ── BLOCK 1 ─ Just 40 Residences ───────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row xl:flex-row items-center lg:items-center xl:items-center px-[6vw] lg:px-[4vw] xl:px-[4vw] py-[2vh] lg:py-[2vh] xl:py-[2vh] gap-10 lg:gap-[4vw] xl:gap-[4vw] pointer-events-none">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50vw] xl:w-[50vw] flex justify-center items-center order-2 lg:order-1 xl:order-1 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full lg:w-[45vw] xl:w-[45vw]">
            <Image
              src="/assets/features-so-thoughtful-you-feel-spcial.webp"
              alt="Family enjoying life at Watersong"
              fill
              className="object-contain drop-shadow-2xl scale-[1.3] lg:scale-auto xl:scale-auto"
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] xl:w-[45%] -ml-[3vw] mb-0 text-right-in-just-forty-recidence-section lg:mt-[12vh] xl:mt-[50vh] text-white text-left lg:text-left xl:text-left order-1 lg:order-2 xl:order-2 flex flex-col justify-center z-10 pointer-events-auto"
        >
          <div className="flex flex-col items-start lg:items-start xl:items-start gap-0 lg:gap-2 xl:gap-2 mb-6 lg:mb-0 xl:mb-0 gap-to-heading-and-subheading-in-just-forty-recidence-section">
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-overwave text-white text-[2rem] lg:text-[2.5rem] xl:text-[3.2vw] uppercase tracking-wider mb-2 lg:mb-0 xl:mb-0 drop-shadow-lg text-left lg:text-left xl:text-left leading-none"
            >
              Just forty Residences.
            </h2>
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-overwave text-white text-[2rem] lg:text-[2.5rem] xl:text-[3.2vw] uppercase leading-tight lg:leading-none xl:leading-none tracking-wider mb-2 lg:mb-4 xl:mb-4 drop-shadow-lg text-left lg:text-left xl:text-left "
            >
              Just two homes <br className="block lg:hidden xl:hidden" /> per
              floor.
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/90 text-left chikkad-madi-gandu lg:text-left xl:text-left font-medium leading-[140%] lg:leading-relaxed xl:leading-relaxed text-[1rem] lg:text-[1rem] xl:text-[1rem] lg:max-w-[90%] xl:max-w-[90%] mx-auto lg:mx-0 xl:mx-0 drop-shadow-md"
          >
            Homes at Watersong are so private, it feels like a villa.{" "}
            <br className="hidden lg:hidden xl:block" /> No doors face each
            other. No shared walls. <br className="hidden lg:hidden xl:block" />{" "}
            Only expansive balconies, open air & a serene lake view.
          </motion.p>
        </motion.div>

        {/* Top Right Floating Lotus */}
        <div className="absolute -top-[28%] top-right-floating-lotus right-0 lg:top-[-10%] xl:top-[5%] lg:right-[5%] xl:right-[5%] pointer-events-none z-20 w-[150px] lg:w-[220px] xl:w-[220px]">
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
      <div className="relative z-10 w-full flex flex-col lg:flex-row xl:flex-row items-center lg:items-center xl:items-center px-[6vw] lg:px-[4vw] xl:px-[4vw] py-[0vh] lg:py-[8vh] xl:py-[8vh] gap-0 lg:gap-[4vw] xl:gap-[4vw] pointer-events-none">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] xl:w-[45%]  text-white text-center lg:text-left xl:text-left order-1 flex flex-col justify-center lg:pl-[6vw] xl:pl-[6vw] z-10 pointer-events-auto"
        >
          {/* FLOATING LOTUS */}
          <div className="mb-0 lg:mb-1 xl:mb-8 flex justify-start mb-[0.8rem] lg:justify-start xl:justify-start lg:ml-[2vw] xl:ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/middle image.webp"
                alt="Lotus"
                width={300}
                height={300}
                className="h-auto object-contain floating-lotus-in-lake-lounge-section opacity-90 s transform -translate-x-[20%] lg:translate-x-0 xl:translate-x-0 translate-y-0 lg:-translate-y-10 xl:-translate-y-10 rotate-180 lg:rotate-180 xl:rotate-180  w-[220px] lg:w-[230px] xl:w-[230px]"
              />
            </motion.div>
          </div>

          <div className="block-2-lake-longe-section">
            <motion.p className="text-white/90 text-left chikkad-madi-gandu lg:text-left xl:text-left max-w-[90%] lg:max-w-[100%] xl:max-w-[100%]   lg:mx-0 xl:mx-0 font-medium uppercase tracking-[0.1em] lg:tracking-[0.15em] xl:tracking-[0.15em] mb-2 font-light text-[1rem] lg:text-[14px] xl:text-[14px]">
              A lake like this deserves
            </motion.p>

            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-overwave text-white text-[2rem] lg:text-[2.5rem] xl:text-[3.2vw] uppercase tracking-wider mb-3 lg:mb-0 xl:mb-0 drop-shadow-lg text-left  lg:mx-0 xl:mx-0 lg:text-left xl:text-left leading-none"
            >
              A Lake Lounge
            </h2>

            <motion.p className="text-white/90  text-left lg:text-left xl:text-left max-w-[90%] lg:max-w-[100%] xl:max-w-[100%]   lg:mx-0 xl:mx-0 font-medium uppercase tracking-[0.1em] lg:tracking-[0.15em] xl:tracking-[0.15em] lg:mt-2 xl:mt-2 mb-8 font-light text-[1rem] lg:text-[14px] xl:text-[14px]   chikkad-madi-gandu">
              UP TO 200 SQ. FT. LAKE LOUNGE.
            </motion.p>

            {/* PARAGRAPH */}
            <motion.p className="text-white/80 font-medium forget-boring-balconies-in-lake-lounge-section chikkad-madi-gandu text-left lg:text-left xl:text-left  lg:mx-0 xl:mx-0 leading-relaxed text-[1rem] lg:text-[1rem] xl:text-[1rem] lg:max-w-[100%] xl:max-w-[90%] lg:max-w-[100%] xl:max-w-[95%] mx-auto lg:mx-0 xl:mx-0 drop-shadow-md">
              Forget boring balconies. Step out into a rare 200 sq. ft. lake
              lounge: your private front row to rippling water, open skies, and
              evening breeze. It is a place to linger, breathe, and truly
              unwind.
            </motion.p>
          </div>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[50vw] xl:w-[50vw] flex justify-center items-center order-2 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full lg:w-[45vw] xl:w-[45vw]">
            <Image
              src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
              alt="Lake lounge"
              fill
              className="object-contain drop-shadow-2xl scale-[1.3] lg:scale-[1.4] xl:scale-auto"
            />
          </div>
        </motion.div>
      </div>
      {/* ── BLOCK 3 ─ Healthy & Active Lifestyle ────────────────────────── */}
      <div
        id="amenities"
        className="relative z-10 w-full flex flex-col lg:flex-row xl:flex-row items-center lg:items-center xl:items-center px-[6vw] lg:px-[4vw] xl:px-[4vw] py-[0vh] pb-20 lg:pb-[2vh] xl:pb-[2vh] lg:py-[10vh] xl:py-[12vh] gap-10 lg:gap-[4vw] xl:gap-[4vw] pointer-events-none"
      >
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50vw] xl:w-[50vw] flex justify-center items-center order-2 lg:order-1 xl:order-1 relative z-10 pointer-events-auto"
        >
          <div className="relative aspect-square w-full scale-[0.77] lg:w-[44vw] xl:w-[44vw] ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAmenityIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={amenitiesData[currentAmenityIndex].image}
                  alt={amenitiesData[currentAmenityIndex].label}
                  fill
                  className={`${amenitiesData[currentAmenityIndex].fit} drop-shadow-2xl xl:scale-auto ${amenitiesData[currentAmenityIndex].scale}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] xl:w-[45%] text-white container-ko-left-mai-karo-vi text-left lg:text-left xl:text-left order-1 lg:order-2 xl:order-2 flex flex-col justify-start z-10 lg:pl-[4vw] xl:pl-[4vw] pointer-events-auto"
        >
          {/* LILY (TOP DECORATION) */}
          <div className="flex justify-start lily-top-decoration-main-container lg:justify-start xl:justify-start -ml-0 mb-6 lg:mb-[10vh] xl:mb-[20vh] lg:-ml-[2vw] xl:-ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/with-flower-lily-image.webp"
                alt="Lotus"
                width={160}
                height={160}
                className="h-auto object-contain mb-[1.5rem] lg:mb-0 xl:mb-0 top-decoration-lily-gand opacity-90 w-[150px] lg:mt-[-10vh] xl:mt-0 lg:w-[150px] xl:w-[120px]"
              />
            </motion.div>
          </div>

          <div className="healty-and-active-lifestyle-container">
            {/* HEADING */}
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-overwave text-white text-[2rem] lg:-mt-15 xl:-mt-15 mb-8 lg:mb-8 xl:mb-8 lg:text-[2.5rem] xl:text-[3.2vw] uppercase tracking-wider mb-2 lg:mb-0 xl:mb-0 drop-shadow-lg text-left lg:text-left xl:text-left leading-none"
            >
              Healthy and <br className="hidden lg:block xl:block" /> Active
              Lifestyle
            </h2>

            {/* LIST */}
            <ul className="text-white/90 font-medium leading-[1.8] chikkad-madi-gandu text-[1rem] text-left lg:text-left xl:text-left lg:text-[16px] xl:text-[16px] lg:max-w-[90%] xl:max-w-[90%] lg:mx-0 xl:mx-0 list-disc lg:list-disc need-to-add-bullet-here xl:list-none ml-5 lg:ml-5 xl:ml-0 space-y-0">
              {amenitiesData.map((item, index) => (
                <li
                  key={item.label}
                  onClick={() => setCurrentAmenityIndex(index)}
                  className={`transition-all duration-500 cursor-pointer ${
                    index === currentAmenityIndex
                      ? "text-white opacity-100 font-bold scale-105 origin-left"
                      : "opacity-40"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── BLOCK 3 ─ Features So Thoughtful ───────────────────────────── */}
      <div className="relative iska-margin-and-sab-kam-karneka-gandu-container-class z-10 w-full flex flex-col flex-col-reverse lg:flex-row xl:flex-row items-center lg:items-end xl:items-end px-[6vw] lg:px-[8vw] xl:px-[8vw] pb-30 lg:pb-[2vh] xl:pb-[2vh] py-[4vh] lg:py-[2vh] xl:py-[2vh] pt-0 lg:pt-[15vh] xl:pt-[20vh] gap-8 lg:gap-[4vw] xl:gap-[4vw] pointer-events-none">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[90%] xl:w-[90%] flex flex-col items-center lg:items-start xl:items-start order-2 lg:order-1 xl:order-1 relative z-10 lg:pb-[5vh] xl:pb-[5vh] pointer-events-auto"
        >
          {/* Framed Image */}
          <div className="relative w-full  aspect-[4/3] lg:aspect-[16/10] xl:aspect-[16/10] rounded-[16px] lg:rounded-[24px] xl:rounded-[24px] overflow-hidden border-[8px] lg:border-[4px] xl:border-[4px] border-white/20 shadow-2xl mb-4 lg:mb-6 xl:mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatureIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={featuresData[currentFeatureIndex].image}
                  alt={featuresData[currentFeatureIndex].label}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption Image */}
          <h2
            style={{ letterSpacing: "-0.3px" }}
            className="font-overwave text-white text-[2rem] mt-8 lg:mt-0 xl:mt-0 lg:text-[2.5vw] xl:text-[2.8vw] lg:ml-[5vw] xl:ml-[2vw] uppercase tracking-wider mb-2 lg:mb-0 xl:mb-0 drop-shadow-lg text-left lg:text-left xl:text-left leading-none"
          >
            Features so thoughtful, you feel special
          </h2>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[40%] xl:w-[40%] text-white text-left lg:text-left xl:text-left order-1 lg:order-2 xl:order-2 flex flex-col  flex-col-reverse justify-end lg:h-[30vh] xl:h-[70vh] z-10 pl-4 lg:pl-[4vw] xl:pl-[4vw] pb-[0h] lg:pb-[5vh] xl:pb-[12vh] pointer-events-auto ye-class-sabka-gand-marne-keliye-rakha-hai"
        >
          {/* FLOATING FISH */}
          <div className="absolute top-[15vh] lg:top-[-18vh] xl:top-[-18vh] machi-ka-choda-niche-lao -right-[10vw] lg:left-[1vw] xl:left-[1vw] pointer-events-none z-0">
            <motion.div
              animate={{ x: ["-3%", "3%"], y: ["-2%", "2%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="w-[280px] h-0 lg:w-[280px] xl:w-[280px] machi-ko-bada-karo"
            >
              <Image
                src="/assets/fish-image-1.webp"
                alt="Fish group"
                width={260}
                height={180}
                className="w-full h-auto opacity-80 drop-shadow-lg scale-x-[-1]"
              />
            </motion.div>
          </div>

          {/* LIST */}
          <ul className="text-white/85 chikkad-madi-gandu font-medium leading-[1.3] lg:leading-[2] xl:leading-[2] text-[16px] lg:text-[1rem] xl:text-[1rem] mx-0 lg:mx-0 xl:mx-0 text-left list-disc space-y-1 relative z-10 mt-[0vh] lg:mt-auto xl:mt-auto">
            {featuresData.map((item, index) => (
              <li
                key={item.label}
                onClick={() => setCurrentFeatureIndex(index)}
                className={`transition-all duration-500 cursor-pointer ${
                  index === currentFeatureIndex
                    ? "text-white opacity-100 font-bold scale-105 origin-left"
                    : "opacity-40"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
