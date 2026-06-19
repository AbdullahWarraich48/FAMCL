import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import { ACCOUNTS_AND_BOOKKEEPING_HERO_DATA } from "@/data/accountsAndBookkeeping/heroData";
import { ACCOUNTS_AND_BOOKKEEPING_SERVICE_SCOPE_DATA } from "@/data/accountsAndBookkeeping/serviceScopeData";
import { ACCOUNTS_AND_BOOKKEEPING_WHY_MATTERS_DATA } from "@/data/accountsAndBookkeeping/whyMattersData";
import { ACCOUNTS_AND_BOOKKEEPING_FACTS_DATA } from "@/data/accountsAndBookkeeping/factsData";
import { ACCOUNTS_AND_BOOKKEEPING_SOLUTION_DATA } from "@/data/accountsAndBookkeeping/solutionData";
import { ACCOUNTS_AND_BOOKKEEPING_FAQ_DATA } from "@/data/accountsAndBookkeeping/faqData";

export const metadata = {
  title: "Accounts & Bookkeeping | FAM Chartered Accountants",
  description:
    "We maintain your business records and make you compliant. Accurate, up-to-date financial records for UK businesses.",
};

export default function AccountsAndBookkeepingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={ACCOUNTS_AND_BOOKKEEPING_HERO_DATA} /> */}
      <ServiceScope data={ACCOUNTS_AND_BOOKKEEPING_SERVICE_SCOPE_DATA} />
      <WhyMatters data={ACCOUNTS_AND_BOOKKEEPING_WHY_MATTERS_DATA} />
      <Facts data={ACCOUNTS_AND_BOOKKEEPING_FACTS_DATA} />
      <Solution data={ACCOUNTS_AND_BOOKKEEPING_SOLUTION_DATA} />
      <Faq data={ACCOUNTS_AND_BOOKKEEPING_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
