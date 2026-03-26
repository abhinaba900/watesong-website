"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
  }, []);

  // ─── Embedded CPU Water Math (Transparent Mode) ────────────────────────────
  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

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
  }, [mounted]);

  const dropStone = useCallback(
    (x: number, y: number, radius: number, strength: number) => {
      if (!canvasRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scaleX = widthRef.current / rect.width;
      const scaleY = heightRef.current / rect.height;

      // Calculate click position relative to the section
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

  if (!mounted)
    return <section className="w-full h-[100dvh] lg:h-screen bg-[#113239]" />;

  return (
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative w-full overflow-hidden font-sans h-[100dvh] lg:h-[60vh] xl:h-screen bg-[#113239]"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-4 pointer-events-none"
      />

      <Image
        src="/assets/bg-in-feature-section.webp"
        alt="Hero Section"
        fill
        className="object-cover absolute top-0 left-0 z-0 pointer-events-none"
      />

      {/* 2. Black Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

      {/* 4. Content Wrapper */}
      <div className="absolute inset-0 z-10 flex flex-row w-full h-full px-6 py-6 md:px-10 md:py-8 lg:px-[5vw] lg:py-[4vh] mx-auto pointer-events-auto">
        {/* LEFT COLUMN: heading + card */}
        <div className="flex flex-col flex-grow justify-center mt-4 lg:mt-0 mb-4 lg:mb-[4vh] pt-[12vh] lg:pt-[10vh]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white leading-[1.1] tracking-tight mb-6 lg:mb-[6vh] text-[6.5vw] md:text-5xl lg:text-[2.9vw] drop-shadow-lg"
          >
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">NEIGHBOUR</span> <br />
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">ELEVATOR ACCESS</span> <br />
            <span className="font-medium">ONE</span>{" "}
            <span className="font-light">LAKE LOUNGE</span>
          </motion.h1>

          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/75 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full lg:w-[50vw] rounded-2xl lg:rounded-[2.1vw] h-auto lg:h-[20vh] xl:h-[35vh] transition-all hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]"
          >
            <div
              onClick={() => {
                window.open("https://maps.app.goo.gl/uorALjYNRyMLUPga6");
              }}
              className="w-full lg:w-[55%] p-6 md:p-10 lg:p-[3vw] flex flex-col justify-center"
            >
              <Image
                src="/assets/card-inside-image-of-hero-section.webp"
                alt="Brand"
                width={100}
                height={100}
                className="w-16 md:w-28 lg:w-[7vw] mb-3 lg:mb-[2vh] h-auto object-contain"
              />
              <Image
                src="/assets/watersong-logo-blue.webp"
                alt="Watersong"
                width={300}
                height={100}
                className="w-40 md:w-56 lg:w-[14.5vw] object-contain mb-2 h-auto"
              />
              <h2 className="text-[#0C637E] font-bold text-lg md:text-2xl lg:text-[1.25vw]">
                Lakefront Residences
              </h2>
              <p className="text-[#0C637E] font-medium text-xs md:text-base lg:text-[0.73vw] mt-1">
                1 KM from Nallurhalli Metro, Whitefield
              </p>
            </div>
            <div className="w-full lg:w-[45%] relative h-50 md:h-72 lg:h-full">
              <Image
                src="/assets/lackfront-recidance.webp"
                alt="Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.article>
        </div>

        {/* RIGHT COLUMN: Lotus image */}
        <div className="hidden lg:flex flex-col items-end justify-end w-[38%] pb-[4vh] pr-[2vw] relative z-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
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
            >
              <Image
                src="/assets/Lotus - webp.webp"
                alt="Lotus"
                width={420}
                height={420}
                className="object-contain w-[22vw] h-auto drop-shadow-2xl relative z-50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
