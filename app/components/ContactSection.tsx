"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialIconButton: React.FC<{
  icon: string;
  index: number;
  href: string;
}> = ({ icon, index, href }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(false);
    // Tiny delay ensures the animation restarts if hovered multiple times quickly
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={triggerAnimation}
      animate={
        isAnimating
          ? {
              scale: [1, 1.1, 0.95, 1.05, 1],
              scaleX: [1, 1.15, 0.85, 1.05, 1],
              scaleY: [1, 0.85, 1.15, 0.95, 1],
            }
          : {
              scale: 1,
              scaleX: 1,
              scaleY: 1,
            }
      }
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-[12vw] md:w-[6vw] lg:w-[3.5vw] aspect-square rounded-full transition-colors pointer-events-auto overflow-hidden hover:bg-white/10"
      aria-label={`Social media link ${index + 1}`}
    >
      <Image
        src={icon}
        alt={`Social icon ${index + 1}`}
        fill
        className="object-contain opacity-90"
      />
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("70261 12224");
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

  const socialIcons = [
    {
      icon: "/assets/instagram-icon.webp",
      href: "https://www.instagram.com/habitatventures",
    },
    {
      icon: "/assets/facebook-icon.webp",
      href: "https://www.facebook.com/habitatventures",
    },
    {
      icon: "/assets/linkedin-icon.webp",
      href: "https://www.linkedin.com/company/habitatventures",
    },
    {
      icon: "/assets/twtter-icon.webp",
      href: "#",
    },
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

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
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative no-scrollbar bg-transparent w-full px-[5vw] lg:px-[5vw] py-[8vh] lg:py-[5vh] overflow-x-hidden no-scrollbar"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      {/* Main Grid: Stacks on mobile, 3 columns as per reference */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-[4vw] py-[1rem] gap-10 lg:gap-4 mt-[10vh]">
        {/* COLUMN 1: Branding */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left text-white pointer-events-auto">
          {/* PRÍVAE Logo */}
          <div className="mb-[2vh]">
            <Image
              src="/assets/navbar-right-logo.webp"
              alt="PRÍVAE"
              width={120}
              height={40}
              className="object-contain w-[15vw] md:w-[10vw] lg:w-[6vw] brightness-0 invert"
            />
          </div>

          {/* Watersong Logo Wrapper */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/assets/watersong-logo-blue.webp"
              alt="Watersong"
              width={600}
              height={200}
              className="object-contain w-[75vw] md:w-[50vw] lg:w-[28vw] mb-[-1vh]"
            />
            <h3 className="text-[6vw] md:text-[4vw] lg:text-[1.8vw] font-medium tracking-tight mb-[0.5vh]">
              Lakefront Residences
            </h3>
            <p className="text-[4vw] md:text-[2.2vw] lg:text-[1vw] font-medium opacity-80 lg:mb-0">
              1 KM from Nallurhalli Metro, Whitefield
            </p>
          </div>
        </div>

        {/* COLUMN 2: Socials & Phone */}
        <div className="w-full lg:w-[30%] flex flex-col items-center gap-[4vh] pointer-events-auto">
          {/* Social Icons */}
          <div className="flex items-center gap-[4vw] lg:gap-[1.5vw]">
            {socialIcons.map((social, index) => (
              <SocialIconButton
                key={index}
                icon={social.icon}
                href={social.href}
                index={index}
              />
            ))}
          </div>

          {/* Phone Number */}
          <button
            onClick={handleCallClick}
            className="text-[7vw] md:text-[5vw] lg:text-[2.2vw] text-white font-medium flex items-center gap-3 hover:opacity-80 transition-opacity tracking-wide"
          >
            <Image
              src="/assets/call-icon-svg.svg"
              alt="Call"
              width={30}
              height={30}
              className="w-[5vw] md:w-[3vw] lg:w-[1.4vw] brightness-0 invert"
            />
            {phoneNumber}
          </button>
        </div>

        {/* COLUMN 3: Building Image */}
        <div className="w-full lg:w-[35%] relative flex justify-center lg:justify-end pointer-events-auto">
          {/* Building Image */}
          <div className="relative w-full lg:w-[90%] z-10">
            <Image
              src="/assets/footer right side image.webp"
              alt="Lakefront Residence"
              width={900}
              height={500}
              className="object-contain w-full h-auto drop-shadow-2xl scale-[1.2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
