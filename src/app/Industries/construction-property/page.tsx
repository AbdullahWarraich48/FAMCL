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
import { CONSTRUCTION_PROPERTY_HERO_DATA } from "@/data/constructionProperty/heroData";
import { CONSTRUCTION_PROPERTY_SERVICE_SCOPE_DATA } from "@/data/constructionProperty/serviceScopeData";
import { CONSTRUCTION_PROPERTY_WHY_MATTERS_DATA } from "@/data/constructionProperty/whyMattersData";
import { CONSTRUCTION_PROPERTY_FACTS_DATA } from "@/data/constructionProperty/factsData";
import { CONSTRUCTION_PROPERTY_SOLUTION_DATA } from "@/data/constructionProperty/solutionData";
import { CONSTRUCTION_PROPERTY_FAQ_DATA } from "@/data/constructionProperty/faqData";

export const metadata = {
  title: "Construction & Property | FAM Chartered Accountants",
  description:
    "Specialist accounting and tax advice for construction and property businesses, including CIS support and project profitability.",
};

export default function ConstructionPropertyPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CONSTRUCTION_PROPERTY_HERO_DATA} />
      <ServiceScope data={CONSTRUCTION_PROPERTY_SERVICE_SCOPE_DATA} />
      <WhyMatters data={CONSTRUCTION_PROPERTY_WHY_MATTERS_DATA} />
  
      <Facts data={CONSTRUCTION_PROPERTY_FACTS_DATA} />
      <Solution data={CONSTRUCTION_PROPERTY_SOLUTION_DATA} />
      <Faq data={CONSTRUCTION_PROPERTY_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
