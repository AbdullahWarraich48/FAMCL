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
import { HEALTHCARE_HERO_DATA } from "@/data/healthcare/heroData";
import { HEALTHCARE_SERVICE_SCOPE_DATA } from "@/data/healthcare/serviceScopeData";
import { HEALTHCARE_WHY_MATTERS_DATA } from "@/data/healthcare/whyMattersData";
import { HEALTHCARE_FACTS_DATA } from "@/data/healthcare/factsData";
import { HEALTHCARE_SOLUTION_DATA } from "@/data/healthcare/solutionData";

export const metadata = {
  title: "Healthcare | FAM Chartered Accountants",
  description:
    "Specialist accounting and advisory support for healthcare providers, ensuring compliant and efficient financial operations so you can focus on patient care.",
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={HEALTHCARE_HERO_DATA} />
      <ServiceScope data={HEALTHCARE_SERVICE_SCOPE_DATA} />
      <WhyMatters data={HEALTHCARE_WHY_MATTERS_DATA} />
  
      <Facts data={HEALTHCARE_FACTS_DATA} />
      <Solution data={HEALTHCARE_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
