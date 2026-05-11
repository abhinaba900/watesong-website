"use client";

import React, { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import { Navbar } from "./Navbar";
import { DownloadBrochureButton } from "./DownloadBrochureButton";
import { EnquiryNowButton } from "./EnquiryNowButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";
import { EnquiryModal } from "./EnquiryModal";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <SmoothScroll>
        {children}
      </SmoothScroll>
      <WhatsAppButton />
      <CallButton />
      <DownloadBrochureButton />
      <EnquiryNowButton onClick={() => setIsEnquiryModalOpen(true)} />
      
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </>
  );
};
