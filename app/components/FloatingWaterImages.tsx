"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingWaterImagesProps {
  backgroundImage?: string;
  className?: string;
}

// ─── Types for our Clone System ──────────────────────────────────────────────
interface SwimmerData {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
  duration: number;
}

// ─── Path Generator for Clones ───────────────────────────────────────────────
function generateSwimmerPath(id: number): SwimmerData {
  const edges = ["top", "right", "bottom", "left"];
  const edge = edges[Math.floor(Math.random() * edges.length)];

  let startX = 0,
    startY = 0,
    endX = 0,
    endY = 0;

  switch (edge) {
    case "top":
      startX = Math.random() * 100;
      startY = -15;
      endX = Math.random() * 100;
      endY = 115;
      break;
    case "bottom":
      startX = Math.random() * 100;
      startY = 115;
      endX = Math.random() * 100;
      endY = -15;
      break;
    case "left":
      startX = -15;
      startY = Math.random() * 100;
      endX = 115;
      endY = Math.random() * 100;
      break;
    case "right":
      startX = 115;
      startY = Math.random() * 100;
      endX = -15;
      endY = Math.random() * 100;
      break;
  }

  const dx = endX - startX;
  const dy = endY - startY;
  const angleRad = Math.atan2(dy, dx);
  const rotation = angleRad * (180 / Math.PI) + 160;

  const duration = 70 + Math.random() * 50;

  return { id, startX, startY, endX, endY, rotation, duration };
}

// ─── Individual Clone Component ──────────────────────────────────────────────
function SwimmerClone({
  data,
  dropStone,
  onRemove,
}: {
  data: SwimmerData;
  dropStone: (
    x: number,
    y: number,
    radius: number,
    strength: number,
    isPercent?: boolean,
  ) => void;
  onRemove: (id: number) => void;
}) {
  useEffect(() => {
    let rafId: number;
    const startTime = performance.now();
    const durationMs = data.duration * 1000;

    let lastX = data.startX;
    let lastY = data.startY;

    const trackWake = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      const currentX = data.startX + (data.endX - data.startX) * progress;
      const currentY = data.startY + (data.endY - data.startY) * progress;

      const distanceMoved = Math.hypot(currentX - lastX, currentY - lastY);

      // Increased distance to 1.5 for less jitter, lowered strength to 20 for very calm wakes
      if (distanceMoved > 1.5) {
        dropStone(currentX, currentY, 2, 20, true);
        lastX = currentX;
        lastY = currentY;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(trackWake);
      }
    };

    rafId = requestAnimationFrame(trackWake);
    return () => cancelAnimationFrame(rafId);
  }, [data, dropStone]);

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      initial={{
        left: `${data.startX}%`,
        top: `${data.startY}%`,
        rotate: data.rotation,
      }}
      animate={{
        left: `${data.endX}%`,
        top: `${data.endY}%`,
      }}
      transition={{
        duration: data.duration,
        ease: "linear",
      }}
      onAnimationComplete={() => onRemove(data.id)}
      style={{
        width: "150px",
        translateX: "-50%",
        translateY: "-50%",
        filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.2))",
        opacity: 0.8,
      }}
    >
      <Image
        src="/assets/Pause GIF image.gif"
        alt="Swimming turtle"
        width={100}
        height={100}
        className="w-full h-auto object-contain"
        priority
      />
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FloatingWaterImages({
  backgroundImage = "/assets/bg-in-feature-section.webp",
  className = "",
  isFixed = false,
}: FloatingWaterImagesProps & { isFixed?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);
  const [swimmers, setSwimmers] = useState<SwimmerData[]>([]);
  const spawnIdRef = useRef(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const scaleRef = useRef(1);

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
    img.src = backgroundImage;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      let clientWidth = canvas.clientWidth;
      let clientHeight = canvas.clientHeight;

      const MAX_PIXELS = 250000;
      const currentPixels = clientWidth * clientHeight;
      let scale = 0.5;

      if (currentPixels * scale * scale > MAX_PIXELS) {
        scale = Math.sqrt(MAX_PIXELS / currentPixels);
      }
      scaleRef.current = scale;

      const width = Math.floor(clientWidth * scale);
      const height = Math.floor(clientHeight * scale);

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

      // Increased to 0.96 for a smoother, glassier ripple that travels gently
      const damping = 0.96;

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

          // Significantly reduced multiplier (0.5) to remove harsh high-contrast edges
          let light = dataOffset * 0.5;

          // Clamped the max/min light so ripples stay subtle
          if (light < -15) light = -15;
          if (light > 30) light = 30;

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
    (
      x: number,
      y: number,
      baseRadius: number,
      strength: number,
      isPercent = false,
    ) => {
      if (!isImageLoadedRef.current || !canvasRef.current) return;

      const width = widthRef.current;
      const height = heightRef.current;
      const buffer1 = buffer1Ref.current;
      const scale = scaleRef.current;

      const radius = Math.max(1, Math.floor(baseRadius * scale));

      let scaledX, scaledY;

      if (isPercent) {
        scaledX = Math.floor((x / 100) * width);
        scaledY = Math.floor((y / 100) * height);
      } else {
        scaledX = Math.floor(x * scale);
        scaledY = Math.floor(y * scale);
      }

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
    // Reduced click strength to 45 and radius to 8 for a more refined splash
    dropStone(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 8, 45, false);
  };

  useEffect(() => {
    if (!isMounted) return;

    setSwimmers([
      generateSwimmerPath(spawnIdRef.current++),
      generateSwimmerPath(spawnIdRef.current++),
    ]);
  }, [isMounted]);

  const removeSwimmer = useCallback((id: number) => {
    setSwimmers((prev) => {
      const filtered = prev.filter((swimmer) => swimmer.id !== id);
      return [...filtered, generateSwimmerPath(spawnIdRef.current++)];
    });
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`${isFixed ? "fixed" : "absolute"} inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        className="w-full h-full object-cover pointer-events-auto"
      />
      {swimmers.map((swimmer) => (
        <SwimmerClone
          key={swimmer.id}
          data={swimmer}
          dropStone={dropStone}
          onRemove={removeSwimmer}
        />
      ))}
    </div>
  );
}
