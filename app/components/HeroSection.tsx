"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

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

      const W = widthRef.current;
      const H = heightRef.current;
      const b1 = buffer1Ref.current;
      const b2 = buffer2Ref.current;
      const out = outputImageDataRef.current;
      const px = out.data;

      const tmp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = tmp;

      const damp = 0.94;

      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = x + y * W;
          b2[i] = (b1[i - 1] + b1[i + 1] + b1[i - W] + b1[i + W]) / 2 - b2[i];
          b2[i] *= damp;

          const d = b2[i] - b1[i];
          const p = i * 4;

          if (d > 0.5) {
            px[p] = 255;
            px[p + 1] = 255;
            px[p + 2] = 255;
            px[p + 3] = Math.min(255, d * 25);
          } else if (d < -0.5) {
            px[p] = 10;
            px[p + 1] = 25;
            px[p + 2] = 40;
            px[p + 3] = Math.min(255, -d * 8);
          } else {
            px[p + 3] = 0;
          }
        }
      }

      ctx.putImageData(out, 0, 0);
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    const obs = new ResizeObserver(() => initCanvas());
    obs.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      obs.disconnect();
    };
  }, [mounted]);

  const dropStone = useCallback((x: number, y: number) => {
    if (!canvasRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const sx = widthRef.current / rect.width;
    const sy = heightRef.current / rect.height;

    const cx = Math.floor((x - rect.left) * sx);
    const cy = Math.floor((y - rect.top) * sy);

    const W = widthRef.current;
    const H = heightRef.current;
    const b1 = buffer1Ref.current;

    for (let j = cy - 8; j < cy + 8; j++) {
      for (let i = cx - 8; i < cx + 8; i++) {
        if (i >= 0 && i < W && j >= 0 && j < H) {
          if ((i - cx) ** 2 + (j - cy) ** 2 <= 64) {
            b1[i + j * W] = 60;
          }
        }
      }
    }
  }, []);

  if (!mounted) return <section className="w-full h-screen bg-[#113239]" />;

  return (
    <section
      ref={containerRef}
      onPointerDown={(e) => dropStone(e.clientX, e.clientY)}
      className="relative w-full overflow-hidden h-screen"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-[4vw] lg:pl-[10vw] lg:pr-[5vw] pt-[60px] lg:pt-0 gap-4 lg:gap-0">
        {/* LEFT */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[50vw]">
          <div className="flex flex-col items-center lg:ml-[3vw] mb-4 lg:mb-[8vh]">
            <Image
              src="/assets/Spacious Premium.webp"
              alt="Spacious Premium"
              width={400}
              height={100}
              className="w-[70vw] max-w-[260px] lg:w-[20vw] lg:min-w-[250px] lg:max-w-none object-contain"
            />

            <p className="text-white/90 text-sm lg:text-[1.2vw] lg:min-text-[16px] mt-1 lg:mt-[2vh] text-center font-light leading-snug">
              3 BHK+ Homes from
              <br />
              2565 to 3495 sq. ft.
            </p>
          </div>

          <div className="w-full sm:w-[80vw] lg:w-[45vw] h-[130px] sm:h-[150px] lg:h-[35vh] bg-[#8a9b9e]/50 rounded-[24px] lg:rounded-[30px]" />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center w-full lg:w-[40vw]">
          <Image
            src="/assets/Lotus - webp.webp"
            alt="Lotus"
            width={800}
            height={800}
            className="w-[45vw] max-w-[220px] lg:w-[28vw] lg:max-w-none object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
