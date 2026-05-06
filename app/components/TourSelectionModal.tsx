"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TourSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourSelectionModal: React.FC<TourSelectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const options = [
    {
      title: "External View",
      description: "Experience the stunning architecture and lush landscape from above.",
      image: "/assets/elevation.webp",
      route: "/virtual-tour",
    },
    {
      title: "Internal View",
      description: "Step inside and explore the meticulously designed living spaces.",
      image: "/assets/201.webp",
      route: "/internal-tour",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#113239]/90 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-overwave text-3xl md:text-4xl text-white mb-4 tracking-wider uppercase">
                  Explore Watersong
                </h2>
                <p className="text-white/70 max-w-xl mx-auto">
                  Choose your preferred perspective to experience the ultimate luxury lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {options.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={() => {
                      onClose();
                      window.location.href = option.route;
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {option.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          {option.description}
                        </p>
                        
                        <div className="mt-4 flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          <span className="mr-2">Explore now</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
