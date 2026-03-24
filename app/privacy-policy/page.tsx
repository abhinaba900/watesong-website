import React from 'react';
import Link from 'next/link';
import { WaterRipple } from "@/components/WaterRipple";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: 'Privacy Policy | Privae',
  description: 'Privacy Policy for Privae | Lakefront Residences',
};

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full min-h-screen bg-[#113239]">
      <WaterRipple  
        backgroundImage="/assets/bg-in-feature-section.webp" 
        className="min-h-screen"
      >
        <main className="relative z-10 w-full flex flex-col items-center justify-start pt-[20vh] pb-[10vh] px-[5vw] lg:px-[15vw]">
          {/* Dark overlay for better readability over the rippling water */}
          <div className="absolute inset-0 bg-[#113239]/80 z-0 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-4xl flex flex-col items-start justify-start text-white">
            <Link 
              href="/" 
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm"
            >
              &larr; Back to Main Site
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">Privacy Policy</h1>
            
            <div className="flex flex-col gap-6 text-white/90 leading-relaxed font-light text-base md:text-lg mb-[10vh]">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">1. Information We Collect</h2>
                <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">2. How We Use Collected Information</h2>
                <p>Privae Lakefront Residences may collect and use Users personal information for the following purposes: To improve customer service, to personalize user experience, to improve our Site, or to send periodic emails regarding property updates and inquiries.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">3. How We Protect Your Information</h2>
                <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">4. Sharing Your Personal Information</h2>
                <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">5. Contacting Us</h2>
                <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us through the Home page contact section.</p>
              </section>
            </div>
          </div>
        </main>
        
        {/* Footer sits inside the WaterRipple so it ripples too! */}
        <div className="relative z-10 w-full bg-[#113239]/90">
          <Footer />
        </div>
      </WaterRipple>
    </div>
  );
}
