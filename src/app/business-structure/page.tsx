import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import { BUSINESS_STRUCTURE_HERO_DATA } from "@/data/businessStructure/heroData";
import { BUSINESS_STRUCTURE_SERVICE_SCOPE_DATA } from "@/data/businessStructure/serviceScopeData";
import { BUSINESS_STRUCTURE_WHY_MATTERS_DATA } from "@/data/businessStructure/whyMattersData";
import { BUSINESS_STRUCTURE_FACTS_DATA } from "@/data/businessStructure/factsData";
import { BUSINESS_STRUCTURE_SOLUTION_DATA } from "@/data/businessStructure/solutionData";

export const metadata = {
  title: "Business Structuring | FAM Chartered Accountants",
  description:
    "Specialist advice to choose and maintain the right business structure for tax efficiency, risk management, and long-term growth.",
};

export default function BusinessStructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={BUSINESS_STRUCTURE_HERO_DATA} />
      <ServiceScope data={BUSINESS_STRUCTURE_SERVICE_SCOPE_DATA} />
      <WhyMatters data={BUSINESS_STRUCTURE_WHY_MATTERS_DATA} />

      <Facts data={BUSINESS_STRUCTURE_FACTS_DATA} />
      <Solution data={BUSINESS_STRUCTURE_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
