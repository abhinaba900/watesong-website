"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CompanySection: React.FC = () => {
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

  // ─── Embedded CPU Water Math (Transparent Mode) ────────────────────────────
  useEffect(() => {
    if (!isMounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Scale down for CPU performance
    const scale = 0.5;

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

      const temp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = temp;

      const damping = 0.94;

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = x + y * width;

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
            // Wave Crest (Highlight)
            r = 255;
            g = 255;
            b = 255;
            a = Math.min(255, dataOffset * 25);
          } else if (dataOffset < -0.5) {
            // Wave Trough (Soft Shadow)
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 8); // Soft shadow logic
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
    // Finalized Lite Click Ripple: Radius 8, Strength 40
        dropStone(e.clientX, e.clientY, 8, 60);

  };

  return (
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative w-full min-h-screen lg:min-h-[90vh] flex flex-col justify-start pt-[12vh] pb-[15vh] lg:pb-[10vh] "
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      {/* Left-Aligned Text Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[6vw]  lg:px-[8vw] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left max-w-[95dvw] lg:max-w-[50dvw]"
        >
          {/* Main Title */}
          <h2 className="text-white font-bold uppercase tracking-wider text-[5.5vw] md:text-[2.2vw] lg:text-[1.35vw] mb-3 pointer-events-auto leading-tight">
            PRIVAE: SEASONED EXPERIENCE. FRESH THINKING.
          </h2>

          {/* Stats Bar */}
          <div className="text-white font-normal uppercase tracking-widest text-[4vw] md:text-[2vw] lg:text-[1.65vw] mb-[3vh] lg:mb-[4vh] flex flex-wrap items-center gap-x-4 gap-y-2 pointer-events-auto">
            <span className="font-bold whitespace-nowrap">20 YEARS</span>
            <span className="text-[#FF3B30] font-light hidden xs:inline">
              |
            </span>
            <span className="font-bold whitespace-nowrap">
              4 MILLION SQ. FT.
            </span>
          </div>

          {/* Descriptive Text */}
          <p className="text-white/80 font-light text-[4.2vw] leading-[1.7] md:text-[1.8vw] lg:text-[0.95vw] lg:leading-[1.8] pointer-events-auto z-20">
            Privae draws from a legacy of building world-class living spaces. A
            deep understanding of market needs and individual aspirations,
            combined with strong technical expertise, guides every decision. The
            brand is shaped by industry professionals with over 60 years of
            combined experience, often surpassing established benchmarks.
          </p>
        </motion.div>
      </div>

      {/* Visual Elements Container */}
      <div className="absolute inset-0 pointer-events-none ">
        {/* Floating Boat - Bottom Leftish */}
        <motion.div
          animate={{ rotate: [-0.5, 1], y: ["-1%", "1%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute left-[-2vw] lg:left-[5vw] bottom-[-2vh] lg:bottom-[5vh] w-[50vw] md:w-[30vw] lg:w-[18vw] z-5 opacity-80 lg:opacity-100"
        >
          <Image
            src="/assets/fishing boat.webp"
            alt="Fishing boat"
            width={600}
            height={800}
            className="object-contain w-full scale-x-[-1] rotate-[-30deg] translate-x-[30%] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Wooden Pier - Middle Right */}
        <motion.div className="absolute right-0 bottom-[-5vh] lg:top-[30%] w-[55vw] md:w-[35vw] lg:w-[24dvw] z-5 translate-x-[20%] lg:translate-x-[15%] opacity-70 lg:opacity-100">
          <Image
            src="/assets/hf_20260304_121041_3fde8b1c-31ed-4253-9046-06cd9fa2486e.webp"
            alt="Wooden pier"
            width={800}
            height={200}
            className="object-contain transform  rotate-[90deg] skew-y-2 w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Animated Fish Group - Center Bottom */}
        <div className="absolute bottom-[10vh] left-[30%] flex gap-[8vw] lg:gap-[6vw] opacity-20 lg:opacity-30">
          <motion.div
            animate={{ x: [15, -15], y: [10, -10], rotate: [10, -10] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 1,
            }}
            className="w-[15vw] lg:w-[12vw] mt-12"
          >
            <Image
              src="/assets/fish-image-2.webp"
              alt=""
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
