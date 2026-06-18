import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { FIXED_FEES_HERO_DATA } from "@/data/fixedFees/heroData";
import { FIXED_FEES_FACTS_DATA } from "@/data/fixedFees/factsData";
import { FIXED_FEES_FAQ_DATA } from "@/data/fixedFees/faqData";
import { FIXED_FEES_PRICING_PHILOSOPHY_DATA } from "@/data/fixedFees/pricingPhilosophyData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Fixed Fees | FAM Chartered Accountants",
  description:
    "Fees are agreed in advance and linked to scope and responsibility, not outcomes.",
};

export default function FixedFeesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={FIXED_FEES_HERO_DATA} />
      <TeamStructure {...FIXED_FEES_PRICING_PHILOSOPHY_DATA} />
      <Facts data={FIXED_FEES_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Faq data={FIXED_FEES_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
