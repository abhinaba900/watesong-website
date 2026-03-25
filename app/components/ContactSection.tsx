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
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={triggerAnimation}
      onFocus={triggerAnimation}
      onClick={triggerAnimation}
      animate={
        isAnimating
          ? {
              scale: [1.3, 1.45, 1.2, 1.35, 1.3],
              scaleX: [1.3, 1.45, 1.1, 1.35, 1.3],
              scaleY: [1.3, 1.45, 1.4, 1.25, 1.3],
            }
          : {
              scale: 1.3,
              scaleX: 1.3,
              scaleY: 1.3,
            }
      }
      whileTap={{ scale: 1.1 }}
      onAnimationComplete={() => setIsAnimating(false)}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      className="relative cursor-pointer select-none outline-none border-none pointer-events-auto"
      aria-label={`Social media link ${index + 1}`}
    >
      <Image
        src={icon}
        alt={`Social icon ${index + 1}`}
        width={100}
        height={100}
        className="aspect-square object-contain w-[12vw] md:w-[8vw] lg:w-[4vw] h-auto"
      />
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("7026112224");
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
      icon: "/assets/facebook-icon.webp",
      href: "https://www.facebook.com/habitatventures",
    },
    {
      icon: "/assets/twtter-icon.webp",
      href: "#",
    },
    {
      icon: "/assets/instagram-icon.webp",
      href: "https://www.instagram.com/habitatventures",
    },
    {
      icon: "/assets/linkedin-icon.webp",
      href: "https://www.linkedin.com/company/habitatventures",
    },
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
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

    // Scale down for CPU performance
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
            // Wave Crest (Highlight)
            r = 255;
            g = 255;
            b = 255;
            a = Math.min(255, dataOffset * 15);
          } else if (dataOffset < -0.5) {
            // Wave Trough (Soft Shadow)
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 3); // Soft shadow logic!
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

      // Calculate click position relative to the section
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
    // Finalized Lite Click Ripple: Radius 8, Strength 20
    dropStone(e.clientX, e.clientY, 8, 20);
  };

  return (
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      // Added overflow-hidden to keep the canvas clean
      className="relative bg-transparent w-full px-[5vw] lg:px-[8vw] py-[4vh] lg:pt-[6vh] lg:pb-[2vh] overflow-hidden"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}

      {/* Main Grid: Stacks on mobile, 3 columns on desktop */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-[8vw] lg:gap-[2vw] pointer-events-none">
        {/* LEFT COLUMN: Logos & Address Info */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left text-white font-semibold leading-[1.4] pointer-events-auto">
          {/* Privae Logo */}
          <Image
            src="/assets/navbar-right-logo.webp"
            alt="Privae logo"
            width={300}
            height={100}
            className="object-contain w-[40vw] md:w-[25vw] lg:w-[12vw] mb-[2vh] h-auto"
          />
          {/* Watersong Logo */}
          <Image
            src="/assets/watersong-logo-blue.webp"
            alt="Watersong logo"
            width={400}
            height={150}
            className="object-contain w-[70vw] md:w-[45vw] lg:w-[22vw] h-auto"
          />
          {/* Location Text */}
          <h3 className="text-[6vw] md:text-[4vw] lg:text-[1.8vw] tracking-[-0.04vw]">
            Lakefront Residences
          </h3>
          <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] tracking-[-0.02vw] font-normal opacity-90">
            1 KM from Nallurhalli Metro, Whitefield
          </p>
        </div>

        {/* MIDDLE COLUMN: Socials & Phone Number */}
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center gap-[4vh]">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-[4vw] lg:gap-[1.5vw]">
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
            className="text-[7vw] md:text-[5vw] flex items-center gap-2 lg:text-[2vw] text-white font-semibold hover:scale-[1.03] transition-all duration-300 tracking-wide pointer-events-auto"
          >
            <Image
              src="/assets/call-icon-svg.svg"
              alt="Call icon"
              width={100}
              height={100}
              className="object-contain w-[4vw] md:w-[3vw] lg:w-[1.5vw] h-auto "
            />
            {phoneNumber}
          </button>
        </div>

        {/* RIGHT COLUMN: Illustration / Map */}
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-end pointer-events-auto">
          <Image
            src="/assets/lackfront-recidance.webp"
            alt="Contact illustration"
            width={800}
            height={640} // Maintains the 1.25 aspect ratio
            className="object-contain w-[80vw] md:w-[60vw] lg:w-[100%] aspect-[1.25] h-auto"
          />
        </div>
      </div>
    </section>
  );
};
