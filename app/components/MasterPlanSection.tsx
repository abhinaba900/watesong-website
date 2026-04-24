"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export const MasterPlanSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
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
            // 🛑 THE FIX: Decreased Shadow Intensity
            // Wave Trough (Shadow)
            r = 10;
            g = 25;
            b = 40;
            // Reduced multiplier from 10 to 3 for a much softer shadow
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

    // Re-initialize if the section changes size (e.g., mobile rotation)
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
    // Drop a thick ripple (Radius: 8, Strength: 40)
    dropStone(e.clientX, e.clientY, 8, 60);
  };

  return (
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="bg-transparent w-full max-md:max-w-full relative py-[10vh] lg:py-[15vh]"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      {/* ── BLOCK 5 ─ Master Plan ───────────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-center px-[6vw] lg:px-[4vw] py-[4vh] lg:py-[2vh] gap-8 lg:gap-[4vw]">
        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full lg:w-[35%] text-white text-center lg:text-left order-1 lg:order-1 flex flex-col justify-center z-10 lg:pl-[4vw] pb-[2vh]"
        >
          {/* HEADING */}
          <h2 className="font-overwave text-white text-[7vw] lg:text-[2.2vw] mb-[4vh] tracking-widest drop-shadow-lg uppercase text-center lg:text-left pointer-events-auto leading-none">
            Master Plan
          </h2>

          {/* LIST */}
          <div className="text-white/90 font-light leading-[1.8] text-[13px] lg:text-[14px] max-w-[95%] mx-auto lg:mx-0 text-left pointer-events-auto">
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
          <div className="relative w-full max-w-[1100px] aspect-[4/3] lg:aspect-[16/10] rounded-[16px] lg:rounded-[24px] overflow-hidden border-[2px] lg:border-[3px] border-white/20 shadow-2xl">
            <Image
              src="/assets/Masterplan new.webp"
              alt="Masterplan Map"
              fill
              className="object-cover scale-[1.05] lg:scale-[1.1]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
