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
import SoleTradersChallenges from "@/Components/Home/SoleTradersChallenges";
import SoleTradersChooseService from "@/Components/Home/SoleTradersChooseService";

export const metadata = {
  title: "Sole Traders | FAM Chartered Accountants",
  description:
    "Simple, compliant support for self-employed individuals, with clear guidance on tax, record-keeping, and HMRC responsibilities.",
};

export default function SoleTradersPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={SOLE_TRADERS_HERO_DATA} />
      <ServiceScope data={SOLE_TRADERS_SERVICE_SCOPE_DATA} />
      <Facts data={SOLE_TRADERS_FACTS_DATA} />
      <Solution data={SOLE_TRADERS_SOLUTION_DATA} />
      <SoleTradersChallenges />
      <SoleTradersChooseService />
      <Solution data={SOLE_TRADERS_TRUST_MATRIX_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
