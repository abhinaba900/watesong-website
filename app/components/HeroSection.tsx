"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Real stone border image overlay.
 * The image has a transparent/white centre — card content shows through it.
 * Aspect ratio of the source asset: ~1456 × 816 (≈ 16:9).
 */
const StoneFrameImage: React.FC = () => (
  <Image
    src="/assets/hero-border-image.webp"
    alt=""
    aria-hidden="true"
    fill
    sizes="(max-width: 1024px) 95vw, 58vw"
    className="object-fill pointer-events-none select-none"
    style={{ zIndex: 10 }}
    priority
  />
);

// ─── Main Hero Section ─────────────────────────────────────────────────────────
export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Ripple refs
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

  // ─── CPU Water Ripple ────────────────────────────────────────────────────────
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

      // Swap buffers
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

  const dropStone = useCallback(
    (x: number, y: number, radius: number, strength: number) => {
      if (!canvasRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sx = widthRef.current / rect.width;
      const sy = heightRef.current / rect.height;
      const cx = Math.floor((x - rect.left) * sx);
      const cy = Math.floor((y - rect.top) * sy);
      const W = widthRef.current;
      const H = heightRef.current;
      const b1 = buffer1Ref.current;
      for (let j = cy - radius; j < cy + radius; j++) {
        for (let i = cx - radius; i < cx + radius; i++) {
          if (i >= 0 && i < W && j >= 0 && j < H) {
            if ((i - cx) ** 2 + (j - cy) ** 2 <= radius ** 2) {
              b1[i + j * W] = strength;
            }
          }
        }
      }
    },
    [],
  );

  if (!mounted)
    return <section className="w-full h-[100dvh] lg:h-screen bg-[#113239]" />;

  return (
    <section
      ref={containerRef}
      onPointerDown={(e) => dropStone(e.clientX, e.clientY, 8, 60)}
      className="relative w-full overflow-hidden font-sans h-[100dvh] lg:h-screen"
      style={{
      }}
    >
      {/* Ripple canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 4 }}
      />

      {/* ─── Main Layout ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between pointer-events-auto"
        style={{
          zIndex: 10,
          padding: "0 8vw",
          paddingTop: "var(--navbar-h, 5rem)",
          gap: "4vw",
        }}
      >
        {/* ── LEFT: Content Group ─────────────────────────────── */}
        <div className="flex flex-col items-start lg:w-1/2 gap-10 mt-[-5vh]">
          {/* Text Group */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center ml-10"
          >
            <Image
              src="/assets/Spacious Premium.webp"
              alt="Spacious Premium"
              width={400}
              height={100}
              className="w-[60dvw] lg:w-[20dvw] h-auto object-contain"
            />
            <p
              className="text-white/90 font-light mt-2 text-center leading-tight tracking-wide"
              style={{ fontSize: "clamp(0.8rem, 1.1vw, 1.4rem)" }}
            >
              3 BHK+ Homes from
              <br />
              2565 to 3495 sq. ft.
            </p>
          </motion.div>

          {/* Grey Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-[2/1] lg:w-[48vw] lg:max-w-[700px] bg-[#8a9b9e]/50 backdrop-blur-sm rounded-[40px] lg:rounded-[60px]"
          />
        </div>

        {/* ── RIGHT: Lotus Flower ──────────────────────────────────── */}
        <motion.div
          className="flex flex-1 items-center justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            animate={{ rotate: [-1.8, 1.8], y: ["-3%", "3%"] }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              y: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/assets/Lotus - webp.webp"
              alt="Lotus flower"
              width={600}
              height={600}
              className="h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              style={{ width: "clamp(200px, 32vw, 550px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
