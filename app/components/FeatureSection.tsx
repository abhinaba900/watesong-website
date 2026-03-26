"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingWaterImages from "./FloatingWaterImages";

export const FeatureSection: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-[#113239] w-full h-[100dvh] lg:h-[60vh] xl:h-[100dvh] overflow-hidden text-white font-extrabold uppercase tracking-[-0.02em] leading-[1.1]">
        <Image
          src="/assets/just-40-residences.webp"
          alt="Residential building"
          fill
          priority
          sizes="100vw"
          className="object-cover z-0"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-end h-full w-full pb-[8vh] px-[5vw]">
          <h2 className="text-[6.5vw] md:text-[4.5vw] lg:text-[3.8vw] leading-[1.1] mb-[2vh] drop-shadow-lg">
            Just 40 residences.
            <br />
            Just two homes per floor.
          </h2>
        </div>
      </section>

      {/* 2. Full-Screen Features Section */}
      <section
        id="highlights"
        className="relative w-full min-h-[100dvh] overflow-hidden bg-[#4e7c82]"
      >
        {/* Background texture overlay */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Image
            src="/assets/bg-in-feature-section.webp"
            alt="Background texture"
            fill
            quality={75}
            sizes="100vw"
            className="object-cover pointer-events-none"
          />
        </div>

        {/* ─── STATIC DECORATIONS ─── */}

        {/* Large lily pad – top-left corner */}
        <div className="absolute top-[-4vh] left-[-4vw] z-[25] pointer-events-none w-[18vw] md:w-[14vw] lg:w-[10vw]">
          <motion.div
            animate={{ rotate: [-3, 3], y: ["-4%", "4%"] }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/assets/lily.webp"
              alt="Lily pad decoration"
              width={300}
              height={300}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Small lily / lotus – center-left floating */}
        <div className="absolute top-[32%] left-[34%] z-[25] pointer-events-none w-[8vw] md:w-[5vw] lg:w-[8vw]">
          <motion.div
            animate={{ rotate: [-5, 5], y: ["-6%", "6%"] }}
            transition={{
              rotate: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              y: {
                duration: 3.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/assets/middle image.webp"
              alt="Lotus decoration"
              width={300}
              height={300}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* White flower – bottom-right corner */}
        <div className="absolute top-5 right-[0vw] z-[25] pointer-events-none w-[14vw] md:w-[10vw] lg:w-[8vw]">
          <motion.div
            animate={{ rotate: [-4, 4], y: ["-5%", "5%"] }}
            transition={{
              rotate: {
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              y: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/assets/flower.webp"
              alt="Flower decoration"
              width={250}
              height={250}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* ─── TURTLE (random roaming + ripple effect) ─── */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <FloatingWaterImages />
        </div>

        {/* ─── MAIN CONTENT GRID ─── */}
        <div className="relative z-30 w-full min-h-[100dvh] mx-auto px-[5vw] py-[12vh] flex flex-col lg:flex-row pointer-events-none">
          {/* LEFT COLUMN – Text */}
          <div className="w-full lg:w-[45%] flex flex-col gap-[5vh] text-white drop-shadow-xl">
            <p className="font-normal text-[4vw] md:text-[2.5vw] lg:text-[1.35vw] leading-[1.4] tracking-[-0.03vw]">
              Homes at Watersong are so private, it feels like a villa. No doors
              face each other. No shared walls. Only generous private balconies,
              open air, and a calm lake as your neighbour: never cramped
              corridors, never nagging proximity.
            </p>

            <div className="mt-[5vh] font-normal text-[3.5vw] md:text-[2.2vw] lg:text-[1.3vw] leading-[2.2]">
              3 BHK homes from 2700 to 3300 sq ft.
              <br /> Higher UDS share
              <br /> 100% vaastu-compliant
              <br /> Two homes per floor, two elevators per floor
              <br /> Every home has a large lake lounge
              <br /> Double-height car parking
              <br /> 3 balconies per home
              <br /> Anti-skid tiles on the balcony
              <br /> Seamless common areas
              <br /> Provision for island kitchen
            </div>
          </div>

          {/* RIGHT COLUMN – Circular Images */}
          <div className="w-full lg:w-[55%] relative pointer-events-none flex flex-col gap-[6vh] mt-[10vh] lg:mt-0 lg:block">
            {/* TOP-RIGHT: Larger circle image */}
            <div className="lg:absolute top-[-6vh] right-[4vw] flex flex-col items-center w-[60vw] md:w-[42vw] lg:w-[26vw] mx-auto lg:mx-0">
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/features-so-thoughtful-you-feel-spcial.webp"
                  alt="Family living"
                  fill
                  sizes="(max-width: 1024px) 60vw, 28vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-white text-center text-[3.5vw] md:text-[1.8vw] lg:text-[0.95vw] leading-[1.5] tracking-widest mt-[1.5vh] drop-shadow-md font-medium uppercase">
                Features so thoughtful
                <br />
                you feel special
              </h3>
            </div>

            {/* BOTTOM-CENTER: Smaller circle image */}
            <div className="lg:absolute top-[30vh] left-[2vw] flex flex-col items-center w-[48vw] md:w-[34vw] lg:w-[20vw] mx-auto lg:mx-0">
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
                  alt="Couple on balcony"
                  fill
                  sizes="(max-width: 1024px) 48vw, 22vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-white text-center text-[3.5vw] md:text-[1.8vw] lg:text-[0.95vw] leading-[1.5] tracking-widest mt-[1.5vh] drop-shadow-md font-medium uppercase">
                A lake like this deserves
                <br />a lake lounge
              </h3>
              <p className="text-white/90 text-center text-[3vw] md:text-[1.6vw] lg:text-[0.85vw] font-light mt-[0.5vh] drop-shadow-md">
                Up to 200 sq ft lake lounge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Amenities Section Banner */}
      <section
        id="amenities"
        className="relative bg-white w-full overflow-hidden flex"
      >
        <Image
          src="/assets/Swimming-pool.webp"
          alt="Amenities showcase"
          width={1920}
          height={488}
          sizes="100vw"
          className="w-full h-[55vh] aspect-[3.26] object-cover object-center"
        />
      </section>
    </>
  );
};
