"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Slider from "react-slick";

// Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Gallery Data ---
const galleryPhotos = [
  "/assets/hf_20260415_110320_49783d9f-a1e5-4eab-841e-22d5b25c678a.webp",
  "/assets/hf_20260417_053258_0f5d09ab-533c-44de-bc89-0aaf27618a08.webp",
  "/assets/hf_20260417_070126_3514e84c-bddd-41c6-b98a-32c3e85fd6dd.webp",
  "/assets/hf_20260417_082627_ad33f00a-b3d8-4f81-b305-ba98e64903fa.webp",
  "/assets/hf_20260423_190903_facfc9a6-b1bb-4e30-b937-a192aa22dc76.webp",
  "/assets/hf_20260427_073316_92b21e5d-2f11-4bdf-ae89-ec67bd3b0f6c.webp",
  "/assets/hf_20260427_111207_5805814a-147a-4ab3-a621-2cd8156ad613.webp",
  "/assets/hf_20260428_051839_ff46c691-267b-48e9-b11b-6a2a749bbfae.webp",
  "/assets/hf_20260428_074453_fd156fd2-34c4-4422-9cbd-adc778b8a2af.webp",
  "/assets/watersong entry.webp",
  "/assets/hf_20260408_123851_32ef4287-ba2a-440f-8909-467fbc87f92d.webp",
  "/assets/hf_20260415_063251_e23aa486-e88e-40e8-80a3-b6718fea834c.webp",
];

const galleryVideos = [
  // Using a sample video for now as requested
  "https://player.vimeo.com/external/494252666.hd.mp4?s=2f059a46a5d4d380f2d909c00b0c279c723f668f&profile_id=175",
];

