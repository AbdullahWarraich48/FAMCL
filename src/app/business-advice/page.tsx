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
import { BUSINESS_ADVICE_HERO_DATA } from "@/data/businessAdvice/heroData";
import { BUSINESS_ADVICE_SERVICE_SCOPE_DATA } from "@/data/businessAdvice/serviceScopeData";
import { BUSINESS_ADVICE_WHY_MATTERS_DATA } from "@/data/businessAdvice/whyMattersData";
import { BUSINESS_ADVICE_FACTS_DATA } from "@/data/businessAdvice/factsData";
import { BUSINESS_ADVICE_SOLUTION_DATA } from "@/data/businessAdvice/solutionData";
import { BUSINESS_ADVICE_FAQ_DATA } from "@/data/businessAdvice/faqData";

export const metadata = {
  title: "Business Advice | FAM Chartered Accountants",
  description:
    "Practical, data-driven business advice for growth, restructuring, risk management, and long-term planning.",
};

export default function BusinessAdvicePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={BUSINESS_ADVICE_HERO_DATA} />
      <ServiceScope data={BUSINESS_ADVICE_SERVICE_SCOPE_DATA} />
      <WhyMatters data={BUSINESS_ADVICE_WHY_MATTERS_DATA} />

      <Facts data={BUSINESS_ADVICE_FACTS_DATA} />
      <Solution data={BUSINESS_ADVICE_SOLUTION_DATA} />
      <Faq data={BUSINESS_ADVICE_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
