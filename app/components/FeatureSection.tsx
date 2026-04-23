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
      <div className="relative z-10 w-full min-h-fit xl:min-h-screen flex flex-col col-reverse lg:flex-row items-end px-[4vw] py-0 lg:py-[5vh] gap-10 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex justify-center items-center"
        >
          <div
            className="relative aspect-square"
            style={{ width: "clamp(360px, 64vw, 820px)" }}
          >
            <Image
              src="/assets/features-so-thoughtful-you-feel-spcial.webp"
              alt="Family enjoying life at Watersong"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 70vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="absolute top-[25vh] right-[10%] pointer-events-none">
          <motion.div {...floatAnim}>
            <Image
              src="/assets/turtle.webp"
              alt=""
              aria-hidden="true"
              width={160}
              height={110}
              className="h-auto rotate-[270deg] opacity-50"
              style={{ width: "clamp(60px, 9vw, 140px)" }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[45%] text-white lg:pr-[4vw] xl:mb-[10vh] mb-[0vh]"
        >
          <div className="flex flex-col gap-[2vh] mb-[3.5vh]">
            <Image
              src="/assets/Just 40 residences..webp"
              alt="Just 40 residences."
              width={500}
              height={100}
              className="w-[70dvw] md:w-[45dvw] lg:w-[30dvw] -ml-[1.5vw] h-auto object-contain"
            />
            <Image
              src="/assets/Just two homes per floor..webp"
              alt="Just two homes per floor."
              width={500}
              height={100}
              className="w-[70dvw] md:w-[45dvw] lg:w-[30dvw] -ml-[1.5vw] h-auto object-contain"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/78 font-light leading-[1.75]"
            style={{ fontSize: "clamp(0.85rem, 1.15vw, 1.1rem)" }}
          >
            Homes at Watersong are so private, it feels like a villa. No doors
            face each other. No shared walls. Only expansive balconies, open air
            & a serene lake view.
          </motion.p>
        </motion.div>
      </div>

      {/* ── BLOCK 2 ─ Lake Lounge ───────────────────────────────────────── */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[5vh] pb-[5vh] gap-10 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[45%] text-white lg:pl-[4vw] order-2 lg:order-1 ml-auto"
        >
          <div className="mb-[5vh]">
            <motion.div {...floatAnim}>
              <Image
                src="/assets/middle image.webp"
                alt="Lotus"
                width={240}
                height={210}
                className="h-auto object-contain drop-shadow-xl"
                style={{ width: "clamp(150px, 25vw, 320px)" }}
              />
            </motion.div>
          </div>
          <motion.p
            className="text-white/65 uppercase tracking-[0.2em] mb-[1.5vh] font-medium"
            style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.85rem)" }}
          >
            A lake like this deserves
          </motion.p>
          <Image
            src="/assets/A Lake Lounge.webp"
            alt="A Lake Lounge"
            width={500}
            height={100}
            className="w-[50dvw] md:w-[35dvw] -ml-[1.5vw] lg:w-[22dvw] h-auto object-contain mb-[2vh]"
          />
          <motion.p
            className="text-white/75 uppercase tracking-widest mb-[4vh] font-medium"
            style={{ fontSize: "clamp(0.65rem, 0.88vw, 0.95rem)" }}
          >
            Up to 200 sq. ft. Lake Lounge.
          </motion.p>
          <motion.p
            className="text-white/68 font-light leading-[1.8]"
            style={{ fontSize: "clamp(0.78rem, 1.05vw, 1rem)" }}
          >
            Forget boring balconies. Step out into a rare 200 sq. ft. lake
            lounge: your private front row to rippling water, open skies, and
            evening breeze.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[45%] ml-auto flex justify-center items-center order-1 lg:order-2"
        >
          <div
            className="relative aspect-square mx-auto"
            style={{ width: "clamp(320px, 70vw, 1300px)" }}
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
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[5vh] gap-10 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[80%] flex flex-col items-center lg:items-start"
        >
          <div
            className="relative w-full mx-auto"
            style={{
              maxWidth: "clamp(420px, 110vw, 2000px)",
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
          <Image
            src="/assets/Features so thoughtful, you feel special.webp"
            alt="Caption"
            width={600}
            height={100}
            className="w-[75dvw] md:w-[55dvw] lg:w-[38dvw] h-auto object-contain mx-auto mt-[3.5vh]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative w-full lg:w-[32%] text-white lg:pl-[3vw] lg:self-end lg:pb-[10vh]"
        >
          <div className="absolute -top-[15vh] right-[2vw] w-full h-[30vh] pointer-events-none">
            <motion.div
              animate={{ x: ["-4%", "4%"], y: ["-3%", "3%"], rotate: [-2, 2] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute -top-[20vh] right-[7vw]"
            >
              <Image
                src="/assets/fish-image-1.webp"
                alt=""
                width={360}
                height={290}
                className="h-auto"
                style={{ width: "clamp(120px, 20vw, 360px)", opacity: 0.9 }}
              />
            </motion.div>
          </div>
          <ul
            className="text-white/82 font-light leading-[2.6] list-none"
            style={{ fontSize: "clamp(0.82rem, 1.1vw, 1.05rem)" }}
          >
            {[
              "Double-height car parking",
              "3 balconies per home",
              "Anti-skid tiles",
              "Seamless common areas",
              "Provision for island kitchen",
              "No common walls",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── BLOCK 4 ─ Healthy & Active Lifestyle ────────────────────────── */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center px-[4vw] py-[10vh] pb-[14vh] gap-10 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[45%] text-white lg:pl-[4vw] ml-auto order-2 lg:order-1"
        >
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
          <Image
            src="/assets/Healthy & Active Lifestyle.webp"
            alt="Healthy Lifestyle"
            width={500}
            height={100}
            className="w-[55dvw] md:w-[40dvw] lg:w-[27dvw] -ml-[0.5vw] h-auto object-contain mb-[4vh]"
          />
          <ul
            className="text-white/78 font-light leading-[2] list-none"
            style={{ fontSize: "clamp(0.8rem, 1.05vw, 1rem)" }}
          >
            {[
              "Jogging Path",
              "Children's play area",
              "Multipurpose court",
              "Private Terrace",
              "Gym",
              "Swimming Pool",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[45%] flex justify-center items-center order-1 lg:order-2"
        >
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
              alt="Pool"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