// --- Dynamic Data Structure ---
const floorPlanData = {
  "TYPE - 1": {
    image: "/assets/201.webp",
    roomsCol1: [
      { id: "1", name: "Lobby +", dims: `(13'2" X 9'6")` },
      {
        id: "2",
        name: "Living / Dining +",
        dims: `(15'9" X 25'0")`,
      },
      {
        id: "3",
        name: "Kitchen / Utility",
        dims: `(10'10" X 17'0")`,
      },
      { id: "4", name: "Study", dims: `(6'0" X 8'0")` },
      { id: "5", name: "Lake Lounge", dims: `(16'5" X 8'10")` },
      { id: "6", name: "M Bed Room", dims: `(16'0" X 12'6")` },
      { id: "7", name: "M Dress", dims: `(6'1" X 6'10")` },
      { id: "8", name: "M Toilet", dims: `(8'10" X 5'2")` },
      { id: "9", name: "M Balcony", dims: `(7'5" X 7'5")` },
    ],
    roomsCol2: [
      { id: "10", name: "Bed Room 2", dims: `(12'4" X 12'6")` },

      { id: "11", name: "Dress 2", dims: `(6'5" X 5'9")` },
      { id: "12", name: "Toilet 2", dims: `(5'2" X 8'0")` },
      { id: "13", name: "Powder Room", dims: `(5'9" X 5'0")` },
      { id: "14", name: "Bed Room 3", dims: `(13'9"X 12'6")` },
      { id: "15", name: "Dress 3", dims: `(5'6" X 6'8")` },
      { id: "16", name: "Toilet 3", dims: `(5'2" X 8'0")` },
      { id: "17", name: "Balcony", dims: `(8'9" X 2'3")` },
    ],
    areas: {
      saleable: "2565 sq.ft.",
      rera: "1609 sq.ft.",
      balcony: "193 sq.ft.",
      total: "1802 sq.ft.",
    },
  },
  "TYPE - 2": {
    image: "/assets/202.webp",
    roomsCol1: [
      { id: "01", name: "Lobby +", dims: `(7'4" X 6'0")` },
      {
        id: "02",
        name: "Living / Dining +",
        dims: `(18'0" X 25'9")`,
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: `(12'10" X 19'2")`,
      },
      { id: "04", name: "Study", dims: `(7'10" X 6'0")` },
      { id: "05", name: "Lake Lounge", dims: `(8'2" X 19'9")` },
      { id: "06", name: "M Bed Room", dims: `(16'6" X 12'6")` },
      { id: "07", name: "M Dress", dims: `(5'2" X 6'10")` },
      { id: "08", name: "M Toilet", dims: `(8'0" X 5'2")` },
      { id: "09", name: "M Balcony", dims: `(8'0" X 7'6")` },
    ],
    roomsCol2: [
      { id: "10", name: "Bed Room 2", dims: `(17'6" X 12'6")` },

      { id: "11", name: "Dress 2", dims: `(3'11" X 6'10")` },
      { id: "12", name: "Toilet 2", dims: `(8'0" X 5'2")` },
      { id: "13", name: "Balcony", dims: `(8'0" X 7'6")` },
      { id: "14", name: "Powder Room", dims: `(5'6" X 6'0")` },
      { id: "15", name: "Bed Room 3", dims: `(12'6" X 12'6")` },
      { id: "16", name: "Dress 3", dims: `(5'6" X 4'4")` },
      { id: "17", name: "Toilet 3", dims: `(5'2" X 8'0")` },
    ],
    areas: {
      saleable: "2777 Sq. Ft.",
      rera: "1720 Sq. Ft.",
      balcony: "246 Sq. Ft.",
      total: "1967 Sq. Ft.",
    },
  },
  "TYPE - 3": {
    image: "/assets/203.webp",
    roomsCol1: [
      { id: "01", name: "Lobby +", dims: `(5'6" X 6'0")` },
      {
        id: "02",
        name: "Living / Dining +",
        dims: `(5'6" X 6'0")`,
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: `(13'2" X 12'6")`,
      },
      { id: "04", name: "Study", dims: `(7'10" X 6'0")` },
      { id: "05", name: "Lake Lounge", dims: `(9'9" X 19'9")` },
      { id: "06", name: "M Bed Room", dims: `(16'6" X 12'6")` },
      { id: "07", name: "M Dress", dims: `(4'5" X 6'10")` },
      { id: "08", name: "M Toilet", dims: `(8'0" X 5'2")` },
      { id: "09", name: "M Balcony", dims: `(8'4" X 7'6")` },
    ],
    roomsCol2: [
      { id: "10", name: "Bed Room 2", dims: `(12'6" X 12'6")` },

      { id: "11", name: "Dress 2", dims: `(5'6" X 4'4")` },
      { id: "12", name: "Toilet 2", dims: `(5'2" X 8'0")` },
      { id: "13", name: "Powder Room", dims: `(5'6" X 6'0")` },
      { id: "14", name: "Bed Room 3", dims: `(16'0" X 12'6")` },
      { id: "15", name: "Dress 3", dims: `(5'6" X 6'10")` },
      { id: "16", name: "Toilet 3", dims: `(8'0" X 5'2")` },
      { id: "17", name: "Balcony", dims: `(8'0" X 7'6")` },
    ],
    areas: {
      saleable: "2849 Sq. Ft.",
      rera: "1762 Sq. Ft.",
      balcony: "248 Sq. Ft.",
      total: "2010 Sq. Ft.",
    },
  },
  "TYPE - 4": {
    image: "/assets/204.webp",
    roomsCol1: [
      { id: "01", name: "Lobby +", dims: `(8'1" X 6'0")` },
      {
        id: "02",
        name: "Living / Dining +",
        dims: `(18'0" X 25'9")`,
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: `(20'5" X 12'6")`,
      },
      { id: "04", name: "Study", dims: `(8'0" X 6'0")` },
      { id: "05", name: "Lake Lounge", dims: `(8'2" X 19'9")` },
      { id: "06", name: "M Bed Room", dims: `(16'0" X 12'6")` },
      { id: "07", name: "M Dress", dims: `(5'8" X 6'9")` },
      { id: "08", name: "M Toilet", dims: `(5'2" X 8'0")` },
      { id: "09", name: "M Balcony", dims: `(12'0" X 4'0")` },
    ],
    roomsCol2: [
      { id: "10", name: "Bed Room 2", dims: `(12'6" X 12'6")` },

      { id: "11", name: "Dress 2", dims: `(5'6" X 4'4")` },
      { id: "12", name: "Toilet 2", dims: `(5'2" X 8'0")` },
      { id: "13", name: "Balcony", dims: `(12'0" X 4'0")` },
      { id: "14", name: "Powder Room", dims: `(5'6" X 6'0")` },
      { id: "15", name: "Bed Room 3", dims: `(16'0" X 12'6")` },
      { id: "16", name: "Dress 3", dims: `(5'8" X 6'9")` },
      { id: "17", name: "Toilet 3", dims: `(5'2" X 8'0")` },
    ],
    areas: {
      saleable: "2735 Sq. Ft.",
      rera: "1706 Sq. Ft.",
      balcony: "228 Sq. Ft.",
      total: "1935 Sq. Ft.",
    },
  },
};

