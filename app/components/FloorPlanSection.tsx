"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- Dynamic Data Structure ---
const floorPlanData = {
  "TYPE - 1": {
    image: "/assets/201.webp",
    roomsCol1: [
      { id: "1", name: "Lobby +", dims: "4206 X 3992 (13'8\" X 13'1\")" },
      {
        id: "2",
        name: "Living / Dining +",
        dims: "6827 X 9144 (22'4\" X 30'0\")",
      },
      {
        id: "3",
        name: "Kitchen / Utility",
        dims: "3078 X 5181 (10'10\" X 17'0\")",
      },
      { id: "4", name: "Study", dims: "1828 X 2438 (6'0\" X 8'0\")" },
      { id: "5", name: "Lake Lounge", dims: "5029 X 2468 (16'5\" X 8'10\")" },
      { id: "6", name: "M Bed Room", dims: "4876 X 3840 (16'0\" X 12'6\")" },
      { id: "7", name: "M Dress", dims: "1859 X 1859 (6'10\" X 6'10\")" },
      { id: "8", name: "M Toilet", dims: "2468 X 1584 (8'10\" X 5'2\")" },
      { id: "9", name: "M Balcony", dims: "2286 X 2407 (7'5\" X 7'9\")" },
      { id: "10", name: "Bed Room 2", dims: "3779 X 3840 (12'4\" X 12'6\")" },
    ],
    roomsCol2: [
      { id: "11", name: "Dress 2", dims: "1706 X 1798 (6'5\" X 5'9\")" },
      { id: "12", name: "Toilet 2", dims: "1584 X 2438 (5'2\" X 8'0\")" },
      { id: "13", name: "Powder Room", dims: "1798 X 1524 (5'9\" X 5'0\")" },
      { id: "14", name: "Bed Room 3", dims: "4236 X 3840 (13'9\" X 12'6\")" },
      { id: "15", name: "Dress 3", dims: "1706 X 2072 (5'6\" X 6'8\")" },
      { id: "16", name: "Toilet 3", dims: "1584 X 2438 (5'2\" X 8'0\")" },
      { id: "17", name: "Balcony", dims: "2712 X 701 (8'9\" X 2'3\")" },
    ],
    areas: {
      saleable: "2565 sq.ft.",
      rera: "1609 sq.ft.",
      balcony: "193 sq.ft.",
      total: "1802 sq.ft.",
    },
  },
  "TYPE - 2": {
    image: "/assets/202.webp", // Replace with Type 2 Image URL
    roomsCol1: [
      { id: "1", name: "Lobby", dims: "4000 X 3800 (13'1\" X 12'5\")" },
      { id: "2", name: "Living Area", dims: "6500 X 9000 (21'3\" X 29'6\")" },
      { id: "3", name: "Kitchen", dims: "3000 X 5000 (9'10\" X 16'4\")" },
      { id: "4", name: "Guest Room", dims: "1800 X 2400 (5'10\" X 7'10\")" },
      { id: "5", name: "Lounge", dims: "5000 X 2400 (16'4\" X 7'10\")" },
      { id: "6", name: "Master Bed", dims: "4800 X 3800 (15'8\" X 12'5\")" },
      {
        id: "7",
        name: "Walk-in Closet",
        dims: "1800 X 1800 (5'10\" X 5'10\")",
      },
      { id: "8", name: "Main Bath", dims: "2400 X 1500 (7'10\" X 4'11\")" },
    ],
    roomsCol2: [
      { id: "9", name: "Balcony 1", dims: "2200 X 2400 (7'2\" X 7'10\")" },
      { id: "10", name: "Bed Room 2", dims: "3700 X 3800 (12'1\" X 12'5\")" },
      { id: "11", name: "Bath 2", dims: "1500 X 2400 (4'11\" X 7'10\")" },
      { id: "12", name: "Balcony 2", dims: "2700 X 700 (8'10\" X 2'3\")" },
    ],
    areas: {
      saleable: "2300 sq.ft.",
      rera: "1450 sq.ft.",
      balcony: "150 sq.ft.",
      total: "1600 sq.ft.",
    },
  },
  "TYPE - 3": {
    image: "/assets/203.webp", // Replace with Type 3 Image URL
    roomsCol1: [
      { id: "1", name: "Foyer", dims: "3500 X 3500 (11'5\" X 11'5\")" },
      {
        id: "2",
        name: "Living / Dining",
        dims: "6000 X 8500 (19'8\" X 27'10\")",
      },
      { id: "3", name: "Kitchen", dims: "2800 X 4800 (9'2\" X 15'8\")" },
    ],
    roomsCol2: [
      {
        id: "4",
        name: "Master Bedroom",
        dims: "4500 X 3600 (14'9\" X 11'9\")",
      },
      { id: "5", name: "Master Bath", dims: "2200 X 1500 (7'2\" X 4'11\")" },
      { id: "6", name: "Balcony", dims: "2000 X 2000 (6'6\" X 6'6\")" },
    ],
    areas: {
      saleable: "1850 sq.ft.",
      rera: "1200 sq.ft.",
      balcony: "120 sq.ft.",
      total: "1320 sq.ft.",
    },
  },
  "TYPE - 4": {
    image: "/assets/204.webp", // Replace with Type 4 Image URL
    roomsCol1: [
      { id: "1", name: "Entrance", dims: "3000 X 3000 (9'10\" X 9'10\")" },
      { id: "2", name: "Living Space", dims: "5500 X 7500 (18'0\" X 24'7\")" },
    ],
    roomsCol2: [
      { id: "3", name: "Bedroom", dims: "4000 X 3500 (13'1\" X 11'5\")" },
      { id: "4", name: "Bathroom", dims: "2000 X 1400 (6'6\" X 4'7\")" },
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

  const activeData = floorPlanData[activeTab];

  return (
    <section className="relative pt-[10vh] pb-[10vh] w-full flex flex-col justify-center px-[5vw] ">
      {/* Heading */}
      <h2 className="relative text-white font-extrabold uppercase text-left mb-[3vh] lg:mb-[4vh] text-[8vw] leading-[1.2]  md:text-[4.5vw]  lg:text-[3.5vw] lg:leading-[1.6] lg:tracking-[1px]  xl:text-[2.8vw] xl:leading-[1.6]">
        FLOOR PLANS
      </h2>

      {/* Main Content Grid: REMOVED h-[75vh] so items-center works properly */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-[4vw] lg:gap-[3vw]">
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
              // Reduced drop-shadow-2xl to drop-shadow-xl to save GPU memory
              className="object-contain w-full h-full drop-shadow-xl animate-[fadeIn_0.5s_ease-in-out]"
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
                { label: "EXCLUSIVE BALCONY", value: activeData.areas.balcony },
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
};
