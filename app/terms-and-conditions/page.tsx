import React from 'react';
import Link from 'next/link';
import { WaterRipple } from "@/components/WaterRipple";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: 'Terms & Conditions | Privae',
  description: 'Terms and Conditions for Privae | Lakefront Residences',
};

export default function TermsAndConditions() {
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">Terms & Conditions</h1>
            
            <div className="flex flex-col gap-6 text-white/90 leading-relaxed font-light text-base md:text-lg mb-[10vh]">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">1. Introduction</h2>
                <p>Welcome to Privae Lakefront Residences. By accessing our website, you agree to these Terms and Conditions. Please read them carefully.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">2. Use of Website</h2>
                <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">3. Intellectual Property</h2>
                <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">4. Modifications</h2>
                <p>We benchmark the right to revise and amend these terms and conditions from time to time. Your continued use of the website following any changes signifies your acceptance of those changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">5. Governing Law</h2>
                <p>Your use of this website and any dispute arising out of such use of the website is subject to the local and national laws governing the estate properties.</p>
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
