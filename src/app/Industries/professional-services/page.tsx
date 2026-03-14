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
import { PROFESSIONAL_SERVICES_HERO_DATA } from "@/data/professionalServices/heroData";
import { PROFESSIONAL_SERVICES_SERVICE_SCOPE_DATA } from "@/data/professionalServices/serviceScopeData";
import { PROFESSIONAL_SERVICES_WHY_MATTERS_DATA } from "@/data/professionalServices/whyMattersData";
import { PROFESSIONAL_SERVICES_FACTS_DATA } from "@/data/professionalServices/factsData";
import { PROFESSIONAL_SERVICES_SOLUTION_DATA } from "@/data/professionalServices/solutionData";

export const metadata = {
  title: "Professional Services | FAM Chartered Accountants",
  description:
    "Financial and operational guidance for professional service firms—supporting time tracking, project costing, partner accounting, and tax efficiency.",
};

export default function ProfessionalServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={PROFESSIONAL_SERVICES_HERO_DATA} />
      <ServiceScope data={PROFESSIONAL_SERVICES_SERVICE_SCOPE_DATA} />
      <WhyMatters data={PROFESSIONAL_SERVICES_WHY_MATTERS_DATA} />
  
      <Facts data={PROFESSIONAL_SERVICES_FACTS_DATA} />
      <Solution data={PROFESSIONAL_SERVICES_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
