"use client";

import React from "react";
import Image from "next/image";
import FloatingWaterImages from "./FloatingWaterImages";

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
  {
    id: "family-living",
    src: "/assets/features-so-thoughtful-you-feel-spcial.webp",
    title: (
      <>
        Features so thoughtful
        <br />
        you feel special
      </>
    ),
  },
  {
    id: "couple-balcony",
    src: "/assets/a-lake-like-this-deserves-a-lake-lounge.webp",
    title: (
      <>
        A lake like this deserves
        <br />a lake lounge
      </>
    ),
    subtitle: "Up to 200 sq ft lake lounge",
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (Fixed h-screen to 100dvh) */}
      <section className="relative bg-[#113239] w-full h-[100dvh] lg:h-[60vh] xl:h-[100dvh] overflow-hidden text-white font-extrabold uppercase tracking-[-0.02em] leading-[1.1]">
        {/* Next.js Image: fill handles the background sizing flawlessly */}
        <Image
          src="/assets/just-40-residences.webp"
          alt="Residential building"
          fill
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

      {/* 2. Full-Screen Floating Features Section (Fixed min-h-screen to 100dvh) */}
      <section className="relative w-full min-h-[100dvh] lg:min-h-[40vh] xl:min-h-[100dvh] overflow-hidden bg-[#52797e]">
        {/* Static Background Image */}
        <Image
          src="/assets/bg-in-feature-section.webp"
          alt="Interior design background"
          fill
          sizes="100vw"
          className="object-cover z-0 mix-blend-overlay opacity-50 pointer-events-none"
        />

        {/* FULL SCREEN FLOATING 3D CANVAS */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FloatingWaterImages items={floatingItems} />
        </div>

        {/* Text Content Layer (Fluid Paddings) */}
        <div className="relative z-10 w-full mx-auto px-[5vw] py-[13vh] pb-[6vh] pointer-events-none">
          <div className="w-full lg:w-6/12 flex flex-col gap-[5vh] text-white pointer-events-auto drop-shadow-xl pt-[5vh] pb-[5vh]">
            {/* Fluid Text */}
            <p className="font-normal text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] leading-[1.4] tracking-[-0.03vw] lg:max-w-[40vw]">
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
        </div>
      </section>

      {/* 3. Amenities Section Banner */}
      <section className="relative bg-white w-full overflow-hidden flex">
        <Image
          src="/assets/Swimming-pool.webp"
          alt="Amenities showcase"
          width={1920}
          height={588} // Maintains the 3.26 aspect ratio
          sizes="100vw"
          className="w-full h-auto aspect-[3.26] object-cover object-center"
        />
      </section>
    </>
  );
};
