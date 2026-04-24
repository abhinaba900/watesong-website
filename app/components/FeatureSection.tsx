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
      className="relative w-full pt-[8vh] lg:pt-[12vh]"
    >
      {/* ── Ripple Canvas Background ── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60"
        />
      )}

      {/* ── BLOCK 1 ─ Just 40 Residences ───────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] gap-8 lg:gap-[4vw]">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex justify-center items-center order-2 lg:order-1 relative z-10"
        >
          <div className="relative aspect-square w-full max-w-[850px] lg:scale-110">
            <Image
              src="/assets/features-so-thoughtful-you-feel-spcial.webp"
              alt="Family enjoying life at Watersong"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] text-white text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center z-10"
        >
          <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-4 mb-6">
            <Image
              src="/assets/Just 40 residences..webp"
              alt="Just 40 residences."
              width={500}
              height={100}
              className="w-[80vw] max-w-[320px] lg:max-w-[450px] lg:w-[32vw] h-auto object-contain drop-shadow-lg"
            />
            <Image
              src="/assets/Just two homes per floor..webp"
              alt="Just two homes per floor."
              width={500}
              height={100}
              className="w-[80vw] max-w-[320px] lg:max-w-[450px] lg:w-[32vw] h-auto object-contain drop-shadow-lg"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/90 font-light leading-relaxed text-[14px] lg:text-[18px] max-w-[90%] mx-auto lg:mx-0 drop-shadow-md"
          >
            Homes at Watersong are so private, it feels like a villa. No doors
            face each other. No shared walls. Only expansive balconies, open air
            & a serene lake view.
          </motion.p>
        </motion.div>

        {/* Top Right Floating Lotus */}
        <div className="absolute top-0 right-0 lg:-top-[5%] lg:right-[5%] pointer-events-none z-20 w-[150px] lg:w-[280px]">
          <Image
            src="/assets/Lotus - webp.webp"
            alt="Lotus"
            width={300}
            height={300}
            className="w-full h-auto mt-6 object-contain drop-shadow-2xl opacity-90"
          />
        </div>
      </div>

      {/* ── BLOCK 2 ─ Lake Lounge ───────────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] gap-8 lg:gap-[4vw]">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] text-white text-center lg:text-left order-1 flex flex-col justify-center lg:pl-[6vw] z-10"
        >
          {/* FLOATING LOTUS */}
          <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start lg:ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/middle image.webp"
                alt="Lotus"
                width={300}
                height={300}
                className="h-auto object-contain opacity-90 w-[180px] lg:w-[260px]"
              />
            </motion.div>
          </div>

          <motion.p className="text-white/90 uppercase tracking-[0.1em] lg:tracking-[0.15em] mb-2 font-light text-[13px] lg:text-[15px]">
            A lake like this deserves
          </motion.p>

          <Image
            src="/assets/A Lake Lounge.webp"
            alt="A Lake Lounge"
            width={400}
            height={80}
            className="w-[70vw] max-w-[280px] lg:max-w-[360px] lg:w-[26vw] h-auto object-contain mx-auto lg:mx-0 mb-4"
          />

          <motion.p className="text-white/80 uppercase tracking-wide lg:tracking-widest mb-6 font-light text-[12px] lg:text-[14px]">
            UP TO 200 SQ. FT. LAKE LOUNGE.
          </motion.p>

          {/* PARAGRAPH */}
          <motion.p className="text-white/80 font-light leading-relaxed text-[14px] lg:text-[15px] max-w-[90%] lg:max-w-[85%] mx-auto lg:mx-0 drop-shadow-md">
            Forget boring balconies. Step out into a rare 200 sq. ft. lake
            lounge: your private front row to rippling water, open skies, and
            evening breeze. It is a place to linger, breathe, and truly unwind.
          </motion.p>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[55%] flex justify-center items-center order-2 relative z-10"
        >
          <div className="relative aspect-square w-full max-w-[850px] lg:scale-110">
            <Image
              src="/assets/a-lake-like-this-deserves-a-lake-lounge.webp"
              alt="Lake lounge"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
      {/* ── BLOCK 3 ─ Healthy & Active Lifestyle ────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] gap-8 lg:gap-[4vw]">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[50%] flex justify-center items-center order-2 lg:order-1 relative z-10"
        >
          <div className="relative aspect-square w-[85vw] lg:w-[80%] max-w-[550px] flex justify-center items-center">
            <Image
              src="/assets/swimming.webp"
              alt="Swimming Pool"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] text-white text-center lg:text-left order-1 lg:order-2 flex flex-col justify-center z-10 lg:pl-[4vw]"
        >
          {/* LILY (TOP DECORATION) */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-8 lg:-ml-[2vw]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/with-flower-lily-image.webp"
                alt="Lotus"
                width={160}
                height={160}
                className="h-auto object-contain opacity-90 w-[100px] lg:w-[140px]"
              />
            </motion.div>
          </div>

          {/* HEADING */}
          <Image
            src="/assets/Healthy & Active Lifestyle.webp"
            alt="Healthy Lifestyle"
            width={500}
            height={100}
            className="w-[80vw] max-w-[320px] lg:max-w-[450px] lg:w-[32vw] h-auto object-contain mx-auto lg:mx-0 mb-6 drop-shadow-lg"
          />

          {/* LIST */}
          <ul className="text-white/90 font-light leading-[1.8] text-[14px] lg:text-[16px] max-w-[90%] mx-auto lg:mx-0 text-left list-none space-y-1">
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

        {/* Floating Turtle Bottom Right */}
        <div className="absolute bottom-[-5%] right-[5%] lg:-bottom-[10%] lg:right-[15%] pointer-events-none z-20 w-[80px] lg:w-[150px]">
          <motion.div {...floatAnim}>
            <Image
              src="/assets/turtle.webp"
              alt="Turtle"
              width={200}
              height={200}
              className="w-full h-auto object-contain drop-shadow-2xl opacity-70 rotate-[340deg]"
            />
          </motion.div>
        </div>
      </div>

      {/* ── BLOCK 3 ─ Features So Thoughtful ───────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-end px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] pt-0 lg:pt-[20vh] gap-8 lg:gap-[4vw]">
        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[60%] flex flex-col items-center lg:items-start order-2 lg:order-1 relative z-10 lg:pb-[5vh]"
        >
          {/* Framed Image */}
          <div className="relative w-full max-w-[900px] aspect-[4/3] lg:aspect-[16/10] rounded-[16px] lg:rounded-[24px] overflow-hidden border-[2px] lg:border-[4px] border-white/20 shadow-2xl mb-4 lg:mb-6">
            <Image
              src="/assets/just-40-residences.webp"
              alt="Family"
              fill
              className="object-cover"
            />
          </div>

          {/* Caption Image */}
          <Image
            src="/assets/Features so thoughtful, you feel special.webp"
            alt="Features so thoughtful, you feel special"
            width={600}
            height={100}
            className="w-[85vw] max-w-[340px] lg:max-w-[500px] lg:w-[40vw] h-auto object-contain mx-auto lg:mx-0 drop-shadow-md lg:ml-[2vw]"
          />
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[40%] text-white text-center lg:text-left order-1 lg:order-2 flex flex-col justify-end lg:h-[70vh] z-10 lg:pl-[4vw] pb-[5vh] lg:pb-[12vh]"
        >
          {/* FLOATING FISH */}
          <div className="absolute top-[5vh] lg:top-[15vh] right-[10vw] lg:left-[5vw] pointer-events-none z-0">
            <motion.div
              animate={{ x: ["-3%", "3%"], y: ["-2%", "2%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="w-[160px] lg:w-[260px]"
            >
              <Image
                src="/assets/fish-image-1.webp"
                alt="Fish group"
                width={260}
                height={180}
                className="w-full h-auto opacity-80 drop-shadow-lg"
              />
            </motion.div>
          </div>

          {/* LIST */}
          <ul className="text-white/85 font-light leading-[2] text-[14px] lg:text-[15px] max-w-[90%] mx-auto lg:mx-0 text-left list-none space-y-1 relative z-10 mt-[25vh] lg:mt-auto">
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
        </motion.div>
      </div>
    </section>
  );
};
