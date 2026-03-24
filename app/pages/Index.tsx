import dynamic from "next/dynamic";
import Image from "next/image";

// 1. Keep Above-the-Fold components as static imports so they load instantly
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { WaterRipple } from "@/components/WaterRipple";

// 2. Dynamically import Below-the-Fold components.
// This forces the browser to wait to download/render them until the user starts scrolling near them.
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
    // Changed to overflow-x-hidden.
    // This prevents horizontal scrolling but stops Safari from clipping the vertical scroll!
    <main className="">
      <HeroSection />
      <FeatureSection />

      {/* Removed "overflow-hidden" here to stop layout thrashing on mobile */}

      <div className="relative z-10 flex flex-col w-full">
        <Image
          src="/assets/bg-in-feature-section.webp"
          alt="bg-in-feature-section"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <WaterRipple backgroundImage="" className="relative w-full">
          <MasterPlanSection />
        </WaterRipple>

        <WaterRipple
          backgroundImage=""
          className="relative w-full"
        >
          <FloorPlanSection />
        </WaterRipple>
        <WaterRipple
          backgroundImage=""
          className="relative w-full"
        >
          <CompanySection />
        </WaterRipple>
        <WaterRipple
          backgroundImage=""
          className="relative w-full"
        >
          <ContactSection />
        </WaterRipple>

        <WaterRipple
          backgroundImage=""
          className="relative w-full"
        >
          <Footer />
        </WaterRipple>
      </div>
    </main>
  );
};

export default Index;
