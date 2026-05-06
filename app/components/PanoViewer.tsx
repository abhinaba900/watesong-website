"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// Extend window object for TypeScript
declare global {
  interface Window {
    pano2vrPlayer: any;
    pano2vrSkin: any;
  }
}

export default function PanoViewer({ onLoad }: { onLoad?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);
  const [isSkinLoaded, setIsSkinLoaded] = useState(false);

  // Check if scripts are already loaded (handles client-side navigation)
  useEffect(() => {
    if (typeof window.pano2vrPlayer !== "undefined") setIsPlayerLoaded(true);
    if (typeof window.pano2vrSkin !== "undefined") setIsSkinLoaded(true);
  }, []);

  useEffect(() => {
    // Only initialize when both scripts are ready and container is present
    if (isPlayerLoaded && isSkinLoaded && containerRef.current) {
      // Small timeout to ensure DOM is fully ready for Pano2VR to grab the ID
      const timer = setTimeout(() => {
        try {
          // Initialize the player
          const pano = new window.pano2vrPlayer(containerRef.current?.id || "pano-container");
          
          // Add the skin with the correct base path for assets
          const skin = new window.pano2vrSkin(pano, "/360-tour/");
          
          // Read configuration (Path relative to public folder)
          // Arguments: url, callback, basePath, skin
          pano.readConfigUrlAsync("/360-tour/pano.xml", () => {
            if (onLoad) onLoad();
          }, "/360-tour/", skin);

          // Clean up on unmount
          return () => {
            if (containerRef.current) {
              containerRef.current.innerHTML = "";
            }
          };
        } catch (error) {
          console.error("Error initializing Pano2VR:", error);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPlayerLoaded, isSkinLoaded]);

  return (
    <div className="w-full h-full bg-black overflow-hidden relative">
      {/* Google Maps API */}
      <Script 
        src="https://maps.googleapis.com/maps/api/js?v=3" 
        strategy="afterInteractive"
      />

      {/* Pano2VR Player Script */}
      <Script 
        src="/360-tour/pano2vr_player.js" 
        onLoad={() => setIsPlayerLoaded(true)}
        strategy="afterInteractive"
      />
      
      {/* Pano2VR Skin Script */}
      <Script 
        src="/360-tour/skin.js" 
        onLoad={() => setIsSkinLoaded(true)}
        strategy="afterInteractive"
      />

      <div 
        id="pano-container" 
        ref={containerRef} 
        className="w-full h-full"
      >
        {!isPlayerLoaded && (
          <div className="flex items-center justify-center h-full text-white font-medium">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              <p>Loading 360 Viewer...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
