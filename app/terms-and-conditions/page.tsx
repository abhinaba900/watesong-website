"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
  const [isMounted, setIsMounted] = useState(false);

  // --- Ripple Refs ---
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const scale = 0.5;

    const initCanvas = () => {
      const width = Math.floor(window.innerWidth * scale);
      const height = Math.floor(window.innerHeight * scale);

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
            a = Math.min(255, dataOffset * 15);
          } else if (dataOffset < -0.5) {
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 3);
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

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]);

  const dropStone = useCallback(
    (x: number, y: number, radius: number, strength: number) => {
      if (!canvasRef.current) return;

      const scaleX = widthRef.current / window.innerWidth;
      const scaleY = heightRef.current / window.innerHeight;

      const scaledX = Math.floor(x * scaleX);
      const scaledY = Math.floor(y * scaleY);

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
    // Standard Lite Click: Radius 8, Strength 20
    dropStone(e.clientX, e.clientY, 8, 20);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative w-full min-h-screen bg-[#113239] overflow-x-hidden"
    >
      {/* ─── The Fixed Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      <main className="relative z-10 w-full flex flex-col items-center justify-start pt-[20vh] pb-[10vh] px-[5vw] lg:px-[15vw]">
        {/* Dark overlay for better readability */}
        <div className="fixed inset-0 bg-[#113239]/60 z-0 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-start justify-start text-white">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm pointer-events-auto"
          >
            &larr; Back to Main Site
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
            Terms & Conditions
          </h1>

          <div className="flex flex-col gap-6 text-white/90 leading-relaxed font-light text-base md:text-lg mb-[10vh]">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                1. Introduction
              </h2>
              <p>
                Welcome to Privae Lakefront Residences. By accessing our
                website, you agree to these Terms and Conditions. Please read
                them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                2. Use of Website
              </h2>
              <p>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services, or information available through this website meet
                your specific requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                3. Intellectual Property
              </h2>
              <p>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance, and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                4. Modifications
              </h2>
              <p>
                We reserve the right to revise and amend these terms and
                conditions from time to time. Your continued use of the website
                following any changes signifies your acceptance of those
                changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                5. Governing Law
              </h2>
              <p>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the local and national laws
                governing the estate properties.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Container */}
      <div className="relative z-20 w-full bg-[#113239]/90">
        <Footer />
      </div>
    </div>
  );
}
