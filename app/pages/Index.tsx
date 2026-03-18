import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { MasterPlanSection } from "@/components/MasterPlanSection";
import { FloorPlanSection } from "@/components/FloorPlanSection";
import { CompanySection } from "@/components/CompanySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      
      <div className="relative overflow-hidden">
        <img
          src="/assets/bg-in-feature-section.webp"
          alt="Floor plan background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative z-10">
          <MasterPlanSection />
          <FloorPlanSection />
          <CompanySection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
