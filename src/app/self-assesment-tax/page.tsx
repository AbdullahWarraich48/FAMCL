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
import { SELF_ASSESSMENT_TAX_HERO_DATA } from "@/data/selfAssessmentTax/heroData";
import { SELF_ASSESSMENT_TAX_SERVICE_SCOPE_DATA } from "@/data/selfAssessmentTax/serviceScopeData";
import { SELF_ASSESSMENT_TAX_WHY_MATTERS_DATA } from "@/data/selfAssessmentTax/whyMattersData";
import { SELF_ASSESSMENT_TAX_FACTS_DATA } from "@/data/selfAssessmentTax/factsData";
import { SELF_ASSESSMENT_TAX_SOLUTION_DATA } from "@/data/selfAssessmentTax/solutionData";
import { SELF_ASSESSMENT_TAX_FAQ_DATA } from "@/data/selfAssessmentTax/faqData";

export const metadata = {
  title: "Self-Assessment Tax | FAM Chartered Accountants",
  description:
    "Specialist support to prepare and submit accurate Self-Assessment tax returns, making sure allowances are used correctly and deadlines are never missed.",
};

export default function SelfAssessmentTaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={SELF_ASSESSMENT_TAX_HERO_DATA} />
      <ServiceScope data={SELF_ASSESSMENT_TAX_SERVICE_SCOPE_DATA} />
      <WhyMatters data={SELF_ASSESSMENT_TAX_WHY_MATTERS_DATA} />
      <Facts data={SELF_ASSESSMENT_TAX_FACTS_DATA} />
      <Solution data={SELF_ASSESSMENT_TAX_SOLUTION_DATA} />
      <Faq data={SELF_ASSESSMENT_TAX_FAQ_DATA} />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
