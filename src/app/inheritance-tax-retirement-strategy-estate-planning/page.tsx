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
import { INHERITANCE_TAX_HERO_DATA } from "@/data/inheritanceTax/heroData";
import { INHERITANCE_TAX_SERVICE_SCOPE_DATA } from "@/data/inheritanceTax/serviceScopeData";
import { INHERITANCE_TAX_WHY_MATTERS_DATA } from "@/data/inheritanceTax/whyMattersData";
import { INHERITANCE_TAX_FACTS_DATA } from "@/data/inheritanceTax/factsData";
import { INHERITANCE_TAX_SOLUTION_DATA } from "@/data/inheritanceTax/solutionData";

export const metadata = {
  title: "Inheritance Tax, Retirement Strategy & Estate Planning | FAM Chartered Accountants",
  description:
    "Support with inheritance tax planning, retirement strategy, and estate structuring so you can protect your family and pass on your wealth tax-efficiently.",
};

export default function InheritanceTaxRetirementStrategyEstatePlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={INHERITANCE_TAX_HERO_DATA} />
      <ServiceScope data={INHERITANCE_TAX_SERVICE_SCOPE_DATA} />
      <WhyMatters data={INHERITANCE_TAX_WHY_MATTERS_DATA} />
      <Facts data={INHERITANCE_TAX_FACTS_DATA} />
      <Solution data={INHERITANCE_TAX_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
