"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
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
            r = 255;
            g = 255;
            b = 255;
            a = Math.min(255, dataOffset * 25);
          } else if (dataOffset < -0.5) {
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

  return (
    <footer
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative bg-transparent w-full px-[5vw] lg:px-[8vw] pb-[6vh] lg:pb-[8vh] pt-0  no-scrollbar"
    >
      {/* Corner Stones Pile */}
      <div className="absolute right-0 bottom-0 w-[45vw] lg:w-[15vw] h-[5vh] z-0 opacity-100 -translate-y-35 pointer-events-none">
        <Image
          src="/assets/stone bg.webp"
          alt="Decorative stones"
          width={600}
          height={200}
          className="object-contain w-full h-auto rotate-180 scale-x-[-1]"
        />
      </div>
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      <div className="flex flex-col relative w-full items-center z-10 pointer-events-none">
        {/* Decorative Wave Line */}
        <div className="w-full mb-[4vh] lg:mb-[5vh] mt-[-2vh] lg:mt-[-4vh]">
          <Image
            src="/assets/line-for-footer.webp"
            alt="Decorative line"
            width={1920}
            height={100}
            className="w-full h-auto object-contain opacity-40 brightness-0 invert"
          />
        </div>

        {/* Footer Links & Copyright */}
        <div
          className="relative flex flex-col md:flex-row w-full justify-between items-center 
                        gap-[4vh] md:gap-[2vw] 
                        text-white font-normal text-center 
                        text-[3.5vw] md:text-[1.5vw] lg:text-[0.9vw] tracking-[0.02em] pointer-events-auto"
        >
          {/* Copyright Section */}
          <div className="opacity-60 font-medium">© 2026 All Right Reserved by PRIVAE</div>

          {/* Links Section */}
          <div className="flex items-center gap-[6vw] md:gap-[3vw] lg:gap-[2vw]">
            <Link
              href="/terms-and-conditions"
              className="opacity-80 font-medium hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Terms and conditions
            </Link>
            <span className="opacity-30">|</span>
            <Link
              href="/privacy-policy"
              className="opacity-80 font-medium hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
