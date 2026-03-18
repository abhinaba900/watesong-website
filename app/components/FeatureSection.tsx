"use client";

import React from "react";
import Image from "next/image";
import FloatingWaterImages from "./FloatingWaterImages";

// Cleaned up floating items: Only the background decorations remain floating
const floatingItems = [
  {
    id: "lotus-deco",
    src: "/assets/lily.webp",
  },
  {
    id: "turtle-deco",
    src: "/assets/turtle.webp",
  },
  {
    id: "flower-deco",
    src: "/assets/flower.webp",
  },
];

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
      <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#52797e]">
        {/* Static Background Texture */}
        <Image
          src="/assets/bg-in-feature-section.webp"
          alt="Interior design background"
          fill
          quality={75}
          sizes="100vw"
          className="object-cover z-0 mix-blend-overlay opacity-50 pointer-events-none"
        />

        {/* FULL SCREEN FLOATING 3D CANVAS */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FloatingWaterImages items={floatingItems} />
        </div>

        {/* Content Layer: Split into Left (Text) and Right (Static Images) */}
        <div className="relative z-20 w-full min-h-[100dvh] mx-auto px-[5vw] py-[13vh] flex flex-col lg:flex-row pointer-events-none">
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col gap-[5vh] text-white pointer-events-auto drop-shadow-xl z-20">
            {/* Fluid Text */}
            <p className="font-normal text-[4vw] md:text-[2.5vw] lg:text-[1.35vw] leading-[1.4] tracking-[-0.03vw]">
              Homes at Watersong are so private, it feels like a villa. No doors
              face each other. No shared walls. Only generous private balconies,
              open air, and a calm lake as your neighbour: never cramped
              corridors, never nagging proximity.
            </p>

            {/* Fluid List */}
            <div className="font-normal text-[3.5vw] md:text-[2.2vw] lg:text-[1.3vw] leading-[2.2]">
              3 BHK homes from 2700 to 3300 sq ft.
              <br />
              Higher UDS share
              <br />
              100% vaastu-compliant
              <br />
              Two homes per floor, two elevators per floor
              <br />
              Every home has a large lake lounge
              <br />
              Double-height car parking
              <br />
              3 balconies per home
              <br />
              Anti-skid tiles on the balcony
              <br />
              Seamless common areas
              <br />
              Provision for island kitchen
            </div>
          </div>

          {/* RIGHT COLUMN: Static Circular Images */}
          <div className="w-full lg:w-[55%] relative flex flex-col gap-[8vh] mt-[10vh] lg:mt-0 lg:block pointer-events-auto z-20">
            {/* Top Image: Family Living (Staggered Right on Desktop) */}
            {/* OPTIMIZATION: w-28vw -> w-20vw */}
            <div className="lg:absolute top-[-4vh] right-[8vw] flex flex-col items-center w-[60vw] md:w-[45vw] lg:w-[28vw] mx-auto lg:mx-0">
              {/* Fluid Image Wrapper */}
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/features-so-thoughtful-you-feel-spcial.webp"
                  alt="Family living"
                  fill
                  sizes="(max-width: 1024px) 70vw, 35vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-white text-center text-[4vw] md:text-[2vw] lg:text-[1vw] leading-[1.4] tracking-widest mt-[2vh] drop-shadow-md font-medium uppercase">
                Features so thoughtful
                <br />
                you feel special
              </h3>
            </div>
            

            {/* Bottom Image: Couple Balcony (Staggered Left on Desktop) */}
            {/* OPTIMIZATION: w-28vw -> w-20vw and top-42vh -> top-35vh */}
            <div className="lg:absolute top-[28vh] left-[0vw] flex flex-col items-center w-[50vw] md:w-[35vw] lg:w-[20vw] mx-auto lg:mx-0">
              {/* Fluid Image Wrapper */}
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
                  alt="Couple on balcony"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <h3 className="text-white text-center text-[4vw] md:text-[2vw] lg:text-[1vw] leading-[1.4] tracking-widest mt-[2vh] drop-shadow-md font-medium uppercase">
                A lake like this deserves
                <br />a lake lounge
              </h3>
              <p className="text-white/90 text-center text-[3.5vw] md:text-[1.8vw] lg:text-[0.9vw] font-light mt-[0.5vh] drop-shadow-md">
                Up to 200 sq ft lake lounge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Amenities Section Banner */}
      <section className="relative bg-white w-full overflow-hidden flex">
        <Image
          src="/assets/Swimming-pool.webp"
          alt="Amenities showcase"
          width={1920}
          height={588}
          sizes="100vw"
          className="w-full h-auto aspect-[3.26] object-cover object-center"
        />
      </section>
    </>
  );
};
