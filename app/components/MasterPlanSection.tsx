import React from "react";

export const MasterPlanSection: React.FC = () => {
  return (
    <section className="bg-transparent w-full overflow-hidden max-md:max-w-full">
      <div className="flex flex-col relative w-full items-center pl-0 lg:px-[5vw]  pt-[22px]  ">
        <div className="relative w-full px-[5vw] md:px-0 mr-0 md:mr-[2.5vw] lg:mr-[2.9vw]">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-[8vw] md:gap-[2vw] lg:gap-[1.4vw]">
            {/* Left Side: Heading */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end">
              <h2
                className="text-white font-extrabold uppercase relative self-stretch
                   text-center md:text-right 
                   mt-[0vh] md:mt-0 
                   text-[6.5vw] leading-[1.6] 
                   md:text-[3.5vw] 
                   lg:text-[3vw]  lg:leading-[1.6] lg:tracking-[1px] 
                   xl:text-[2.8vw] xl:leading-[1.6]"
              >
                FUN ACTIVITIES TO <br /> KEEP AWAY CHOLESTEROL <br /> AND SUGAR
              </h2>
            </div>

            {/* Right Side: List & Image */}
            <div className="w-full md:w-1/2 mt-[0vh] md:mt-0 lg:ml-[1.4vw] flex flex-col justify-center">
              <div className="relative grow">
                {/* Changed items-stretch to items-center on mobile */}
                <div className="flex flex-col md:flex-row items-center gap-[6vw] md:gap-0 lg:gap-[1.4vw]">
                  {/* List Items */}
                  <div className="w-full md:w-[45%] lg:w-[44%] z-10 flex flex-col items-center md:items-start">
                    <div
                      className="text-white font-normal relative self-stretch
                         text-center md:text-left 
                         mt-[2vh] md:mt-0 
                         mr-0 md:mr-[-12vw] lg:mr-[-17.5vw] 
                         text-[4vw] md:text-[2.5vw] lg:text-[1.4vw] leading-[1.4]"
                    >
                      Versatile multipurpose court
                      <br />
                      Refreshing swimming pool
                      <br />
                      Well-equipped gymnasium
                      <br />
                      Safe, thoughtfully designed kids' play area
                      <br />
                      Spacious party hall for gatherings
                      <br />
                      Serene walking track
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full sm:w-[80%] md:w-[55%] lg:w-[56%] relative z-0 mx-auto md:ml-auto lg:ml-[1.4vw] flex justify-center">
                    <img
                      src="/assets/fish-image-1.webp"
                      alt="Amenities"
                      className="aspect-[1.24] object-contain w-full  grow drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-[5vh] lg:mt-[10vh] px-[5vw] lg:px-[0vw] overflow-hidden flex flex-col justify-center">
          {/* Heading */}
          <h2
            className="relative text-white font-extrabold uppercase text-left
               mb-[3vh] lg:mb-[4vh]
               text-[8vw] leading-[1.2] 
               md:text-[4.5vw] 
               lg:text-[3.5vw] lg:leading-[1.6] lg:tracking-[1px] 
               xl:text-[2.8vw] xl:leading-[1.6]"
          >
            MASTER PLAN
          </h2>

          {/* Main Content Wrapper */}
          <div className="relative w-full max-w-full">
            <div className="flex flex-col md:flex-row items-center  justify-between gap-[6vw] md:gap-[2vw]">
              {/* Left Column: Text List */}
              <div className="w-full md:w-[45%] lg:w-[35%]  z-10">
                <ul
                  className="text-white font-normal relative self-stretch 
                       text-left 
                       mt-[2vh] md:mt-0 
                       text-[4.5vw] md:text-[2vw] lg:text-[1.31vw] leading-[1.4] 
                       space-y-[1vh] lg:space-y-[1.2vh]"
                >
                  <li>1. Entry & Exit</li>
                  <li>2. Security Kiosk</li>
                  <li>3. Driveway</li>
                  <li>4. Jogging / Walking Trail</li>
                  <li>5. Children's play area</li>
                  <li>6. Multipurpose court</li>
                  <li>7. Seating Area</li>
                  <li>8. Private terrace area</li>
                  <li>9. Visitor's Car parking</li>
                  <li>10. Designated bike parking</li>
                  <li>11. Service Yard</li>
                  <li>
                    12. Clubhouse
                    {/* Sub-list indented */}
                    <ul className="pl-[5vw] md:pl-[3vw] lg:pl-[2vw] mt-[0.5vh] lg:mt-[0.8vh] space-y-[0.5vh] lg:space-y-[0.8vh]">
                      <li>a) Gym</li>
                      <li>b) Swimming pool with open shower & toilet</li>
                      <li>c) Multi-purpose hall with toilets</li>
                      <li>d) Indoor Games Room</li>
                      <li>e) Open yoga / Aerobics Area</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Middle Column: Fish Image */}
              {/* Hidden on mobile, perfectly centered vertically on Tab/Desktop */}
              <div className="hidden md:block absolute top-[50%] -translate-y-1/2 left-[40%] lg:left-[25%] z-20 pointer-events-none">
                <img
                  src="/assets/fish-image-2.webp"
                  alt="Decorative fish"
                  className="object-contain w-[15vw] lg:w-[12vw] drop-shadow-2xl opacity-90"
                />
              </div>
              {/* Right Column: Master Plan Image */}
              <div className="w-full md:w-[50%] lg:w-[60%] relative z-0 flex justify-end">
                <img
                  src="/assets/maserplan-for-master-plan.webp"
                  alt="Master plan layout"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
