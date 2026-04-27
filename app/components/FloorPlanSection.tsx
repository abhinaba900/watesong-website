"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

// --- Dynamic Data Structure ---
const floorPlanData = {
  "TYPE - 1": {
    image: "/assets/201.webp",
    roomsCol1: [
      { id: "1", name: "Lobby +", dims: " (13'8\" X 13'1\")" },
      {
        id: "2",
        name: "Living / Dining +",
        dims: " (22'4\" X 30'0\")",
      },
      {
        id: "3",
        name: "Kitchen / Utility",
        dims: " (10'10\" X 17'0\")",
      },
      { id: "4", name: "Study", dims: "(6'0\" X 8'0\")" },
      { id: "5", name: "Lake Lounge", dims: " (16'5\" X 8'10\")" },
      { id: "6", name: "M Bed Room", dims: " (16'0\" X 12'6\")" },
      { id: "7", name: "M Dress", dims: " (6'10\" X 6'10\")" },
      { id: "8", name: "M Toilet", dims: " (8'10\" X 5'2\")" },
      { id: "9", name: "M Balcony", dims: " (7'5\" X 7'9\")" },
      { id: "10", name: "Bed Room 2", dims: " (12'4\" X 12'6\")" },
    ],
    roomsCol2: [
      { id: "11", name: "Dress 2", dims: " (6'5\" X 5'9\")" },
      { id: "12", name: "Toilet 2", dims: " (5'2\" X 8'0\")" },
      { id: "13", name: "Powder Room", dims: " (5'9\" X 5'0\")" },
      { id: "14", name: "Bed Room 3", dims: " (13'9\" X 12'6\")" },
      { id: "15", name: "Dress 3", dims: " (5'6\" X 6'8\")" },
      { id: "16", name: "Toilet 3", dims: " (5'2\" X 8'0\")" },
      { id: "17", name: "Balcony", dims: " (8'9\" X 2'3\")" },
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
      { id: "01", name: "Lobby +", dims: " (13'8\" X 12'0\")" },
      {
        id: "02",
        name: "Living / Dining +",
        dims: " (18'0\" X 25'9\")",
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: " (12'10\" X 19'2\")",
      },
      { id: "04", name: "Study", dims: " (7'10\" X 6'0\")" },
      { id: "05", name: "Lake Lounge", dims: " (8'2\" X 19'9\")" },
      { id: "06", name: "M Bed Room", dims: " (16'6\" X 12'6\")" },
      { id: "07", name: "M Dress", dims: " (5'2\" X 6'10\")" },
      { id: "08", name: "M Toilet", dims: " (8'0\" X 5'2\")" },
      { id: "09", name: "M Balcony", dims: " (8'0\" X 7'6\")" },
      { id: "10", name: "Bed Room 2", dims: " (17'6\" X 12'6\")" },
    ],
    roomsCol2: [
      { id: "11", name: "Dress 2", dims: " (3'11\" X 6'10\")" },
      { id: "12", name: "Toilet 2", dims: " (8'0\" X 5'2\")" },
      { id: "13", name: "Balcony", dims: " (8'0\" X 7'6\")" },
      { id: "14", name: "Powder Room", dims: " (5'6\" X 6'0\")" },
      { id: "15", name: "Bed Room 3", dims: " (12'6\" X 12'6\")" },
      { id: "16", name: "Dress 3", dims: " (5'6\" X 4'4\")" },
      { id: "17", name: "Toilet 3", dims: " (5'2\" X 8'0\")" },
    ],
    areas: {
      saleable: "2300 sq.ft.",
      rera: "1450 sq.ft.",
      balcony: "150 sq.ft.",
      total: "1600 sq.ft.",
    },
  },
  "TYPE - 3": {
    image: "/assets/203.webp",
    roomsCol1: [
      { id: "01", name: "Lobby +", dims: " (12'10\" X 18'7\")" },
      {
        id: "02",
        name: "Living / Dining +",
        dims: " (19'2\" X 31'9\")",
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: " (13'2\" X 12'6\")",
      },
      { id: "04", name: "Study", dims: " (7'10\" X 6'0\")" },
      { id: "05", name: "Lake Lounge", dims: " (9'9\" X 19'9\")" },
      { id: "06", name: "M Bed Room", dims: " (16'6\" X 12'6\")" },
      { id: "07", name: "M Dress", dims: " (4'5\" X 6'10\")" },
      { id: "08", name: "M Toilet", dims: " (8'0\" X 5'2\")" },
      { id: "09", name: "M Balcony", dims: " (8'4\" X 7'6\")" },
      { id: "10", name: "Bed Room 2", dims: " (12'6\" X 12'6\")" },
    ],
    roomsCol2: [
      { id: "11", name: "Dress 2", dims: " (5'6\" X 4'4\")" },
      { id: "12", name: "Toilet 2", dims: " (5'2\" X 8'0\")" },
      { id: "13", name: "Powder Room", dims: " (5'6\" X 6'0\")" },
      { id: "14", name: "Bed Room 3", dims: " (16'0\" X 12'6\")" },
      { id: "15", name: "Dress 3", dims: " (5'6\" X 6'10\")" },
      { id: "16", name: "Toilet 3", dims: " (8'0\" X 5'2\")" },
      { id: "17", name: "Balcony", dims: " (8'0\" X 7'6\")" },
    ],
    areas: {
      saleable: "1850 sq.ft.",
      rera: "1200 sq.ft.",
      balcony: "120 sq.ft.",
      total: "1320 sq.ft.",
    },
  },
  "TYPE - 4": {
    image: "/assets/204.webp",
    roomsCol1: [
      { id: "01", name: "Lobby +", dims: "(17'1\" X 12'0\")" },
      {
        id: "02",
        name: "Living / Dining +",
        dims: "(33'8\" X 37'9\")",
      },
      {
        id: "03",
        name: "Kitchen / Utility",
        dims: " (11'5\" X 12'6\")",
      },
      { id: "04", name: "Study", dims: " (8'0\" X 6'0\")" },
      { id: "05", name: "Lake Lounge", dims: " (8'2\" X 19'9\")" },
      { id: "06", name: "M Bed Room", dims: " (16'0\" X 12'6\")" },
      { id: "07", name: "M Dress", dims: " (5'8\" X 6'9\")" },
      { id: "08", name: "M Toilet", dims: " (5'2\" X 8'0\")" },
      { id: "09", name: "M Balcony", dims: " (12'0\" X 4'0\")" },
      { id: "10", name: "Bed Room 2", dims: " (12'6\" X 12'6\")" },
    ],
    roomsCol2: [
      { id: "11", name: "Dress 2", dims: " (5'6\" X 4'4\")" },
      { id: "12", name: "Toilet 2", dims: " (5'2\" X 8'0\")" },
      { id: "13", name: "Balcony", dims: " (12'0\" X 4'0\")" },
      { id: "14", name: "Powder Room", dims: " (5'6\" X 6'0\")" },
      { id: "15", name: "Bed Room 3", dims: " (16'0\" X 12'6\")" },
      { id: "16", name: "Dress 3", dims: " (5'8\" X 6'9\")" },
      { id: "17", name: "Toilet 3", dims: " (5'2\" X 8'0\")" },
    ],
    areas: {
      saleable: "1400 sq.ft.",
      rera: "950 sq.ft.",
      balcony: "100 sq.ft.",
      total: "1050 sq.ft.",
    },
  },
};

