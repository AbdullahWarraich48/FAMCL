import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import { TECHNOLOGY_DIGITAL_HERO_DATA } from "@/data/technologyDigital/heroData";
import { TECHNOLOGY_DIGITAL_SERVICE_SCOPE_DATA } from "@/data/technologyDigital/serviceScopeData";
import { TECHNOLOGY_DIGITAL_WHY_MATTERS_DATA } from "@/data/technologyDigital/whyMattersData";
import { TECHNOLOGY_DIGITAL_FACTS_DATA } from "@/data/technologyDigital/factsData";
import { TECHNOLOGY_DIGITAL_SOLUTION_DATA } from "@/data/technologyDigital/solutionData";

export const metadata = {
  title: "Technology & Digital | FAM Chartered Accountants",
  description:
    "Strategic financial support for tech startups and scale-ups, including R&D incentives, funding rounds, and employee share schemes.",
};

export default function TechnologyDigitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={TECHNOLOGY_DIGITAL_HERO_DATA} />
      <ServiceScope data={TECHNOLOGY_DIGITAL_SERVICE_SCOPE_DATA} />
      <WhyMatters data={TECHNOLOGY_DIGITAL_WHY_MATTERS_DATA} />
  
      <Facts data={TECHNOLOGY_DIGITAL_FACTS_DATA} />
      <Solution data={TECHNOLOGY_DIGITAL_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
