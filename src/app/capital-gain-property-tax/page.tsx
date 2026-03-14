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
import { CAPITAL_GAINS_HERO_DATA } from "@/data/capitalGains/heroData";
import { CAPITAL_GAINS_SERVICE_SCOPE_DATA } from "@/data/capitalGains/serviceScopeData";
import { CAPITAL_GAINS_WHY_MATTERS_DATA } from "@/data/capitalGains/whyMattersData";
import { CAPITAL_GAINS_FACTS_DATA } from "@/data/capitalGains/factsData";
import { CAPITAL_GAINS_SOLUTION_DATA } from "@/data/capitalGains/solutionData";

export const metadata = {
  title: "Capital Gains & Property Tax | FAM Chartered Accountants",
  description:
    "Specialist advice on Capital Gains and property tax so you understand what you owe, make use of allowances, and avoid unexpected tax bills when selling assets.",
};

export default function CapitalGainsPropertyTaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CAPITAL_GAINS_HERO_DATA} />
      <ServiceScope data={CAPITAL_GAINS_SERVICE_SCOPE_DATA} />
      <WhyMatters data={CAPITAL_GAINS_WHY_MATTERS_DATA} />
      <Facts data={CAPITAL_GAINS_FACTS_DATA} />
      <Solution data={CAPITAL_GAINS_SOLUTION_DATA} />
      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
