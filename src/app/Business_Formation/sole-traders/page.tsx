import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { SOLE_TRADERS_HERO_DATA } from "@/data/soleTraders/heroData";
import { SOLE_TRADERS_SERVICE_SCOPE_DATA } from "@/data/soleTraders/serviceScopeData";
import { SOLE_TRADERS_FACTS_DATA } from "@/data/soleTraders/factsData";
import {
  SOLE_TRADERS_SOLUTION_DATA,
  SOLE_TRADERS_TRUST_MATRIX_SOLUTION_DATA,
} from "@/data/soleTraders/solutionData";
import { SOLE_TRADERS_FAQ_DATA } from "@/data/soleTraders/faqData";
import SoleTradersChallenges from "@/Components/Home/SoleTradersChallenges";
import SoleTradersChooseService from "@/Components/Home/SoleTradersChooseService";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Sole Traders | FAM Chartered Accountants",
  description:
    "Simple support for self-employed work. Ongoing tax and compliance support for UK Sole Traders with structured record-keeping and planning.",
};

export default function SoleTradersPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={SOLE_TRADERS_HERO_DATA} />
      <ServiceScope data={SOLE_TRADERS_SERVICE_SCOPE_DATA} />
      <Facts data={SOLE_TRADERS_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Solution data={SOLE_TRADERS_SOLUTION_DATA} sectionClassName={SECTION_BG.alt} />
      <SoleTradersChallenges />
      <SoleTradersChooseService />
      <Solution data={SOLE_TRADERS_TRUST_MATRIX_SOLUTION_DATA} />
      <Faq data={SOLE_TRADERS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
