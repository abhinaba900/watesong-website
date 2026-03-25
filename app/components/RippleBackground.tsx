"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface RippleBackgroundProps {
  image: string;
}

export default function RippleBackground({ image }: RippleBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const buffer1Ref = useRef<number[]>([]);
  const buffer2Ref = useRef<number[]>([]);
  const backgroundPixelsRef = useRef<Uint8ClampedArray | null>(null);
  const outputImageDataRef = useRef<ImageData | null>(null);

  const animationFrameRef = useRef<number>(0);
  const isImageLoadedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ─── Core Canvas CPU Water Algorithm ───────────────────────────────────────
  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new window.Image();
    img.src = image;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Scale down slightly for pure CPU performance
      const scale = 0.5;
      const width = Math.floor(canvas.clientWidth * scale);
      const height = Math.floor(canvas.clientHeight * scale);

      canvas.width = width;
      canvas.height = height;

      widthRef.current = width;
      heightRef.current = height;

      const size = width * height;
      buffer1Ref.current = new Array(size).fill(0);
      buffer2Ref.current = new Array(size).fill(0);

      // Draw original image and extract pure pixels
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      backgroundPixelsRef.current = imageData.data.slice();
      outputImageDataRef.current = imageData;

      isImageLoadedRef.current = true;
      renderLoop();
    };

    const renderLoop = () => {
      if (
        !isImageLoadedRef.current ||
        !ctx ||
        !outputImageDataRef.current ||
        !backgroundPixelsRef.current
      )
        return;

      const width = widthRef.current;
      const height = heightRef.current;
      const buffer1 = buffer1Ref.current;
      const buffer2 = buffer2Ref.current;
      const bgPixels = backgroundPixelsRef.current;
      const outData = outputImageDataRef.current;
      const outputPixels = outData.data;

      // Swap buffers
      const temp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = temp;

      // Damping controls how quickly the wave settles (lower = faster)
      const damping = 0.92;

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = x + y * width;

          // Liquid displacement math
          buffer2[i] =
            (buffer1[i - 1] +
              buffer1[i + 1] +
              buffer1[i - width] +
              buffer1[i + width]) /
              2 -
            buffer2[i];

          buffer2[i] *= damping;

          let dataOffset = buffer2[i] - buffer1[i];

          let xOffset = x + Math.floor(dataOffset);
          let yOffset = y + Math.floor(dataOffset);

          // Boundaries
          if (xOffset < 0) xOffset = 0;
          if (xOffset >= width) xOffset = width - 1;
          if (yOffset < 0) yOffset = 0;
          if (yOffset >= height) yOffset = height - 1;

          const sourcePixel = (xOffset + yOffset * width) * 4;
          const targetPixel = i * 4;

          // Soften the light/shadows and clamp to prevent black sinkholes
          let light = dataOffset * 0.8;
          if (light < -20) light = -20;
          if (light > 40) light = 40;

          outputPixels[targetPixel] = Math.min(
            255,
            Math.max(0, bgPixels[sourcePixel] + light),
          );
          outputPixels[targetPixel + 1] = Math.min(
            255,
            Math.max(0, bgPixels[sourcePixel + 1] + light),
          );
          outputPixels[targetPixel + 2] = Math.min(
            255,
            Math.max(0, bgPixels[sourcePixel + 2] + light),
          );
          outputPixels[targetPixel + 3] = 255;
        }
      }

      ctx.putImageData(outData, 0, 0);
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isMounted, image]);

  // ─── Interaction Handlers ──────────────────────────────────────────────────
  const dropStone = useCallback(
    (x: number, y: number, radius: number, strength: number) => {
      if (!isImageLoadedRef.current || !canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
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
            // Draw a circle in the buffer
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
    // Drop a thick, clean ripple exactly where the user clicks
    dropStone(e.clientX, e.clientY, 8, 20);
  };

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-transparent">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        // Retained your cursor-crosshair class for the aesthetic
        className="w-full h-full object-cover cursor-crosshair pointer-events-auto"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
