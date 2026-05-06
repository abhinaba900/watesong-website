"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

function InternalTourContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [picId, setPicId] = useState<string | null>(null);

  useEffect(() => {
    // Ensure we capture search params on mount
    setPicId(searchParams.get("picId") || "");
  }, [searchParams]);

  if (picId === null) return null;

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#113239] text-white">
          <Loader2 className="w-12 h-12 animate-spin mb-4 text-[#C9A050]" />
          <p className="text-xl font-medium tracking-wide animate-pulse uppercase">Initializing 360° Interior Tour...</p>
          <p className="text-white/40 text-sm mt-4 italic font-light tracking-widest">High-quality 3D assets are loading. Please wait a moment.</p>
        </div>
      )}
      
      <iframe
        key={picId}
        src={`https://www.artboxxstudio.com/designs/design/3FO3H8FFMN92/show?kpm=qkWL.e9b1b6bc79410e89.f3e39d8.1600775495888?hasloding=false&hasui=false${picId}`}
        className="w-full h-full border-0"
        title="Internal 360 Tour"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Back button */}
      <button 
        onClick={() => window.location.href = "/"}
        className="absolute top-4 left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2.5 rounded-full border border-white/20 transition-all font-medium flex items-center gap-2 group"
      >
        <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
        <span className="text-sm font-medium tracking-wide">Back to Home</span>
      </button>
    </div>
  );
}

export default function InternalTourPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-black flex items-center justify-center text-white">Loading Tour...</div>}>
      <InternalTourContent />
    </Suspense>
  );
}
