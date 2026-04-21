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

  useEffect(() => { setMounted(true); }, []);

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
          b2[i] =
            (b1[i - 1] + b1[i + 1] + b1[i - W] + b1[i + W]) / 2 - b2[i];
          b2[i] *= damp;

          const d = b2[i] - b1[i];
          const p = i * 4;

          if (d > 0.5) {
            px[p] = 255; px[p + 1] = 255; px[p + 2] = 255;
            px[p + 3] = Math.min(255, d * 25);
          } else if (d < -0.5) {
            px[p] = 10; px[p + 1] = 25; px[p + 2] = 40;
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
    >
      {/* Ripple canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 4 }}
      />

    

      {/* Tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ─── Main Layout ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center pointer-events-auto"
        style={{
          zIndex: 10,
          padding: "0 4vw",
          paddingTop: "var(--navbar-h, 5rem)",
          gap: "2vw",
        }}
      >
        {/* ── LEFT: Stone-Framed Branding Card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
          style={{
            /*
             * Width-driven sizing at 56vw, capped so the card's height
             * never overflows the viewport (minus navbar ~80px).
             */
            width: "min(56vw, calc((100vh - 80px) * 1456 / 816))",
            aspectRatio: "1456 / 816",
          }}
        >
          {/* Transparent shell — stone image shadow/blur bleeds naturally */}
          <div className="absolute inset-0">
            {/*
             * Inner content window — calibrated to the actual stone pixel boundary.
             * Left border in the 1456px source is ~350px thick (24 %).
             * Right border is ~270px (18.5%). Top ~185px (22.7%). Bottom ~165px (20.2%).
             * Adding ~1 % safety on each side.
             */}
            <div
              className="absolute flex flex-row overflow-hidden"
              style={{
                left: "25%",
                right: "20%",
                top: "23%",
                bottom: "21%",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Branding panel */}
              <div
                onClick={() =>
                  window.open("https://maps.app.goo.gl/uorALjYNRyMLUPga6")
                }
                className="flex flex-col justify-center cursor-pointer"
                style={{ width: "48%", padding: "5% 4% 5% 6%" }}
              >
                <Image
                  src="/assets/navbar-right-logo.webp"
                  alt="Privae"
                  width={120}
                  height={40}
                  className="h-auto object-contain"
                  style={{
                    width: "clamp(24px, 34%, 68px)",
                    marginBottom: "4%",
                  }}
                />
                <Image
                  src="/assets/watersong-logo-blue.webp"
                  alt="Watersong"
                  width={280}
                  height={80}
                  className="h-auto object-contain"
                  style={{
                    width: "clamp(70px, 84%, 195px)",
                    marginBottom: "5%",
                  }}
                />
                <p
                  className="text-white font-bold leading-tight"
                  style={{ fontSize: "clamp(0.55rem, 1.15vw, 1.05rem)" }}
                >
                  Lakefront Residences
                </p>
                <p
                  className="text-white font-medium mt-1 leading-snug opacity-85"
                  style={{ fontSize: "clamp(0.45rem, 0.75vw, 0.8rem)" }}
                >
                  1 KM from Nallurhalli Metro, Whitefield
                </p>
              </div>

              {/* Building photo */}
              <div className="relative flex-1"></div>
            </div>
          </div>

          {/* ── Real stone-border image — overlays the card ── */}
          <StoneFrameImage />
        </motion.div>

        {/* ── RIGHT: Lotus Flower + Specs ──────────────────────────────────── */}
        <div
          className="hidden lg:flex flex-col items-center flex-1 h-full"
          style={{
            paddingTop: "2vh",
            paddingBottom: "4vh",
            paddingRight: "2vw",
            gap: 0,
          }}
        >
          {/* Lotus — floats in upper portion */}
          <motion.div
            className="flex flex-1 items-center justify-center"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              animate={{ rotate: [-1.8, 1.8], y: ["-4%", "4%"] }}
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
                alt="Lotus flower"
                width={420}
                height={420}
                className="h-auto object-contain drop-shadow-2xl"
                style={{ width: "clamp(140px, 22vw, 340px)" }}
              />
            </motion.div>
          </motion.div>

          {/* "Spacious Premium" specs */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="font-black uppercase tracking-widest text-white leading-none"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 2.6rem)",
                fontStyle: "italic",
                letterSpacing: "0.08em",
              }}
            >
              Spacious Premium
            </h2>
            <p
              className="text-white/75 font-light mt-3 leading-relaxed"
              style={{ fontSize: "clamp(0.7rem, 0.95vw, 1rem)" }}
            >
              3 BHK+ Homes from
              <br />
              2565 to 3495 sq. ft.
            </p>
          </motion.div>
        </div>

        {/* ── MOBILE: simple card (no stone frame) ─────────────────────────── */}
        <motion.article
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:hidden bg-white/78 backdrop-blur-md shadow-2xl overflow-hidden flex flex-row w-full rounded-2xl"
          style={{ height: "clamp(120px, 46vw, 240px)" }}
        >
          <div
            onClick={() =>
              window.open("https://maps.app.goo.gl/uorALjYNRyMLUPga6")
            }
            className="flex flex-col justify-center p-5 w-[55%] cursor-pointer"
          >
            <Image
              src="/assets/card-inside-image-of-hero-section.webp"
              alt="Privae"
              width={100}
              height={34}
              className="w-14 mb-2 h-auto object-contain"
            />
            <Image
              src="/assets/watersong-logo-blue.webp"
              alt="Watersong"
              width={220}
              height={70}
              className="w-36 object-contain mb-2 h-auto"
            />
            <p className="text-[#0C637E] font-bold text-sm leading-tight">
              Lakefront Residences
            </p>
            <p className="text-[#0C637E] font-medium text-[0.65rem] mt-0.5 opacity-85">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>
          <div className="relative flex-1">
            <Image
              src="/assets/lackfront-recidance.webp"
              alt="Building"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </motion.article>
      </div>
    </section>
  );
};
