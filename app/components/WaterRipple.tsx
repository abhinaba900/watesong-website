"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export const WaterRippleOverlay = () => {
  const [isMounted, setIsMounted] = useState(false);
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

  // ─── Core Canvas CPU Water Algorithm (Transparent Mode) ───────────────
  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // We only render the size of the user's screen (viewport)
    // Scale 0.5 keeps it highly performant on the CPU
    const scale = 0.5;
    const width = Math.floor(window.innerWidth * scale);
    const height = Math.floor(window.innerHeight * scale);

    canvas.width = width;
    canvas.height = height;
    widthRef.current = width;
    heightRef.current = height;

    const size = width * height;
    buffer1Ref.current = new Array(size).fill(0);
    buffer2Ref.current = new Array(size).fill(0);

    // Create an empty, transparent image data buffer
    outputImageDataRef.current = ctx.createImageData(width, height);

    const renderLoop = () => {
      if (!ctx || !outputImageDataRef.current) return;

      const width = widthRef.current;
      const height = heightRef.current;
      const buffer1 = buffer1Ref.current;
      const buffer2 = buffer2Ref.current;
      const outData = outputImageDataRef.current;
      const outputPixels = outData.data;

      // Swap buffers
      const temp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = temp;

      const damping = 0.94; // Smooth, elegant wave

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = x + y * width;

          // Liquid math
          buffer2[i] =
            (buffer1[i - 1] +
              buffer1[i + 1] +
              buffer1[i - width] +
              buffer1[i + width]) /
              2 -
            buffer2[i];

          buffer2[i] *= damping;

          // We use the difference to calculate the "slope" of the wave
          let dataOffset = buffer2[i] - buffer1[i];
          const targetPixel = i * 4;

          // 🛑 TRANSPARENT HIGHLIGHT/SHADOW LOGIC 🛑
          // Instead of moving an image, we draw light and shadow opacity
          let r = 0,
            g = 0,
            b = 0,
            a = 0;

          if (dataOffset > 0.5) {
            // Wave Crest: Draw White Highlight
            r = 255;
            g = 255;
            b = 255;
            a = Math.min(255, dataOffset * 15);
          } else if (dataOffset < -0.5) {
            // Wave Trough: Draw Dark Blue/Black Shadow
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 10);
          }

          outputPixels[targetPixel] = r;
          outputPixels[targetPixel + 1] = g;
          outputPixels[targetPixel + 2] = b;
          outputPixels[targetPixel + 3] = a; // Alpha channel handles transparency!
        }
      }

      ctx.putImageData(outData, 0, 0);
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Handle Window Resize
    const handleResize = () => {
      const w = Math.floor(window.innerWidth * scale);
      const h = Math.floor(window.innerHeight * scale);
      canvas.width = w;
      canvas.height = h;
      widthRef.current = w;
      heightRef.current = h;
      const newSize = w * h;
      buffer1Ref.current = new Array(newSize).fill(0);
      buffer2Ref.current = new Array(newSize).fill(0);
      outputImageDataRef.current = ctx.createImageData(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]);

  // ─── Global Interaction Handler ────────────────────────────────────────────
  useEffect(() => {
    if (!isMounted) return;

    const dropStone = (
      x: number,
      y: number,
      radius: number,
      strength: number,
    ) => {
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
    };

    // Listen to ALL clicks on the window
    const handleGlobalClick = (e: MouseEvent) => {
      dropStone(e.clientX, e.clientY, 8, 250);
    };

    window.addEventListener("mousedown", handleGlobalClick);
    return () => window.removeEventListener("mousedown", handleGlobalClick);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      // Fixed overlay that ignores mouse events so you can still click buttons underneath it!
      className="absolute  w-full h-full top-0 left-0 z-1 pointer-events-none"
    />
  );
};
