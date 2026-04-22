"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

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
      className="bg-transparent w-full max-md:max-w-full relative "
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />
      )}

      {/* ─── Original Content ─── */}
      <div className="flex flex-col relative w-full items-center pl-0 lg:px-[5vw] pt-[22px] z-20 pointer-events-none">
        {/* Master Plan Wrapper */}
        <div className="relative w-full mt-[5vh] lg:mt-[10vh] px-[5vw] lg:px-[0vw] flex flex-col justify-center pointer-events-auto">
          {/* Heading */}
          <Image
            src="/assets/MASTER PLAN.webp"
            alt="MASTER PLAN"
            width={500}
            height={100}
            className="w-[50dvw] md:w-[30dvw] lg:w-[20dvw] -ml-[1vw] h-auto object-contain mb-[3vh] lg:mb-[4vh]"
          />

          {/* Main Content Wrapper */}
          <div className="relative w-full max-w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[6vw] md:gap-[2vw]">
              {/* Left Column: Text List */}
              <div className="w-full md:w-[45%] lg:w-[35%] z-10">
                <ul
                  className="text-white font-normal relative self-stretch 
                       text-left 
                       mt-[2vh] md:mt-0 
                       text-[4.5vw] md:text-[2vw] lg:text-[1.31vw] leading-[1.4] 
                       space-y-[1vh] lg:space-y-[1.2vh]"
                >
                  <li>1. Entry & Exit</li>
                  <li>2. Security Kiosk</li>
                  <li>3. Driveway</li>
                  <li>4. Jogging / Walking Trail</li>
                  <li>5. Children's play area</li>
                  <li>6. Multipurpose court</li>
                  <li>7. Seating Area</li>
                  <li>8. Private terrace area</li>
                  <li>9. Visitor's Car parking</li>
                  <li>10. Designated bike parking</li>
                  <li>11. Service Yard</li>
                  <li>
                    12. Clubhouse
                    <ul className="pl-[5vw] md:pl-[3vw] lg:pl-[2vw] mt-[0.5vh] lg:mt-[0.8vh] space-y-[0.5vh] lg:space-y-[0.8vh]">
                      <li>a) Gym</li>
                      <li>b) Swimming pool with open shower & toilet</li>
                      <li>c) Multi-purpose hall with toilets</li>
                      <li>d) Indoor Games Room</li>
                      <li>e) Open yoga / Aerobics Area</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Right Column: Master Plan Image */}
              <div className="w-full md:w-[50%] lg:w-[60%] relative z-0 flex justify-end">
                <Image
                  src="/assets/maserplan-for-master-plan.webp"
                  alt="Master plan layout"
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
