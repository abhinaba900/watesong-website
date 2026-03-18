import React from "react";
import FloatingWaterImages from "./FloatingWaterImages";

export const FeatureSection: React.FC = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white w-full h-screen lg:h-[60vh] xl:h-screen overflow-hidden text-white font-extrabold uppercase tracking-[-0.02em] leading-[1.1]">
        <div className="relative flex flex-col justify-end h-full w-full pb-[8vh] px-[5vw]">
          <img
            src="/assets/just-40-residences.webp"
            alt="Residential building"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            aria-hidden="true"
          />
          <h2 className="relative z-10 text-[6.5vw] md:text-[4.5vw] lg:text-[3.8vw] leading-[1.1] mb-[2vh]">
            Just 40 residences.
            <br />
            Just two homes per floor.
          </h2>
        </div>
      </section>

      {/* Full-Screen Floating Features Section */}
      <section className="relative w-full min-h-screen lg:min-h-[40vh] xl:min-h-screen overflow-hidden bg-[#52797e]">
        {/* Static Background Image */}
        <img
          src="/assets/bg-in-feature-section.webp"
          alt="Interior design background"
          className="absolute h-full w-full object-cover inset-0 z-0 mix-blend-overlay opacity-50 pointer-events-none"
        />

        {/* ✅ FULL SCREEN FLOATING 3D CANVAS */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FloatingWaterImages items={floatingItems} />
        </div>

        {/* Text Content Layer (Fluid Paddings) */}
        <div className="relative z-10 w-full mx-auto px-[5vw] py-[13vh] pb-[6vh] pointer-events-none">
          {/* Changed gap-12 to gap-[5vh] for fluid vertical spacing */}
          <div className="w-full lg:w-6/12 flex flex-col gap-[5vh] text-white pointer-events-auto drop-shadow-xl pt-[5vh] pb-[5vh]">
            {/* Fluid Text: Swapped text-2xl and static max-w for vw units */}
            <p className="font-normal text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] leading-[1.4] tracking-[-0.03vw] lg:max-w-[40vw]">
              Homes at Watersong are so private, it feels like a villa. No doors
              face each other. No shared walls. Only generous private balconies,
              open air, and a calm lake as your neighbour: never cramped
              corridors, never nagging proximity.
            </p>

            {/* Fluid List: Swapped text-2xl and line-height for vw units */}
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

      {/* Amenities Section */}
      <section className="bg-white w-full overflow-hidden max-md:max-w-full">
        <img
          src="/assets/Swimming-pool.webp"
          alt="Amenities showcase"
          className="aspect-[3.26] object-cover object-center w-full max-md:max-w-full"
        />
      </section>
    </>
  );
};
