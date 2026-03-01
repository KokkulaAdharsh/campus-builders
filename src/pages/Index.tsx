import LynxNavbar from "@/components/LynxNavbar";
import HeroSection from "@/components/HeroSection";
import TickerStrip from "@/components/TickerStrip";
import ProblemSection from "@/components/ProblemSection";
import VisionStatement from "@/components/VisionStatement";
import ProgramsSection from "@/components/ProgramsSection";
import LearningModel from "@/components/LearningModel";
import WhyLynx from "@/components/WhyLynx";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import LynxFooter from "@/components/LynxFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LynxNavbar />
      <HeroSection />
      <TickerStrip />
      <ProblemSection />
      <VisionStatement />
      <ProgramsSection />
      <LearningModel />
      <WhyLynx />
      <TeamSection />
      <RoadmapSection />
      <CTASection />
      <LynxFooter />
    </div>
  );
};

export default Index;
