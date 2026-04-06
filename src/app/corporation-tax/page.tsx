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
import { CORPORATION_TAX_HERO_DATA } from "@/data/corporationTax/heroData";
import { CORPORATION_TAX_SERVICE_SCOPE_DATA } from "@/data/corporationTax/serviceScopeData";
import { CORPORATION_TAX_WHY_MATTERS_DATA } from "@/data/corporationTax/whyMattersData";
import { CORPORATION_TAX_FACTS_DATA } from "@/data/corporationTax/factsData";
import { CORPORATION_TAX_SOLUTION_DATA } from "@/data/corporationTax/solutionData";
import { CORPORATION_TAX_PAGE_FAQ_DATA } from "@/data/corporationTax/faqData";

export const metadata = {
  title: "Corporation Tax | FAM Chartered Accountants",
  description:
    "Proactive corporation tax planning and compliance, from accurate filings to strategic advice tailored to your company.",
};

export default function CorporationTaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CORPORATION_TAX_HERO_DATA} />
      <ServiceScope data={CORPORATION_TAX_SERVICE_SCOPE_DATA} />
      <WhyMatters data={CORPORATION_TAX_WHY_MATTERS_DATA} />
  
      <Facts data={CORPORATION_TAX_FACTS_DATA} />
      <Solution data={CORPORATION_TAX_SOLUTION_DATA} />
      <Faq data={CORPORATION_TAX_PAGE_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
