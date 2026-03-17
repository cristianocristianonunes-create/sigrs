import { LandingNav } from "@/components/landing/LandingNav";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProblem } from "@/components/landing/LandingProblem";
import { LandingSolution } from "@/components/landing/LandingSolution";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import { LandingBenefits } from "@/components/landing/LandingBenefits";
import { LandingNumbers } from "@/components/landing/LandingNumbers";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingImplementation } from "@/components/landing/LandingImplementation";
import { LandingResults90 } from "@/components/landing/LandingResults90";
import { LandingTechnology } from "@/components/landing/LandingTechnology";
import { LandingTraining } from "@/components/landing/LandingTraining";
import { LandingInfrastructure } from "@/components/landing/LandingInfrastructure";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <LandingHero />
      <LandingProblem />
      <LandingSolution />
      <LandingHowItWorks />
      <LandingBenefits />
      <LandingNumbers />
      <LandingComparison />
      <LandingImplementation />
      <LandingResults90 />
      <LandingTechnology />
      <LandingTraining />
      <LandingInfrastructure />
      <LandingFAQ />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
