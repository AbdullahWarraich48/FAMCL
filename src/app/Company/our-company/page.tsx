import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { OUR_COMPANY_HERO_DATA } from "@/data/ourCompany/heroData";
import { OUR_COMPANY_FOUNDATION_DATA } from "@/data/ourCompany/foundationData";
import Foundation from "@/Components/Home/foundation";
import { SECTION_BG } from "@/constants/sectionBackgrounds";
import { OUR_COMPANY_FACTS_DATA } from "@/data/ourCompany/factsData";
import { OUR_COMPANY_FAQ_DATA } from "@/data/ourCompany/faqData";

export const metadata = {
  title: "Our Story | FAM Chartered Accountants",
  description:
    "Built on judgement, shaped by responsibility. FAM Chartered Accountants brings clarity where financial complexity creates risk.",
};

export default function OurCompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={OUR_COMPANY_HERO_DATA} /> */}
      <Foundation data={OUR_COMPANY_FOUNDATION_DATA} />
      <Facts data={OUR_COMPANY_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Faq data={OUR_COMPANY_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
