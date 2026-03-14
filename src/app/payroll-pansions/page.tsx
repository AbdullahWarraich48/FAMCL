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
import { PAYROLL_PANSIONS_HERO_DATA } from "@/data/payrollPansions/heroData";
import { PAYROLL_PANSIONS_SERVICE_SCOPE_DATA } from "@/data/payrollPansions/serviceScopeData";
import { PAYROLL_PANSIONS_WHY_MATTERS_DATA } from "@/data/payrollPansions/whyMattersData";
import { PAYROLL_PANSIONS_FACTS_DATA } from "@/data/payrollPansions/factsData";
import { PAYROLL_PANSIONS_SOLUTION_DATA } from "@/data/payrollPansions/solutionData";

export const metadata = {
  title: "Payroll & Pensions | FAM Chartered Accountants",
  description:
    "Accurate, compliant payroll and pension management so your team is paid correctly and on time while your business stays fully compliant.",
};

export default function PayrollPansionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={PAYROLL_PANSIONS_HERO_DATA} />
      <ServiceScope data={PAYROLL_PANSIONS_SERVICE_SCOPE_DATA} />
      <WhyMatters data={PAYROLL_PANSIONS_WHY_MATTERS_DATA} />
  
      <Facts data={PAYROLL_PANSIONS_FACTS_DATA} />
      <Solution data={PAYROLL_PANSIONS_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
