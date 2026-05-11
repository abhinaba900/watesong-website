"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

export const CallButton = () => {
  const pathname = usePathname();
  
  // Hide on tour pages
  if (pathname === "/virtual-tour" || pathname === "/internal-tour") return null;

  const phoneNumber = "+919036575333";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-[6.5rem] right-6 lg:bottom-[7.5rem] z-50 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-[#1f4a4c] text-white rounded-full shadow-lg hover:bg-[#2a5e61] hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Call us"
    >
      <div className="absolute inset-0 rounded-full bg-[#1f4a4c] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 lg:w-[32px] lg:h-[32px]"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-1.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 8" />
        <path d="M14.05 5a6 6 0 0 1 5 5" />
        <path d="M14.05 8a3 3 0 0 1 2 2" />
      </svg>
    </a>
  );
};

