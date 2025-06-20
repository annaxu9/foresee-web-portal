
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { GuiOverview } from "@/components/GuiOverview";
import { AnalysisModes } from "@/components/AnalysisModes";
import { HardwareLibrary } from "@/components/HardwareLibrary";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <GuiOverview />
      <AnalysisModes />
      <HardwareLibrary />
      <UseCases />
      <Footer />
    </div>
  );
};

export default Index;
