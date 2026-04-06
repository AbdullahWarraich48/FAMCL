import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { LIMITED_COMPANIES_HERO_DATA } from "@/data/limitedCompanies/heroData";
import { LIMITED_COMPANIES_SERVICE_SCOPE_DATA } from "@/data/limitedCompanies/serviceScopeData";
import { LIMITED_COMPANIES_FACTS_DATA } from "@/data/limitedCompanies/factsData";
import { LIMITED_COMPANIES_SOLUTION_DATA } from "@/data/limitedCompanies/solutionData";
import LimitedCompaniesChallenges from "@/Components/Home/LimitedCompaniesChallenges";
import LimitedCompaniesChooseService from "@/Components/Home/LimitedCompaniesChooseService";
import { LIMITED_COMPANIES_WHY_MATTERS_DATA } from "@/data/limitedCompanies/whyMattersData";
import { LIMITED_COMPANIES_FAQ_DATA } from "@/data/limitedCompanies/faqData";
import WhyMattersSection from "@/Components/Book-Keeping/Why-Matters";

export const metadata = {
  title: "Limited Companies | FAM Chartered Accountants",
  description:
    "Structured accounting, tax, and compliance support for limited companies, helping directors manage obligations while creating room for growth.",
};

export default function LimitedCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={LIMITED_COMPANIES_HERO_DATA} />
      <ServiceScope data={LIMITED_COMPANIES_SERVICE_SCOPE_DATA} />
      <Facts data={LIMITED_COMPANIES_FACTS_DATA} />
      <Solution data={LIMITED_COMPANIES_SOLUTION_DATA} />
      <LimitedCompaniesChallenges />
      <LimitedCompaniesChooseService />
      <WhyMattersSection data={LIMITED_COMPANIES_WHY_MATTERS_DATA} />
      <Faq data={LIMITED_COMPANIES_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
