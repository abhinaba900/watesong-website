"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [wasPlayingBeforeTour, setWasPlayingBeforeTour] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  const isTourPage = pathname === "/virtual-tour" || pathname === "/internal-tour";

  useEffect(() => {
    // Initialize audio
    const audio = new Audio("/assets/Water and Soothing Meditation.mp3.mpeg");
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isTourPage) {
      if (isPlaying) {
        setWasPlayingBeforeTour(true);
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (wasPlayingBeforeTour) {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
        setIsPlaying(true);
        setWasPlayingBeforeTour(false);
      }
    }
  }, [isTourPage]);

  const play = () => {
    if (audioRef.current && !isTourPage) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
      setIsPlaying(true);
      setWasPlayingBeforeTour(false);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setWasPlayingBeforeTour(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Handle first interaction to play automatically
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && !isTourPage) {
        play();
        setHasInteracted(true);
        // Clean up listeners
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
        window.removeEventListener("scroll", handleFirstInteraction);
      }
    };

    if (!hasInteracted) {
      window.addEventListener("click", handleFirstInteraction);
      window.addEventListener("touchstart", handleFirstInteraction);
      window.addEventListener("scroll", handleFirstInteraction);
    }

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [hasInteracted, isTourPage]);


  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, play, pause }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
