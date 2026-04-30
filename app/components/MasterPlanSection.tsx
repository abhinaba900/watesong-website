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
    <section className="bg-transparent w-full max-md:max-w-full relative py-[0vh] lg:py-[15vh]">
      {/* ── BLOCK 5 ─ Master Plan ───────────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col-reverse lg:flex-row items-center lg:items-stretch px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] gap-8 lg:gap-[4vw] pointer-events-none">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[35%] text-white text-center lg:text-left order-1 lg:order-1 flex flex-col justify-center z-10 lg:pl-[4vw] pb-[2vh] pointer-events-auto"
        >
          {/* HEADING */}
          <h2
            style={{ letterSpacing: "-0.3px" }}
            className="font-overwave master-plan-with-proper-spacing-update lg:mb-8 text-white text-[2rem] lg:text-[3.2vw] uppercase tracking-wider mb-2 lg:mb-0 drop-shadow-lg text-center lg:text-left leading-none"
          >
            Master Plan
          </h2>

          {/* LIST */}
          <div className="text-white/90 chikkad-madi-gandu font-medium leading-[1.8] text-[1rem] lg:text-[1rem] max-w-[95%] ml-[1.5rem] lg:ml-0 mx-0 lg:mx-0 text-left">
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
          className="w-full lg:w-[65%] flex justify-center items-center order-2 lg:order-2 relative z-10 pointer-events-auto"
        >
          {/* Framed Map Image */}
          <div className="relative w-full h-[65dvh] lg:h-full lg:w-full rounded-[16px] lg:rounded-[24px] overflow-hidden border-[8px] lg:border-[3px] border-white/20 shadow-2xl rotate-90 lg:rotate-0">
            <Image
              src="/assets/Masterplan new.webp"
              alt="Masterplan Map"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
