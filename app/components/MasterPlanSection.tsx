"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export const MasterPlanSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-transparent master-plan-with-proper-spacing-update section-space-for-master-plan-with-proper-spacing-update w-full max-md:max-w-full relative py-[0vh] lg:py-[0vh] xl:py-[15vh]">
      {/* ── BLOCK 5 ─ Master Plan ───────────────────────────────────────── */}
      <div className="relative  padding-top-mai-dena-hi-hoga-nahito-gand-marwalo z-10 w-full flex flex-col-reverse lg:flex-row xl:flex-row items-center lg:items-center xl:items-stretch px-[6vw] lg:px-[4vw] xl:px-[4vw] py-[4vh] lg:py-[2vh] xl:py-[2vh] gap-8 lg:gap-[4vw] lg:pb-[8vw] xl:pb-[2vh] xl:gap-[4vw] pointer-events-none">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[35%] xl:w-[35%] text-white text-center lg:text-left xl:text-left order-1 lg:order-1 xl:order-1 flex flex-col justify-center z-10 lg:pl-[4vw] xl:pl-[4vw] pb-[2vh] lg:pb-0 xl:pb-[2vh] pointer-events-auto"
        >
          {/* HEADING */}
          <h2
            style={{ letterSpacing: "-0.3px" }}
            className="font-bold master-plan-with-proper-spacing-update mt-[8vh] lg:mt-0 xl:mt-[0vh] lg:mb-8 xl:mb-8 text-white text-[2rem] lg:text-[1.8rem] xl:text-[2.4vw] uppercase tracking-wider mb-8 lg:mb-0 xl:mb-0 drop-shadow-lg text-left lg:text-left xl:text-left leading-none"
          >
            Master Plan
          </h2>

          {/* LIST */}
          <div className="text-white/90 chikkad-madi-gandu font-medium leading-[1.8] text-[1rem] lg:text-[0.8rem] xl:text-[1rem] max-w-[95%]  lg:ml-0 xl:ml-0 mx-0 lg:mx-0 xl:mx-0 text-left">
            <ol className="list-decimal pl-5 space-y-[2px]">
              <li>Entry &amp; Exit</li>
              <li>Security Kiosk</li>
              <li>Driveway</li>
              <li>Jogging / Walking Trail</li>
              <li>Children's play area</li>
              <li>Multipurpose court</li>
              <li>Seating Area</li>
              <li>Private Terrace</li>
              <li>Visitor's Car Parking</li>
              <li>Bike Parking</li>
              <li>Service Yard</li>
              <li>
                Clubhouse
                <ol className="list-[lower-alpha] pl-6 mt-1 space-y-[2px] text-white/80">
                  <li>Gym</li>
                  <li>Swimming Pool</li>
                  <li>Multi-purpose Hall</li>
                  <li>Indoor Games Room</li>
                  <li>Open Yoga / Aerobics Area</li>
                </ol>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full hidden lg:block xl:block lg:w-[65%] xl:w-[65%] flex justify-center items-center order-2 lg:order-2 xl:order-2 relative z-10 pointer-events-auto"
        >
          {/* Framed Map Image */}
          <div className="relative w-full h-[65dvh] lg:h-[500px] xl:h-full lg:w-full xl:w-full rounded-[16px] lg:rounded-[24px] xl:rounded-[24px] overflow-hidden border-[8px] lg:border-[3px] xl:border-[3px] border-white/20 shadow-2xl rotate-90 lg:rotate-0 xl:rotate-0 master-plan-section-new-frame-class">
            <Image
              src="/assets/Masterplan new.webp"
              alt="Masterplan Map"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full block lg:hidden xl:hidden lg:w-[65%] xl:w-[65%] flex justify-center mt-[15vh] items-center order-2 lg:order-2 xl:order-2 relative z-10 pointer-events-auto"
        >
          {/* Framed Map Image - Refined Premium Frame */}
          <div className="relative w-[125vw] h-[92vw] flex-none lg:flex-1 xl:flex-1 lg:h-full xl:h-full lg:w-full xl:w-full rounded-[24px] lg:rounded-[32px] xl:rounded-[32px] overflow-hidden border-[2px] lg:border-[2px] xl:border-[2px] border-white/40 bg-white/16 shadow-2xl b rotate-90 lg:rotate-0 xl:rotate-0 p-2">
            <div className="relative w-full h-full rounded-[16px] lg:rounded-[24px] xl:rounded-[24px] overflow-hidden rotate-180 lg:rotate-0 xl:rotate-0">
              <Image
                src="/assets/Masterplan new.webp"
                alt="Masterplan Map"
                fill
                className="object-contain lg:object-cover xl:object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
