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
import { VAT_RETURNS_HERO_DATA } from "@/data/vatReturns/heroData";
import { VAT_RETURNS_SERVICE_SCOPE_DATA } from "@/data/vatReturns/serviceScopeData";
import { VAT_RETURNS_WHY_MATTERS_DATA } from "@/data/vatReturns/whyMattersData";
import { VAT_RETURNS_FACTS_DATA } from "@/data/vatReturns/factsData";
import { VAT_RETURNS_SOLUTION_DATA } from "@/data/vatReturns/solutionData";
import { VAT_RETURNS_FAQ_DATA } from "@/data/vatReturns/faqData";

export const metadata = {
  title: "VAT Returns | FAM Chartered Accountants",
  description:
    "HMRC-compliant VAT returns managed accurately and on time, with clear records and proactive support.",
};

export default function VatReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={VAT_RETURNS_HERO_DATA} />
      <ServiceScope data={VAT_RETURNS_SERVICE_SCOPE_DATA} />
      <WhyMatters data={VAT_RETURNS_WHY_MATTERS_DATA} />
  
      <Facts data={VAT_RETURNS_FACTS_DATA} />
      <Solution data={VAT_RETURNS_SOLUTION_DATA} />
      <Faq data={VAT_RETURNS_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
