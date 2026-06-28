import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { IncomePathsSection } from "@/components/sections/IncomePathsSection";
import { WhyMonetriSkill } from "@/components/sections/WhyMonetriSkill";
import { LearningHub } from "@/components/sections/LearningHub";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CalculatorSection />
        <SocialProof />
        <IncomePathsSection />
        <WhyMonetriSkill />
        <LearningHub />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
