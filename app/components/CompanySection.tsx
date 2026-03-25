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
            a = Math.min(255, dataOffset * 15);
          } else if (dataOffset < -0.5) {
            // Wave Trough (Soft Shadow)
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 3); // Soft shadow logic
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
    // Finalized Lite Click Ripple: Radius 8, Strength 20
    dropStone(e.clientX, e.clientY, 8, 20);
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
                       lg:text-[1.8vw] lg:tracking-wide"
        >
          Privae: Seasoned experience. Fresh thinking.
          <br />
          19 years. 16 projects. 3 million sq. ft.
        </h2>

        {/* Paragraph text */}
        <p
          className="text-white font-light text-center pointer-events-auto
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
      <div
        className="flex justify-between items-end w-full pl-[2vw] lg:pl-[4vw] 
                      mt-[2vh] md:mt-[-5vh] lg:mt-[-12vh] pointer-events-none z-10 relative"
      >
        {/* Decorative Lotus Image (Left) */}
        <motion.div
          animate={{ rotate: [-2, 2], y: ["-3%", "3%"] }}
          transition={{
            rotate: {
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          className="relative w-[25vw] md:w-[20vw] lg:w-[14vw] translate-x-[2vw] md:translate-x-[4vw] lg:translate-x-[5vw] translate-y-[-2vh] md:translate-y-[-5vh] lg:translate-y-[-12vh]"
        >
          <Image
            src="/assets/with-flower-lily-image.webp"
            alt="Lotus flower"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
          />
        </motion.div>

        {/* Decorative Boat Image (Right) */}
        <motion.div
          animate={{ rotate: [-1, 1], y: ["-2%", "2%"] }}
          transition={{
            rotate: {
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            y: {
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          className="relative w-[45vw] md:w-[35vw] lg:w-[40vw] translate-y-[-2vh] md:translate-y-[-5vh] lg:translate-y-[-8vh] translate-x-[2vw] md:translate-x-[4vw] lg:translate-x-[5vw]"
        >
          <Image
            src="/assets/privae-section-boat.webp"
            alt="Wooden boat"
            width={800}
            height={1000}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