type TabType = keyof typeof floorPlanData;

export const FloorPlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("TYPE - 1");
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeData = floorPlanData[activeTab];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --- Gallery State ---
  const [galleryTab, setGalleryTab] = useState<"photos" | "videos">("photos");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const photoSliderRef = useRef<Slider>(null);
  const videoSliderRef = useRef<Slider>(null);

  const photoSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: galleryTab === "photos",
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    afterChange: (current: number) => setPhotoIndex(current),
    arrows: false,
    draggable: true,
    swipe: true,
  };

  const videoSettings = {
    dots: false,
    infinite: galleryVideos.length > 1,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (current: number) => setVideoIndex(current),
    arrows: false,
    draggable: true,
    swipe: true,
  };

  return (
    <section className="relative pt-[0vh] lg:pt-[5vh] xl:pt-[10vh]  w-full flex flex-col justify-center px-[5vw]">
      {/* ─── Main Content (Layered over background) ─── */}
      <div className="relative z-20 pointer-events-auto">
        {/* Heading moved to right pane */}

        {/* Main Content Grid */}
        <div className="flex flex-col relative z-3 lg:flex-row xl:flex-row items-stretch justify-center w-full gap-8 lg:gap-[3vw] xl:gap-[3vw]">
          {/* LEFT COLUMN WRAPPER */}
          <div className="w-full lg:w-[65%] xl:w-[65%] flex flex-col gap-4 lg:gap-6 xl:gap-8">
            {/* LEFT PANE: Tabs and Image */}
            <div
              className="w-full flex flex-col xl:h-[700px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(199, 199, 199, 0.5) 29.43%, rgba(153, 153, 153, 0.2) 100%)",
              border: "3.67px solid",
              borderImageSource:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(235, 235, 235, 0.4) 11.32%, rgba(161, 160, 160, 0.5) 83.6%, rgba(255, 255, 255, 0.5) 100%)",
              borderImageSlice: 1,
            }}
          >
            {/* Tabs Row */}
            <div className="flex w-full border border-white/30 rounded-sm overflow-hidden mb-[3vh] relative z-30">
              {(Object.keys(floorPlanData) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-[1.5vh] text-[3.5vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] font-medium transition-colors border-r border-white/30 last:border-none
                    ${
                      activeTab === tab
                        ? "bg-transparent text-white"
                        : "bg-white/30 text-[#0C637E] cursor-pointer bg-white/10 hover:bg-white/20"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div 
              className="flex-1 flex justify-center items-center w-full relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[32vh] xl:min-h-[50vh] pb-0 px-0 cursor-pointer"
              onClick={() => setSelectedImage(activeData.image)}
            >
              <Image
                key={activeTab}
                src={activeData.image}
                alt={`Floor plan ${activeTab}`}
                width={800}
                height={800}
                className="object-contain w-full h-full drop-shadow-xl animate-[fadeIn_0.5s_ease-in-out] lg:scale-[1.15] xl:scale-[1.2] transition-transform hover:scale-[1.18] lg:hover:scale-[1.2] xl:hover:scale-[1.25]"
              />
            </div>

            </div>

            {/* Area Table (Outside and Below Left Pane) */}
            <div className="hidden lg:grid xl:grid grid-cols-2 w-full gap-y-[0.8vh] lg:gap-y-[0.4rem] xl:gap-y-[0.8vh] gap-x-[0.5vw] animate-[fadeIn_0.5s_ease-in-out]">
              {/* Table Rows */}
              {[
                { label: "SALEABLE AREA", value: activeData.areas.saleable },
                {
                  label: "EXCLUSIVE BALCONY",
                  value: activeData.areas.balcony,
                },
                { label: "RERA CARPET AREA", value: activeData.areas.rera },
                { label: "TOTAL AREA", value: activeData.areas.total },
              ].map((row, idx) => (
                <div key={idx} className="bg-white/40 flex items-center justify-between px-[1.5vw] py-[1.5vh]">
                  <span className="text-white font-semibold text-[1rem] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1vw] leading-tight">
                    {row.label}
                  </span>
                  <span className="text-white font-semibold text-[1rem] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1vw] whitespace-nowrap">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN WRAPPER */}
          <div className="w-full lg:w-[28%] xl:w-[35%] flex flex-col gap-[2vh] lg:gap-6 xl:gap-8">
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-bold text-white text-[2rem] lg:text-[1.8rem] xl:text-[2.4vw] text-left lg:text-left xl:text-left tracking-widest drop-shadow-lg uppercase mb-2 lg:mb-0 xl:mb-0"
            >
              Floor Plans
            </h2>
            {/* RIGHT PANE: Lists and Area Table */}
            <div className="w-full flex flex-row gap-[0vw]">
            {/* Column 1 (Rooms 1-10) */}
            <div className="w-1/2 flex flex-col gap-[1.5vh] lg:gap-[1.2rem] xl:gap-[2vh]">
              {activeData.roomsCol1.map((room, index) => {
                const isLast = index === activeData.roomsCol1.length - 1;
                return (
                  <div
                    key={room.id}
                    className={`text-white leading-tight animate-[fadeIn_0.5s_ease-in-out] ${isLast ? "hidden lg:block" : ""}`}
                  >
                    <span className="font-semibold text-[1rem] md:text-[1.8vw] lg:text-[1rem] xl:text-[1.1vw]">
                      {room.id}. {room.name}
                    </span>
                    <br />
                    <span className="text-[0.8rem] md:text-[1.5vw] lg:text-[0.7rem] xl:text-[0.9vw] text-white/80">
                      {room.dims}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Rooms 11+ and Area Box) */}
            <div className="flex flex-col justify-between">
              {/* Rooms List */}
              <div className="flex flex-col gap-[1.5vh] lg:gap-[1.2rem] xl:gap-[2vh]">
                {/* Mobile only: item 10 from Col 1 */}
                {activeData.roomsCol1.length > 0 && (
                  <div className="text-white leading-tight animate-[fadeIn_0.5s_ease-in-out] block lg:hidden">
                    <span className="font-semibold text-[1rem] md:text-[1.8vw] lg:text-[1rem] xl:text-[1.1vw]">
                      {activeData.roomsCol1[activeData.roomsCol1.length - 1].id}
                      .{" "}
                      {
                        activeData.roomsCol1[activeData.roomsCol1.length - 1]
                          .name
                      }
                    </span>
                    <br />
                    <span className="text-[0.8rem] md:text-[1.5vw] lg:text-[0.7rem] xl:text-[0.9vw] text-white/80">
                      {
                        activeData.roomsCol1[activeData.roomsCol1.length - 1]
                          .dims
                      }
                    </span>
                  </div>
                )}
                {activeData.roomsCol2.map((room) => (
                  <div
                    key={room.id}
                    className="text-white leading-tight animate-[fadeIn_0.5s_ease-in-out]"
                  >
                    <span className="font-semibold text-[1rem] md:text-[1.8vw] lg:text-[1rem] xl:text-[1.1vw]">
                      {room.id}. {room.name}
                    </span>
                    <br />
                    <span className="text-[0.8rem] md:text-[1.5vw] lg:text-[0.7rem] xl:text-[0.9vw] text-white/80">
                      {room.dims}
                    </span>
                  </div>
                ))}
              </div>

              {/* Area Table moved to left pane */}
            </div>
          </div>
          </div>

          {/* Area Table (Bottom Right) */}
          <div className="mt-[2vh] grid lg:hidden xl:hidden grid-cols-1 md:grid-cols-2 w-full gap-y-[0.8vh] gap-x-[0.5vw] animate-[fadeIn_0.5s_ease-in-out]">
            {/* Table Rows */}
            {[
              { label: "SALEABLE AREA", value: activeData.areas.saleable },
              {
                label: "EXCLUSIVE BALCONY",
                value: activeData.areas.balcony,
              },
              { label: "RERA CARPET AREA", value: activeData.areas.rera },
              { label: "TOTAL AREA", value: activeData.areas.total },
            ].map((row, idx) => (
              <div key={idx} className="bg-white/40 flex items-center justify-between px-[3vw] py-[1.5vh] md:px-[1.5vw]">
                <span className="text-white font-semibold text-[1rem] md:text-[1.5vw] lg:text-[0.8vw] leading-tight">
                  {row.label}
                </span>
                <span className="text-white font-semibold text-[1rem] md:text-[1.5vw] lg:text-[0.8vw] whitespace-nowrap">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PHOTOS | VIDEOS Section ─── */}
        <div className="relative z-20 mt-[18vh] lg:mt-[13vh] xl:mt-[35vh] w-full flex flex-col items-center  iss-section-ka-jo-top-mai-margin-hai-use-kaam-karo ">
          {/* Title */}
          <h2
            style={{ letterSpacing: "-0.3px" }}
            className="font-bold mb-8 master-plan-with-proper-spacing-update text-white text-[2rem] lg:mb-8 xl:mb-8 lg:text-[1.8rem] xl:text-[2.4vw] uppercase tracking-wider drop-shadow-lg text-center lg:text-left xl:text-left leading-none flex gap-4 select-none"
          >
            <span
              onClick={() => setGalleryTab("photos")}
              className={`cursor-pointer transition-all duration-300 ${
                galleryTab === "photos"
                  ? "opacity-100 scale-105"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              Photos
            </span>
            <span className="opacity-40">|</span>
            <span
              onClick={() => setGalleryTab("videos")}
              className={`cursor-pointer transition-all duration-300 ${
                galleryTab === "videos"
                  ? "opacity-100 scale-105"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              Videos
            </span>
          </h2>

          <div className="relative w-full max-w-[90vw] lg:max-w-[65vw] xl:max-w-[65vw] glass-frame-container aspect-[15/9] lg:aspect-[2/1] xl:aspect-[2/1] flex justify-center items-center rounded-[20px] lg:rounded-[30px] xl:rounded-[30px] border border-white/40 bg-white/5 backdrop-blur-md shadow-2xl pointer-events-auto group">
            {/* Gallery Wrapper (Using Slick Slider) */}
            <div className="absolute inset-0 overflow-hidden rounded-[20px] lg:rounded-[30px] xl:rounded-[30px] gallery-slick-container">
              {galleryTab === "photos" ? (
                <Slider
                  ref={photoSliderRef}
                  {...photoSettings}
                  className="h-full w-full"
                >
                  {galleryPhotos.map((photo, idx) => (
                    <div
                      key={`photo-${idx}`}
                      className="relative w-full h-full outline-none"
                    >
                      <Image
                        src={photo}
                        alt={`Gallery Photo ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <Slider
                  ref={videoSliderRef}
                  {...videoSettings}
                  className="h-full w-full"
                >
                  {galleryVideos.map((video, idx) => (
                    <div
                      key={`video-${idx}`}
                      className="relative w-full h-full bg-black/20 outline-none"
                    >
                      <video
                        src={video}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      {/* Video Overlay gradient for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  ))}
                </Slider>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                if (galleryTab === "photos") {
                  photoSliderRef.current?.slickPrev();
                } else {
                  videoSliderRef.current?.slickPrev();
                }
              }}
              className="absolute left-4 z-40 p-2 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={() => {
                if (galleryTab === "photos") {
                  photoSliderRef.current?.slickNext();
                } else {
                  videoSliderRef.current?.slickNext();
                }
              }}
              className="absolute right-4 z-40 p-2 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
            >
              <ChevronRight size={32} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              {(galleryTab === "photos" ? galleryPhotos : galleryVideos).map(
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (galleryTab === "photos") {
                        photoSliderRef.current?.slickGoTo(idx);
                      } else {
                        videoSliderRef.current?.slickGoTo(idx);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      (galleryTab === "photos" ? photoIndex : videoIndex) ===
                      idx
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ),
              )}
            </div>

            {/* Floating Top Right Image (Keep as is) */}
            <div className="absolute right-[3%] floating-top-image-need-to-go-left -top-[75%] lg:-right-[8vw] xl:-right-[8vw] lg:-top-[14vw] xl:-top-[14vw] w-[20vw] lg:w-[10vw] xl:w-[10vw] z-30 pointer-events-none drop-shadow-2xl">
              <Image
                src="/assets/middle image.webp"
                alt="Floating Decor"
                width={200}
                height={200}
                className="w-full h-auto object-contain scale-[1.8] badawala-need-hai rotate-240"
              />
            </div>
          </div>
        </div>

        {/* ─── LOCATION MAP Section ─── */}
        <div
          id="location"
          className="relative z-20 mt-20 lg:mt-[10vh] xl:mt-[28vh] w-full flex flex-col items-center same-here-also-margin-top-is-high"
        >
          {/* Title Group */}
          <div className="mb-8 lg:mb-[6vh] xl:mb-[6vh] text-center lg:text-left xl:text-left w-full lg:px-[5vw] xl:px-[5vw]">
            <h2
              style={{ letterSpacing: "-0.3px" }}
              className="font-bold text-white text-[2rem] lg:text-[1.8rem] xl:text-[2.4vw] lg:opacity-100 xl:opacity-100 mb-[4px] lg:mb-[-1vh] xl:mb-[-1vh]  tracking-widest drop-shadow-lg uppercase"
            >
              Location Map
            </h2>
            <p className="text-white/60 text-[1rem] md:text-[2vw] lg:text-[1rem] xl:text-[1rem] font-medium">
              (Not to scale)
            </p>
          </div>

          {/* Map Image */}
          <div className="relative hidden lg:block xl:block w-full lg:max-w-[59vw] xl:max-w-[54vw] lg:mt-[-13vw] xl:mt-[-8vw] lg:ml-[24vw] xl:ml-[24vw] aspect-auto">
            <Image
              src="/assets/location-map.webp"
              alt="Location Map"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
          {/* Map Image */}
          <div className="relative block lg:hidden xl:hidden w-full lg:max-w-[70vw] xl:max-w-[70vw] lg:mt-[-10vw] xl:mt-[-10vw] aspect-auto">
            <Image
              src="/assets/mobile-location-image.webp"
              alt="Location Map"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100]  cursor-zoom-out"
              />
              
              {/* Popup Content - Positioned Left Above */}
              <motion.div
                initial={{ x: -100, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -100, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-[5vw] z-[110] h-[92vh] w-[90vw] md:w-[75vw] max-w-[1400px] bg-white/10 backdrop-blur-md rounded-t-2xl border-x border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col p-2"
              >
                {/* Close Button - Internal */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-[120] text-white/50 hover:text-white transition-all duration-300 p-2 bg-black/20 rounded-full hover:bg-black/40"
                >
                  <X size={24} />
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Floor Plan Large View"
                    fill
                    className="object-contain scale-[1.2]"
                    priority
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounceSlow 4s ease-in-out infinite;
          }
          
          /* Slick Slider Custom Styles */
          .gallery-slick-container .slick-slider,
          .gallery-slick-container .slick-list,
          .gallery-slick-container .slick-track {
            height: 100%;
          }
          .gallery-slick-container .slick-slide > div {
            height: 100%;
          }
          .gallery-slick-container .slick-slide {
            cursor: grab;
          }
          .gallery-slick-container .slick-slide:active {
            cursor: grabbing;
          }
        `,
          }}
        />
      </div>
    </section>
  );
};