type TabType = keyof typeof floorPlanData;

export const FloorPlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("TYPE - 1");
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

  const activeData = floorPlanData[activeTab];

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
            a = Math.min(255, dataOffset * 25);
          } else if (dataOffset < -0.5) {
            // Wave Trough (Soft Shadow)
            r = 10;
            g = 25;
            b = 40;
            a = Math.min(255, -dataOffset * 8); // Kept the light shadow logic!
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
      className="relative pt-[10vh]  w-full flex flex-col justify-center px-[5vw] overflow-hidden"
    >
      {/* ─── The Embedded Ripple Canvas ─── */}
      {isMounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-2 pointer-events-none"
        />
      )}

      {/* ─── Main Content (Layered over canvas but interactive) ─── */}
      <div className="relative z-20 pointer-events-auto">
        {/* Heading */}
        <h2 className="font-overwave text-white text-[7vw] lg:text-[2.2vw] text-center lg:text-left mb-[3vh] lg:mb-[4vh] tracking-widest drop-shadow-lg uppercase">
          Floor Plans
        </h2>

        {/* Main Content Grid */}
        <div className="flex flex-col relative z-3 lg:flex-row items-stretch justify-center w-full gap-[4vw] lg:gap-[3vw]">
          {/* LEFT PANE: Tabs and Image */}
          <div
            className="w-full lg:w-[45%] h-full flex flex-col"
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
            <div className="flex w-full border border-white/30 rounded-sm overflow-hidden mb-[3vh]">
              {(Object.keys(floorPlanData) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-[1.5vh] text-[3.5vw] md:text-[2vw] lg:text-[1vw] font-medium transition-colors border-r border-white/30 last:border-none
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

            {/* Floor Plan Image */}
            <div className="flex justify-center items-center w-full relative h-[40vh] md:h-[50vh] lg:h-[60vh] pb-[2vh] px-[2vw]">
              <Image
                key={activeTab}
                src={activeData.image}
                alt={`Floor plan ${activeTab}`}
                width={800}
                height={800}
                className="object-contain w-full h-full  drop-shadow-xl animate-[fadeIn_0.5s_ease-in-out]"
              />
            </div>
          </div>

          {/* RIGHT PANE: Lists and Area Table */}
          <div className="w-full lg:w-[55%] flex flex-row gap-[3vw]">
            {/* Column 1 (Rooms 1-10) */}
            <div className="w-1/2 flex flex-col gap-[1.5vh] lg:gap-[2vh]">
              {activeData.roomsCol1.map((room) => (
                <div
                  key={room.id}
                  className="text-white leading-tight animate-[fadeIn_0.5s_ease-in-out]"
                >
                  <span className="font-semibold text-[3vw] md:text-[1.8vw] lg:text-[1.1vw]">
                    {room.id}. {room.name}
                  </span>
                  <br />
                  <span className="text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] text-white/80">
                    {room.dims}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 (Rooms 11+ and Area Box) */}
            <div className="w-full flex flex-col justify-between">
              {/* Rooms List */}
              <div className="flex flex-col gap-[1.5vh] lg:gap-[2vh]">
                {activeData.roomsCol2.map((room) => (
                  <div
                    key={room.id}
                    className="text-white leading-tight animate-[fadeIn_0.5s_ease-in-out]"
                  >
                    <span className="font-semibold text-[3vw] md:text-[1.8vw] lg:text-[1.1vw]">
                      {room.id}. {room.name}
                    </span>
                    <br />
                    <span className="text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] text-white/80">
                      {room.dims}
                    </span>
                  </div>
                ))}
              </div>

              {/* Area Table (Bottom Right) */}
              <div className="mt-[2vh] grid grid-cols-2 w-full gap-y-[0.8vh] gap-x-[0.5vw] animate-[fadeIn_0.5s_ease-in-out]">
                {/* Table Rows */}
                {[
                  { label: "SALEABLE AREA", value: activeData.areas.saleable },
                  { label: "RERA CARPET AREA", value: activeData.areas.rera },
                  {
                    label: "EXCLUSIVE BALCONY",
                    value: activeData.areas.balcony,
                  },
                  { label: "TOTAL AREA", value: activeData.areas.total },
                ].map((row, idx) => (
                  <React.Fragment key={idx}>
                    <div className="bg-white/40 flex items-center justify-center p-[1vh]">
                      <span className="text-black font-semibold text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] whitespace-nowrap">
                        {row.label}
                      </span>
                    </div>
                    <div className="bg-white/40 flex items-center justify-center p-[1vh]">
                      <span className="text-black font-bold text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] whitespace-nowrap">
                        {row.value}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── PHOTOS | VIDEOS Section ─── */}
        <div className="relative z-20 mt-[15vh] w-full flex flex-col items-center ">
          {/* Title */}
          <h2 className="font-overwave text-white text-[7vw] lg:text-[2.2vw] text-center mb-[6vh] lg:mb-[8vh] tracking-widest drop-shadow-lg uppercase">
            Photos | Videos
          </h2>

          {/* Glass Frame Container */}
          <div className="relative w-full max-w-[90vw] lg:max-w-[55vw] aspect-[16/9] lg:aspect-[2/1] flex justify-center items-center rounded-[20px] lg:rounded-[30px] border border-white/40 bg-white/5 backdrop-blur-md shadow-2xl">
            {/* Floating Top Right Image */}
            <div className="absolute -right-[8%] -top-[20%] lg:-right-[4vw] lg:-top-[7vw] w-[20vw] lg:w-[10vw] z-30 pointer-events-none drop-shadow-2xl">
              <Image
                src="/assets/middle image.webp"
                alt="Floating Decor"
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ─── LOCATION MAP Section ─── */}
        <div className="relative z-20 mt-[15vh] w-full flex flex-col items-center">
          {/* Title Group */}
          <div className="mb-[6vh] text-center lg:text-left w-full lg:px-[5vw]">
            <h2 className="font-overwave text-white text-[7vw] lg:text-[2.2vw] mb-[2vh] tracking-widest drop-shadow-lg uppercase">
              Location Map
            </h2>
            <p className="text-white/60 text-[4vw] md:text-[2vw] lg:text-[1.2vw] font-medium">
              (Not to scale)
            </p>
          </div>

          {/* Map Image */}
          <div className="relative w-full lg:max-w-[70vw] lg:mt-[-10vw] aspect-auto">
            <Image
              src="/assets/location-map.webp"
              alt="Location Map"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

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
        `,
          }}
        />
      </div>
    </section>
  );
};
