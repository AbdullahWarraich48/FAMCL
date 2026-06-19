import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { HOW_WE_WORK_HERO_DATA } from "@/data/howWeWork/heroData";
import { HOW_WE_WORK_FOUNDATION_DATA } from "@/data/howWeWork/foundationData";
import { HOW_WE_WORK_FACTS_DATA } from "@/data/howWeWork/factsData";
import { HOW_WE_WORK_FAQ_DATA } from "@/data/howWeWork/faqData";
import Foundation from "@/Components/Home/foundation";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "How We Work | FAM Chartered Accountants",
  description:
    "FAM Chartered Accountants follows a structured but flexible working model, designed to reduce risk rather than maximise throughput.",
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={HOW_WE_WORK_HERO_DATA} /> */}
      <Foundation data={HOW_WE_WORK_FOUNDATION_DATA} />
      <Facts data={HOW_WE_WORK_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Faq data={HOW_WE_WORK_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
