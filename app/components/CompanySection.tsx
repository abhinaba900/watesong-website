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
      // Added overflow-hidden to keep the canvas bounds clean
      className="relative w-full flex flex-col items-center justify-center pt-[10vh] pb-[5vh] lg:pb-0 overflow-hidden"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      {/* Center Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full md:w-[80%] lg:w-[60%] mx-auto px-[5vw] lg:px-0 pointer-events-none">
        {/* Heading */}
        <h2
          className="text-white font-medium text-center uppercase pointer-events-auto
                       text-[5.5vw] leading-[1.4]
                       md:text-[3vw] 
                       lg:text-[1.1vw] lg:tracking-[0.1em]"
        >
          PRIVAE: SEASONED EXPERIENCE. FRESH THINKING.
          <br />
          <span className="font-light opacity-80 mt-1 block">
             20 YEARS &nbsp;|&nbsp; 18 PROJECTS &nbsp;|&nbsp; 4 MILLION SQ. FT.
          </span>
        </h2>

        {/* Paragraph text */}
        <p
          className="text-white font-light text-center pointer-events-auto
                       mt-[3vh] lg:mt-[5vh]
                       text-[4vw] leading-[1.6]
                       md:text-[2vw] md:leading-[1.5]
                       lg:text-[1.1vw] lg:leading-[1.6] lg:tracking-[-0.01vw] opacity-90"
        >
          Privae draws from a legacy of building world-class living spaces. A
          deep understanding of market needs and individual aspirations,
          combined with strong technical expertise, guides every decision. The
          brand is shaped by industry professionals with over 60 years of
          combined experience, often surpassing established benchmarks.
        </p>
      </div>

      {/* Images Wrapper */}
      <div
        className="relative w-full h-[60vh] mt-[-10vh] pointer-events-none z-10"
      >
        {/* Decorative Boat Image (Left) */}
        <motion.div
          animate={{ rotate: [-1, 1.5], y: ["-2%", "2%"], x: ["-1%", "1%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute left-[5vw] top-[5vh] w-[25vw] md:w-[20vw] lg:w-[15vw]"
        >
          <Image
            src="/assets/fishing boat.webp"
            alt="Fishing boat"
            width={600}
            height={800}
            className="object-contain w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Decorative Wooden Deck (Right) */}
        <motion.div
           initial={{ x: "10%", y: "20%" }}
           className="absolute right-0 top-0 w-[45vw] md:w-[35vw] lg:w-[30vw]"
        >
          <Image
            src="/assets/hf_20260304_121041_3fde8b1c-31ed-4253-9046-06cd9fa2486e.webp"
            alt="Wooden deck"
            width={800}
            height={1200}
            className="object-contain w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Animated Fish 1 */}
        <motion.div
          animate={{ 
            x: ["-20vw", "120vw"],
            y: ["10vh", "30vh", "15vh"],
            rotate: [20, -10, 10]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 w-[10vw] lg:w-[6vw] opacity-40 blur-[1px]"
        >
          <Image
            src="/assets/fish-image-1.webp"
            alt="Swimming fish"
            width={200}
            height={200}
            className="object-contain w-full h-auto"
          />
        </motion.div>

        {/* Animated Fish 2 */}
        <motion.div
          animate={{ 
            x: ["110vw", "-20vw"],
            y: ["50vh", "35vh", "45vh"],
            rotate: [170, 190, 180]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-0 w-[12vw] lg:w-[7vw] opacity-30 blur-[2px]"
        >
          <Image
            src="/assets/fish-image-2.webp"
            alt="Swimming fish"
            width={200}
            height={200}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
