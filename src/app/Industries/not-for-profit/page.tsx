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
import { NOT_FOR_PROFIT_HERO_DATA } from "@/data/notForProfit/heroData";
import { NOT_FOR_PROFIT_SERVICE_SCOPE_DATA } from "@/data/notForProfit/serviceScopeData";
import { NOT_FOR_PROFIT_WHY_MATTERS_DATA } from "@/data/notForProfit/whyMattersData";
import { NOT_FOR_PROFIT_FACTS_DATA } from "@/data/notForProfit/factsData";
import { NOT_FOR_PROFIT_SOLUTION_DATA } from "@/data/notForProfit/solutionData";
import { NOT_FOR_PROFIT_FAQ_DATA } from "@/data/notForProfit/faqData";

export const metadata = {
  title: "Not-for-Profit | FAM Chartered Accountants",
  description:
    "Specialist accounting, regulation, and compliance support for charities and not-for-profit organisations, helping you protect donor trust and meet regulatory requirements.",
};

export default function NotForProfitPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={NOT_FOR_PROFIT_HERO_DATA} />
      <ServiceScope data={NOT_FOR_PROFIT_SERVICE_SCOPE_DATA} />
      <WhyMatters data={NOT_FOR_PROFIT_WHY_MATTERS_DATA} />
  
      <Facts data={NOT_FOR_PROFIT_FACTS_DATA} />
      <Solution data={NOT_FOR_PROFIT_SOLUTION_DATA} />
      <Faq data={NOT_FOR_PROFIT_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
