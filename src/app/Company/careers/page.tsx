import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { CAREERS_HERO_DATA } from "@/data/careers/heroData";
import { CAREERS_FACTS_DATA } from "@/data/careers/factsData";
import { CAREERS_FAQ_DATA } from "@/data/careers/faqData";
import { CAREERS_CULTURE_DATA } from "@/data/careers/cultureData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Careers | FAM Chartered Accountants",
  description:
    "FAM Chartered Accountants looks for professionals who value judgement over volume.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={CAREERS_HERO_DATA} /> */}
      <TeamStructure {...CAREERS_CULTURE_DATA} />
      <Facts data={CAREERS_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Faq data={CAREERS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
