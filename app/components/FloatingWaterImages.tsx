"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface FloatingWaterImagesProps {
  backgroundImage?: string;
  className?: string;
}

function nextWaypoint(padX = 10, padY = 10) {
  return {
    x: padX + Math.random() * (100 - padX * 2),
    y: padY + Math.random() * (100 - padY * 2),
  };
}

export default function FloatingWaterImages({
  backgroundImage = "/assets/bg-in-feature-section.webp",
  className = "",
}: FloatingWaterImagesProps) {
  const [isMounted, setIsMounted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const turtleRef = useRef<HTMLDivElement>(null);

  const widthRef = useRef(0);
  const heightRef = useRef(0);

  const buffer1Ref = useRef<number[]>([]);
  const buffer2Ref = useRef<number[]>([]);
  const backgroundPixelsRef = useRef<Uint8ClampedArray | null>(null);
  const outputImageDataRef = useRef<ImageData | null>(null);

  const animationFrameRef = useRef<number>(0);
  const isImageLoadedRef = useRef(false);

  const controls = useAnimation();
  const facingRef = useRef<"right" | "left">("right");
  const posRef = useRef(nextWaypoint());

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
    img.src = backgroundImage;
    img.crossOrigin = "anonymous";

    img.onload = () => {
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

      const temp = buffer1Ref.current;
      buffer1Ref.current = buffer2Ref.current;
      buffer2Ref.current = temp;

      const damping = 0.92;

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

          let xOffset = x + Math.floor(dataOffset);
          let yOffset = y + Math.floor(dataOffset);

          if (xOffset < 0) xOffset = 0;
          if (xOffset >= width) xOffset = width - 1;
          if (yOffset < 0) yOffset = 0;
          if (yOffset >= height) yOffset = height - 1;

          const sourcePixel = (xOffset + yOffset * width) * 4;
          const targetPixel = i * 4;

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
  }, [isMounted, backgroundImage]);

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
    dropStone(e.clientX, e.clientY, 8, 20);
  };

  const roam = useCallback(async () => {
    while (true) {
      const from = posRef.current;
      const to = nextWaypoint();
      posRef.current = to;

      const dx = to.x - from.x;
      const newFacing: "right" | "left" = dx >= 0 ? "right" : "left";
      const didFlip = newFacing !== facingRef.current;
      facingRef.current = newFacing;

      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const duration = 7 + (dist / 100) * 15;

      await controls.start({
        left: `${to.x}%`,
        top: `${to.y}%`,
        scaleX: newFacing === "right" ? 1 : -1,
        rotate: [0, didFlip ? -8 : 4, didFlip ? 8 : -4, 0],
        transition: {
          left: { duration, ease: [0.44, 0, 0.56, 1] },
          top: { duration, ease: [0.44, 0, 0.56, 1] },
          scaleX: { duration: 0.5 },
          rotate: { duration, times: [0, 0.2, 0.8, 1], ease: "easeInOut" },
        },
      });
    }
  }, [controls]);

  useEffect(() => {
    if (!isMounted) return;
    controls.set({ left: `${posRef.current.x}%`, top: `${posRef.current.y}%` });
    roam();
  }, [isMounted, roam, controls]);

  // ─── Turtle Distance-Based Wake Tracker ───
  useEffect(() => {
    if (!isMounted) return;
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const trackWake = () => {
      if (turtleRef.current) {
        const tRect = turtleRef.current.getBoundingClientRect();
        // Calculate current center of the turtle
        const currentX = tRect.left + tRect.width / 2;
        const currentY = tRect.top + tRect.height / 2;

        // Initialize coordinates on the very first frame
        if (lastX === 0 && lastY === 0) {
          lastX = currentX;
          lastY = currentY;
        }

        // Calculate how far the turtle moved since the last dropped stone
        const distanceMoved = Math.hypot(currentX - lastX, currentY - lastY);

        // Only drop a stone if the turtle moved at least 8 pixels
        if (distanceMoved > 8) {
          dropStone(currentX, currentY, 2, 70); // Drop the wake
          // Save this spot so we can measure distance again
          lastX = currentX;
          lastY = currentY;
        }
      }
      rafId = requestAnimationFrame(trackWake);
    };

    trackWake();
    return () => cancelAnimationFrame(rafId);
  }, [isMounted, dropStone]);

  if (!isMounted) return null;

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        className="w-full h-full object-cover pointer-events-auto"
      />
      <motion.div
        ref={turtleRef}
        animate={controls}
        className="absolute pointer-events-none z-10"
        style={{
          width: "80px",
          translateX: "-50%",
          translateY: "-50%",
          filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.2))",
        }}
      >
        <Image
          src="/assets/turtle.webp"
          alt="Swimming turtle"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
