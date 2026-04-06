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
import { PENSIONS_FUTURE_PLANNING_HERO_DATA } from "@/data/pensionsFuturePlanning/heroData";
import { PENSIONS_FUTURE_PLANNING_SERVICE_SCOPE_DATA } from "@/data/pensionsFuturePlanning/serviceScopeData";
import { PENSIONS_FUTURE_PLANNING_WHY_MATTERS_DATA } from "@/data/pensionsFuturePlanning/whyMattersData";
import { PENSIONS_FUTURE_PLANNING_FACTS_DATA } from "@/data/pensionsFuturePlanning/factsData";
import { PENSIONS_FUTURE_PLANNING_SOLUTION_DATA } from "@/data/pensionsFuturePlanning/solutionData";
import { PENSIONS_FUTURE_PLANNING_FAQ_DATA } from "@/data/pensionsFuturePlanning/faqData";

export const metadata = {
  title: "Pensions & Future Planning | FAM Chartered Accountants",
  description:
    "Guidance on pensions, retirement planning, and long-term financial security so you can plan today for peace of mind tomorrow.",
};

export default function PensionsFuturePlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={PENSIONS_FUTURE_PLANNING_HERO_DATA} />
      <ServiceScope data={PENSIONS_FUTURE_PLANNING_SERVICE_SCOPE_DATA} />
      <WhyMatters data={PENSIONS_FUTURE_PLANNING_WHY_MATTERS_DATA} />
      <Facts data={PENSIONS_FUTURE_PLANNING_FACTS_DATA} />
      <Solution data={PENSIONS_FUTURE_PLANNING_SOLUTION_DATA} />
      <Faq data={PENSIONS_FUTURE_PLANNING_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
