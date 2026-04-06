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
import { MANUFACTURING_ENGINEERING_HERO_DATA } from "@/data/manufacturingEngineering/heroData";
import { MANUFACTURING_ENGINEERING_SERVICE_SCOPE_DATA } from "@/data/manufacturingEngineering/serviceScopeData";
import { MANUFACTURING_ENGINEERING_WHY_MATTERS_DATA } from "@/data/manufacturingEngineering/whyMattersData";
import { MANUFACTURING_ENGINEERING_FACTS_DATA } from "@/data/manufacturingEngineering/factsData";
import { MANUFACTURING_ENGINEERING_SOLUTION_DATA } from "@/data/manufacturingEngineering/solutionData";
import { MANUFACTURING_ENGINEERING_FAQ_DATA } from "@/data/manufacturingEngineering/faqData";

export const metadata = {
  title: "Manufacturing & Engineering | FAM Chartered Accountants",
  description:
    "Expert financial management and advisory services for manufacturing and engineering businesses—supporting cost control, production efficiency, and tax relief claims.",
};

export default function ManufacturingEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={MANUFACTURING_ENGINEERING_HERO_DATA} />
      <ServiceScope data={MANUFACTURING_ENGINEERING_SERVICE_SCOPE_DATA} />
      <WhyMatters data={MANUFACTURING_ENGINEERING_WHY_MATTERS_DATA} />
  
      <Facts data={MANUFACTURING_ENGINEERING_FACTS_DATA} />
      <Solution data={MANUFACTURING_ENGINEERING_SOLUTION_DATA} />
      <Faq data={MANUFACTURING_ENGINEERING_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
