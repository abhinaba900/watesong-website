import React from "react";

export const CompanySection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-[10vh] pb-[5vh] lg:pb-0">
      {/* Center Content Wrapper */}
      {/* Added px-[5vw] here so the text doesn't touch the edges on mobile */}
      <div className="relative z-10 flex flex-col items-center w-full md:w-[80%] lg:w-[60%] mx-auto px-[5vw] lg:px-0">
        {/* Heading */}
        <h2
          className="text-white font-medium text-center uppercase
                       text-[5.5vw] leading-[1.4]
                       md:text-[3vw] 
                       lg:text-[1.8vw] lg:tracking-wide"
        >
          Privae: Seasoned experience. Fresh thinking.
          <br />
          19 years. 16 projects. 3 million sq. ft.
        </h2>

        {/* Paragraph text */}
        <p
          className="text-white font-light text-center 
                       mt-[3vh] lg:mt-[5vh]
                       text-[4vw] leading-[1.6]
                       md:text-[2vw] md:leading-[1.5]
                       lg:text-[1.25vw] lg:leading-[1.5] lg:tracking-[-0.02vw]"
        >
          Privae draws from a legacy of building world-class living spaces. A
          deep understanding of market needs and individual aspirations,
          combined with strong technical expertise, guides every decision. The
          brand is shaped by industry professionals with over 60 years of
          combined experience, often surpassing established benchmarks.
        </p>
      </div>

      {/* Images Wrapper */}
      {/* Responsive mt: Pushed below text on mobile, pulled UP on tablet/desktop to overlap */}
      <div
        className="flex justify-between items-end w-full pl-[2vw] lg:pl-[4vw] 
                      mt-[2vh] md:mt-[-5vh] lg:mt-[-12vh] pointer-events-none"
      >
        {/* Decorative Lotus Image (Left) */}
        <img
          src="/assets/with-flower-lily-image.webp"
          alt="Lotus flower"
          className="object-contain w-[25vw] md:w-[20vw] lg:w-[14vw] translate-x-[2vw] md:translate-x-[4vw] lg:translate-x-[5vw] translate-y-[-2vh] md:translate-y-[-5vh] lg:translate-y-[-12vh]"
        />

        {/* Decorative Boat Image (Right) */}
        <img
          src="/assets/privae-section-boat.webp"
          alt="Wooden boat"
          // Responsive translation: Moves up and right smoothly across all devices
          className="object-contain w-[45vw] md:w-[35vw] lg:w-[40vw] 
                     translate-y-[-2vh] md:translate-y-[-5vh] lg:translate-y-[-8vh] 
                     translate-x-[2vw] md:translate-x-[4vw] lg:translate-x-[5vw]"
        />
      </div>
    </section>
  );
};
