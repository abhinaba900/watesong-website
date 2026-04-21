"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingWaterImages from "./FloatingWaterImages";

// Shared floating animation settings
const floatAnim = {
  animate: { rotate: [-3, 3] as [number, number], y: ["-4%", "4%"] as [string, string] },
  transition: {
    rotate: { duration: 6, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" },
    y: { duration: 4.5, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" },
  },
} as const;

export const FeatureSection: React.FC = () => {
  return (
    <>
      {/*
       * ───────────────────────────────────────────────────────────────────────
       * FEATURES SECTION  — two full-viewport blocks:
       *   Block 1 →  big circle image LEFT  |  heading + copy RIGHT
       *   Block 2 →  heading + copy LEFT    |  big circle image RIGHT
       * ───────────────────────────────────────────────────────────────────────
       */}
      <section
        id="highlights"
        className="relative w-full"
      >
        {/* Teal background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
         
        </div>

        {/* Roaming turtle (FloatingWaterImages handles its own positioning) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* <FloatingWaterImages /> */}
        </div>

        {/* ── BLOCK 1 ─ Just 40 Residences ───────────────────────────────── */}
        <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[14vh] gap-10 lg:gap-0">

          {/* LEFT: Large circular image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex justify-center items-center"
          >
            <div
              className="relative aspect-square"
              style={{ width: "clamp(260px, 44vw, 620px)" }}
            >
              <Image
                src="/assets/features-so-thoughtful-you-feel-spcial.webp"
                alt="Family enjoying life at Watersong"
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 44vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: Turtle decoration + heading + copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative w-full lg:w-[45%] text-white lg:pr-[4vw]"
          >
            {/* Floating turtle — top-right corner */}
            <div className="absolute -top-[6vh] right-0 pointer-events-none">
              <motion.div {...floatAnim}>
                <Image
                  src="/assets/turtle.webp"
                  alt=""
                  aria-hidden="true"
                  width={160}
                  height={110}
                  className="h-auto"
                  style={{ width: "clamp(60px, 9vw, 140px)" }}
                />
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-extrabold uppercase leading-[1.08] mb-[3.5vh]"
              style={{
                fontSize: "clamp(1.7rem, 3.4vw, 4rem)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              Just 40 residences.
              <br />
              Just two homes per floor.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-white/78 font-light leading-[1.75]"
              style={{ fontSize: "clamp(0.85rem, 1.15vw, 1.1rem)" }}
            >
              Homes at Watersong are so private, it feels like a villa.
              No doors face each other. No shared walls.
              Only expansive balconies, open air & a serene lake view.
            </motion.p>
          </motion.div>
        </div>

        {/* ── BLOCK 2 ─ Lake Lounge ───────────────────────────────────────── */}
        <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[10vh] pb-[14vh] gap-10 lg:gap-0">

          {/* LEFT: Lotus decoration + heading + copy  (renders after the circle on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-[45%] text-white lg:pl-[4vw] order-2 lg:order-1"
          >
            {/* Lotus decoration */}
            <div className="mb-[5vh]">
              <motion.div {...floatAnim}>
                <Image
                  src="/assets/with-flower-lily-image.webp"
                  alt="Lotus"
                  width={240}
                  height={210}
                  className="h-auto object-contain drop-shadow-xl"
                  style={{ width: "clamp(90px, 16vw, 220px)" }}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/65 uppercase tracking-[0.2em] mb-[1.5vh] font-medium"
              style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.85rem)" }}
            >
              A lake like this deserves
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-extrabold uppercase leading-[1.05] mb-[2vh]"
              style={{
                fontSize: "clamp(1.7rem, 3.4vw, 4rem)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              A Lake Lounge
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/75 uppercase tracking-widest mb-[4vh] font-medium"
              style={{ fontSize: "clamp(0.65rem, 0.88vw, 0.95rem)" }}
            >
              Up to 200 sq. ft. Lake Lounge.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/68 font-light leading-[1.8]"
              style={{ fontSize: "clamp(0.78rem, 1.05vw, 1rem)" }}
            >
              Forget boring balconies. Step out into a rare 200 sq. ft. lake
              lounge: your private front row to rippling water, open skies,
              and evening breeze. It is a place to linger, breathe, and truly
              unwind.
            </motion.p>
          </motion.div>

          {/* RIGHT: Large circular image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:w-[55%] flex justify-center items-center order-1 lg:order-2"
          >
            <div
              className="relative aspect-square"
              style={{ width: "clamp(260px, 44vw, 620px)" }}
            >
              <Image
                src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
                alt="Couple enjoying the lake lounge at Watersong"
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 44vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* ── BLOCK 3 ─ Features So Thoughtful ───────────────────────────── */}
        <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[10vh] gap-10 lg:gap-0">

          {/* LEFT: Stone-framed lifestyle image + caption */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start"
          >
            {/* Stone frame container — same ratios as HeroSection */}
            <div
              className="relative w-full"
              style={{
                maxWidth: "clamp(280px, 50vw, 680px)",
                aspectRatio: "1456 / 816",
              }}
            >
              {/* Lifestyle photo fills the stone frame window */}
              <div
                className="absolute overflow-hidden"
                style={{ left: "25%", right: "20%", top: "23%", bottom: "21%" }}
              >
                <Image
                  src="/assets/just-40-residences.webp"
                  alt="Family life at Watersong"
                  fill
                  sizes="(max-width: 768px) 85vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Stone border image — same asset as hero */}
              <Image
                src="/assets/hero-border-image.webp"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 768px) 85vw, 50vw"
                className="object-fill pointer-events-none select-none"
                style={{ zIndex: 10 }}
              />
            </div>

            {/* Caption below the stone frame */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white mt-[3vh] tracking-widest uppercase text-center lg:text-left"
              style={{
                fontStyle: "italic",
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(0.75rem, 1.1vw, 1.2rem)",
                letterSpacing: "0.12em",
              }}
            >
              Features so thoughtful, you feel special
            </motion.p>
          </motion.div>

          {/* RIGHT: Fish decorations + Feature bullet list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative w-full lg:w-[45%] text-white lg:pl-[3vw]"
          >
            {/* Fish decorations */}
            <div className="absolute -top-[12vh] right-[2vw] pointer-events-none flex flex-col items-end gap-[3vh]">
              <motion.div
                animate={{ x: ["-5%", "5%"], y: ["-3%", "3%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                <Image
                  src="/assets/fish-image-1.webp"
                  alt=""
                  aria-hidden="true"
                  width={160}
                  height={90}
                  className="h-auto"
                  style={{ width: "clamp(70px, 10vw, 160px)", opacity: 0.85 }}
                />
              </motion.div>
              <motion.div
                animate={{ x: ["4%", "-4%"], y: ["3%", "-3%"] }}
                transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.8 }}
              >
                <Image
                  src="/assets/fish-image-2.webp"
                  alt=""
                  aria-hidden="true"
                  width={130}
                  height={75}
                  className="h-auto"
                  style={{ width: "clamp(55px, 8vw, 130px)", opacity: 0.75 }}
                />
              </motion.div>
            </div>

            {/* Feature bullet list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/82 font-light leading-[2.6] list-none"
              style={{ fontSize: "clamp(0.82rem, 1.1vw, 1.05rem)" }}
            >
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
            </motion.ul>
          </motion.div>
        </div>

        {/* ── BLOCK 4 ─ Healthy & Active Lifestyle ────────────────────────── */}
        <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[10vh] pb-[14vh] gap-10 lg:gap-0">

          {/* LEFT: Lotus + Heading + Amenity list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-[45%] text-white lg:pl-[4vw] order-2 lg:order-1"
          >
            {/* Lotus decoration */}
            <div className="mb-[4vh]">
              <motion.div {...floatAnim}>
                <Image
                  src="/assets/with-flower-lily-image.webp"
                  alt="Lotus"
                  width={200}
                  height={180}
                  className="h-auto object-contain drop-shadow-xl"
                  style={{ width: "clamp(80px, 14vw, 190px)" }}
                />
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-extrabold uppercase leading-[1.1] mb-[4vh]"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 3.4rem)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              Healthy &amp; Active Lifestyle
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/78 font-light leading-[2.5] list-none"
              style={{ fontSize: "clamp(0.8rem, 1.05vw, 1rem)" }}
            >
              {[
                "Jogging / Walking Path",
                "Children's play area",
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
            </motion.ul>
          </motion.div>

          {/* RIGHT: Circular pool image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:w-[55%] flex justify-center items-center order-1 lg:order-2"
          >
            {/* Circular pool image with lily-like border treatment */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(260px, 42vw, 580px)",
                aspectRatio: "1",
                borderRadius: "50%",
                border: "10px solid #2d6b3a",
                boxShadow:
                  "0 0 0 4px rgba(45,107,58,0.35), inset 0 -30px 60px rgba(0,0,0,0.35), 0 30px 80px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/assets/Swimming-pool.webp"
                alt="Swimming pool at Watersong"
                fill
                sizes="(max-width: 768px) 85vw, 42vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Amenities Banner ──────────────────────────────────────────────── */}
      
    </>
  );
};
