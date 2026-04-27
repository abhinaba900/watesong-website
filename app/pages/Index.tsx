import dynamic from "next/dynamic";
import Image from "next/image";

import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import FloatingWaterImages from "@/components/FloatingWaterImages";
// Import our new global overlay

const MasterPlanSection = dynamic(
  () =>
    import("@/components/MasterPlanSection").then(
      (mod) => mod.MasterPlanSection,
    ),
  { ssr: true },
);
const FloorPlanSection = dynamic(
  () =>
    import("@/components/FloorPlanSection").then((mod) => mod.FloorPlanSection),
  { ssr: true },
);
const CompanySection = dynamic(
  () => import("@/components/CompanySection").then((mod) => mod.CompanySection),
  { ssr: true },
);
const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((mod) => mod.ContactSection),
  { ssr: true },
);
const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: true },
);


const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      {/* 🛑 INVOCATION: Drops the screen-glass water effect over the whole page */}

      {/* Put your Background Image back normally! */}
      <div className="relative z-10 flex flex-col w-full overflow-x-hidden">
        <FloatingWaterImages
          isFixed={false}
          backgroundImage="/assets/bg-in-feature-section.webp"
          className="z-0"
        />

        <section id="hero">
          <HeroSection />
        </section>

        <section id="amenities">
          <FeatureSection />
        </section>
        
        <section id="masterplan" className="relative z-10">
          <MasterPlanSection />
        </section>

        <section id="floor-plans" className="relative z-10">
          <FloorPlanSection />
        </section>

        <section id="about" className="relative z-10">
          <CompanySection />
        </section>


        <section id="contact" className="relative z-10 overflow-x-hidden">
          <ContactSection />
          <Footer />
        </section>

        <div className="relative z-10"></div>
      </div>
    </main>
  );
};

export default Index;
