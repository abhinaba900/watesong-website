"use client";

import PanoViewer from "@/components/PanoViewer";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function VirtualTourPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="fixed inset-0 bg-black overflow-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-[#113239] text-white">
          <Loader2 className="w-12 h-12 animate-spin mb-4 text-[#C9A050]" />
          <p className="text-xl font-medium tracking-wide animate-pulse uppercase">Loading Virtual Tour...</p>
          <p className="text-white/40 text-sm mt-4 italic font-light tracking-widest">High-resolution panoramas are loading. Please wait a moment.</p>
        </div>
      )}

      {/* Navigation Header - Transparent Overlay */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <button 
          onClick={() => window.location.href = "/"}
          className="pointer-events-auto flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all group"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </button>
      </nav>

      {/* Full Screen Viewer */}
      <div className="w-full h-full">
        <PanoViewer onLoad={() => setIsLoading(false)} />
      </div>
    </main>
  );
}
