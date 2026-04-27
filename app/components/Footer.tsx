"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative bg-transparent w-full px-[5vw] lg:px-[8vw] pb-[6vh] lg:pb-[8vh] pt-0  no-scrollbar">
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
