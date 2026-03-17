import { LandingNav } from "@/components/landing/LandingNav";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProblem } from "@/components/landing/LandingProblem";
import { LandingCustoDeNaoAgir } from "@/components/landing/LandingCustoDeNaoAgir";
import { LandingSolution } from "@/components/landing/LandingSolution";
import { LandingDiferencial } from "@/components/landing/LandingDiferencial";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import { LandingBenefits } from "@/components/landing/LandingBenefits";
import { LandingNumbers } from "@/components/landing/LandingNumbers";
import { LandingPayback } from "@/components/landing/LandingPayback";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingImplementation } from "@/components/landing/LandingImplementation";
import { LandingFinanciamento } from "@/components/landing/LandingFinanciamento";
import { LandingContratacao } from "@/components/landing/LandingContratacao";
import { LandingPortes } from "@/components/landing/LandingPortes";
import { LandingResults90 } from "@/components/landing/LandingResults90";
import { LandingTechnology } from "@/components/landing/LandingTechnology";
import { LandingTraining } from "@/components/landing/LandingTraining";
import { LandingInfrastructure } from "@/components/landing/LandingInfrastructure";
import { LandingCertificacoes } from "@/components/landing/LandingCertificacoes";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingContact } from "@/components/landing/LandingContact";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <LandingHero />
      <LandingProblem />
      <LandingCustoDeNaoAgir />
      <LandingSolution />
      <LandingDiferencial />
      <LandingHowItWorks />
      <LandingBenefits />
      <LandingNumbers />
      <LandingPayback />
      <LandingComparison />
      <LandingImplementation />
      <LandingFinanciamento />
      <LandingContratacao />
      <LandingPortes />
      <LandingResults90 />
      <LandingTechnology />
      <LandingTraining />
      <LandingInfrastructure />
      <LandingCertificacoes />
      <LandingFAQ />
      <LandingCTA />
      <LandingContact />
      <LandingFooter />
    </div>
  );
}
