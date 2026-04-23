"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export const FeatureSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // --- Ripple Refs ---
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const buffer1Ref = useRef<number[]>([]);
  const buffer2Ref = useRef<number[]>([]);
  const outputImageDataRef = useRef<ImageData | null>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ─── Ripple Math Logic ──────────────────────────────────────────────────
  useEffect(() => {
    if (!isMounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const scale = 0.5; // Lower resolution for better CPU performance

    const initCanvas = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.floor(rect.width * scale);
      const height = Math.floor(rect.height * scale);

      canvas.width = width;
      canvas.height = height;
      widthRef.current = width;
      heightRef.current = height;

      const size = width * height;
      buffer1Ref.current = new Array(size).fill(0);
      buffer2Ref.current = new Array(size).fill(0);
      outputImageDataRef.current = ctx.createImageData(width, height);
    };

    initCanvas();

    const renderLoop = () => {
      if (!ctx || !outputImageDataRef.current) return;

      const width = widthRef.current;
      const height = heightRef.current;
      const buffer1 = buffer1Ref.current;
      const buffer2 = buffer2Ref.current;
      const outData = outputImageDataRef.current;
      const outputPixels = outData.data;

      // Swap buffers
      const temp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = temp;

      const damping = 0.94;

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = x + y * width;
          // Water wave algorithm
          buffer2[i] =
            (buffer1[i - 1] +
              buffer1[i + 1] +
              buffer1[i - width] +
              buffer1[i + width]) /
              2 -
            buffer2[i];
          buffer2[i] *= damping;

          let dataOffset = buffer2[i] - buffer1[i];
          const targetPixel = i * 4;

          let r = 0,
            g = 0,
            b = 0,
            a = 0;
          if (dataOffset > 0.5) {
            // Light highlight (crest)
            r = 255;
            g = 255;
            b = 255;
            a = Math.min(255, dataOffset * 25);
          } else if (dataOffset < -0.5) {
            // Dark shadow (trough)
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 8);
          }

          outputPixels[targetPixel] = r;
          outputPixels[targetPixel + 1] = g;
          outputPixels[targetPixel + 2] = b;
          outputPixels[targetPixel + 3] = a;
        }
      }

      ctx.putImageData(outData, 0, 0);
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    const resizeObserver = new ResizeObserver(() => initCanvas());
    resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      resizeObserver.disconnect();
    };
  }, [isMounted]);

  const dropStone = useCallback(
    (x: number, y: number, radius: number, strength: number) => {
      if (!canvasRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scaleX = widthRef.current / rect.width;
      const scaleY = heightRef.current / rect.height;
      const scaledX = Math.floor((x - rect.left) * scaleX);
      const scaledY = Math.floor((y - rect.top) * scaleY);

      const width = widthRef.current;
      const height = heightRef.current;
      const buffer1 = buffer1Ref.current;

      for (let j = scaledY - radius; j < scaledY + radius; j++) {
        for (let i = scaledX - radius; i < scaledX + radius; i++) {
          if (i >= 0 && i < width && j >= 0 && j < height) {
            if ((i - scaledX) ** 2 + (j - scaledY) ** 2 <= radius ** 2) {
              buffer1[i + j * width] = strength;
            }
          }
        }
      }
    },
    [],
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    dropStone(e.clientX, e.clientY, 8, 60);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // Optional: Creates ripples on hover/move
    if (e.buttons === 1) dropStone(e.clientX, e.clientY, 5, 30);
  };

  return (
    <section
      id="highlights"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      className="relative w-full overflow-hidden"
    >
      {/* ── Ripple Canvas Background ── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60"
        />
      )}

      {/* ── BLOCK 1 ─ Just 40 Residences ───────────────────────────────── */}
      <div
        className="
  relative z-10 w-full 
  flex flex-col lg:flex-row 
  items-center lg:items-end 
  px-[6vw] lg:px-[4vw] 
  py-[6vh] lg:py-[5vh] 
  gap-8 lg:gap-0
"
      >
        {/* TEXT FIRST (Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="
      relative w-full lg:w-[45%] 
      text-white 
      text-center lg:text-left
      order-1 lg:order-2
    "
        >
          <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
            <Image
              src="/assets/Just 40 residences..webp"
              alt="Just 40 residences."
              width={500}
              height={100}
              className="
          w-[80vw] max-w-[320px] 
          md:w-[60vw] 
          lg:w-[30dvw] 
          h-auto object-contain
        "
            />
            <Image
              src="/assets/Just two homes per floor..webp"
              alt="Just two homes per floor."
              width={500}
              height={100}
              className="
          w-[80vw] max-w-[320px] 
          md:w-[60vw] 
          lg:w-[30dvw] 
          h-auto object-contain
        "
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="
        text-white/80 font-light 
        leading-[1.7] 
        text-sm md:text-base
        max-w-[90%] mx-auto lg:mx-0
      "
          >
            Homes at Watersong are so private, it feels like a villa. No doors
            face each other. No shared walls. Only expansive balconies, open air
            & a serene lake view.
          </motion.p>
        </motion.div>

        {/* IMAGE SECOND (Mobile Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
      w-full lg:w-[55%] 
      flex justify-center items-center
      order-2 lg:order-1
    "
        >
          <div
            className="relative aspect-square"
            style={{ width: "clamp(260px, 75vw, 820px)" }}
          >
            <Image
              src="/assets/features-so-thoughtful-you-feel-spcial.webp"
              alt="Family enjoying life at Watersong"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TURTLE (LIGHT FLOAT, MOBILE SAFE) */}
        <div
          className="
    absolute 
    top-[8vh] right-[6vw] 
    lg:top-[25vh] lg:right-[10%] 
    pointer-events-none
  "
        >
          <motion.div {...floatAnim}>
            <Image
              src="/assets/turtle.webp"
              alt=""
              aria-hidden="true"
              width={120}
              height={80}
              className="
          h-auto opacity-40 
          rotate-[270deg]
        "
              style={{ width: "clamp(50px, 12vw, 140px)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── BLOCK 2 ─ Lake Lounge ───────────────────────────────────────── */}
      <div
        className="
  relative z-10 w-full min-h-screen 
  flex flex-col lg:flex-row 
  items-center 
  px-[6vw] lg:px-[4vw] 
  py-[6vh] lg:py-[5vh] 
  gap-8 lg:gap-0
  justify-end
"
      >
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
      w-full lg:w-[45%] 
      text-white 
      text-center lg:text-left
      order-1 lg:order-1
      
    "
        >
          {/* FLOATING LOTUS (TOP CENTER IN MOBILE) */}
          <div className="mb-4 flex justify-center lg:justify-start">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/middle image.webp"
                alt="Lotus"
                width={240}
                height={210}
                className="h-auto object-contain opacity-90"
                style={{ width: "clamp(90px, 20vw, 220px)" }}
              />
            </motion.div>
          </div>

          {/* HEADING */}
          <motion.p
            className="
        text-white/70 uppercase tracking-[0.2em] 
        mb-2 font-medium
      "
            style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.85rem)" }}
          >
            A lake like this deserves
          </motion.p>

          <Image
            src="/assets/A Lake Lounge.webp"
            alt="A Lake Lounge"
            width={500}
            height={100}
            className="
        w-[75vw] max-w-[300px] 
        md:w-[50vw] 
        lg:w-[22dvw] 
        h-auto object-contain 
        mx-auto lg:mx-0
        mb-2
      "
          />

          <motion.p
            className="
        text-white/80 uppercase tracking-widest 
        mb-4 font-medium
      "
            style={{ fontSize: "clamp(0.7rem, 0.95vw, 0.95rem)" }}
          >
            Up to 200 sq. ft. Lake Lounge.
          </motion.p>

          {/* PARAGRAPH */}
          <motion.p
            className="
        text-white/70 font-light 
        leading-[1.7] 
        text-sm md:text-base
        max-w-[92%] mx-auto lg:mx-0
      "
          >
            Forget boring balconies. Step out into a rare 200 sq. ft. lake
            lounge: your private front row to rippling water, open skies, and
            evening breeze. It is a place to linger, breathe, and truly unwind.
          </motion.p>
        </motion.div>

        {/* IMAGE SECTION (BOTTOM IN MOBILE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="
      w-full lg:w-[45%] 
      flex justify-center items-center
      order-2 lg:order-2
      mt-4 lg:mt-0
    "
        >
          <div
            className="relative aspect-square"
            style={{ width: "clamp(260px, 75vw, 1300px)" }}
          >
            <Image
              src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
              alt="Lake lounge"
              fill
              className="object-cover drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* ── BLOCK 3 ─ Features So Thoughtful ───────────────────────────── */}
      <div
        className="
  relative z-10 w-full min-h-screen 
  flex flex-col lg:flex-row 
  items-center 
  px-[6vw] lg:px-[4vw] 
  py-[6vh] lg:py-[5vh] 
  gap-8 lg:gap-0
"
      >
        {/* TEXT SECTION (TOP IN MOBILE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="
      relative w-full lg:w-[32%] 
      text-white 
      text-center lg:text-left
      order-1 lg:order-2
    "
        >
          {/* HEADING */}

          {/* LIST */}
          <ul
            className="
        text-white/85 font-light 
        leading-[2] 
        text-sm md:text-base
        max-w-[90%] mx-auto lg:mx-0
      "
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
          </ul>

          {/* FLOATING FISH (SUBTLE FOR MOBILE) */}
          <div
            className="
      absolute 
      left-[5vw] top-[10vh] 
      lg:top-[-15vh] lg:right-[2vw]
      pointer-events-none
    "
          >
            <motion.div
              animate={{ x: ["-3%", "3%"], y: ["-2%", "2%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                src="/assets/fish-image-1.webp"
                alt=""
                width={200}
                height={160}
                className="opacity-40"
                style={{ width: "clamp(60px, 18vw, 200px)" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE SECTION (BOTTOM IN MOBILE) */}
        <div className="w-full lg:w-[100%] mx-auto ">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="
      w-full lg:w-[80%] 
      flex flex-col items-center 
      order-2 lg:order-1
      mt-4 lg:mt-0
    "
          >
            <div
              className="relative w-full mx-auto"
              style={{
                maxWidth: "clamp(320px, 95vw, 2000px)",
                aspectRatio: "1456 / 816",
              }}
            >
              <div
                className="absolute overflow-hidden"
                style={{ left: "21%", right: "16%", top: "19%", bottom: "17%" }}
              >
                <Image
                  src="/assets/just-40-residences.webp"
                  alt="Family"
                  fill
                  className="object-cover"
                />
              </div>

              <Image
                src="/assets/hero-border-image.webp"
                alt=""
                fill
                className="object-fill pointer-events-none select-none z-10"
              />
            </div>
          </motion.div>
          <Image
            src="/assets/Features so thoughtful, you feel special.webp"
            alt="Caption"
            width={600}
            height={100}
            className="
        w-[85vw] max-w-[340px] 
        md:w-[65vw] 
        lg:w-[38dvw] 
        h-auto object-contain 
        
        mx-auto lg:mx-0 lg:ml-[15vw]
        mb-4
        border 
      "
          />
        </div>
      </div>

      {/* ── BLOCK 4 ─ Healthy & Active Lifestyle ────────────────────────── */}
      <div
        className="
  relative z-10 w-full min-h-screen 
  flex flex-col lg:flex-row 
  items-center 
  justify-center 
  px-[6vw] lg:px-[4vw] 
  py-[6vh] lg:py-[10vh] 
  gap-8 lg:gap-0
"
      >
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
      w-full lg:w-[45%] 
      text-white 
      text-center lg:text-left
      order-1 lg:order-1
    "
        >
          {/* LILY (TOP DECORATION) */}
          <div className="flex justify-center lg:justify-start mb-3">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/with-flower-lily-image.webp"
                alt="Lotus"
                width={200}
                height={180}
                className="h-auto object-contain opacity-90"
                style={{ width: "clamp(70px, 18vw, 160px)" }}
              />
            </motion.div>
          </div>

          {/* HEADING */}
          <Image
            src="/assets/Healthy & Active Lifestyle.webp"
            alt="Healthy Lifestyle"
            width={500}
            height={100}
            className="
        w-[75vw] max-w-[300px] 
        md:w-[55vw] 
        lg:w-[27dvw] 
        h-auto object-contain 
        mx-auto lg:mx-0
        mb-4
      "
          />

          {/* LIST */}
          <ul
            className="
        text-white/85 font-light 
        leading-[2.1] 
        text-sm md:text-base
        max-w-[90%] mx-auto lg:mx-0
      "
          >
            {[
              "Jogging / Walking Path",
              "Children’s play area",
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
          </ul>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="
      w-full lg:w-[45%] 
      flex flex-col items-center 
      order-2 lg:order-2
      mt-4 lg:mt-0
      gap-6
    "
        >
          {/* CIRCLE POOL */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(220px, 65vw, 580px)",
              aspectRatio: "1",
              borderRadius: "50%",
              border: "8px solid #2d6b3a",
              boxShadow:
                "0 0 0 3px rgba(45,107,58,0.35), inset 0 -20px 40px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src="/assets/Swimming-pool.webp"
              alt="Pool"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM SITE PLAN (STONE FRAME) */}
          <div
            className="relative w-full block lg:hidden"
            style={{
              maxWidth: "clamp(260px, 80vw, 500px)",
              aspectRatio: "3 / 4",
            }}
          >
            <Image
              src="/assets/masterplan watersong copy.webp" // ⬅️ replace with your actual image
              alt="Site Plan"
              fill
              className="object-contain rotate-90 lg:rotate-0 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
