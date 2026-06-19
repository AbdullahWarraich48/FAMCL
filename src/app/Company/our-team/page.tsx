import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { OUR_TEAM_HERO_DATA } from "@/data/ourTeam/heroData";
import { OUR_TEAM_FACTS_DATA } from "@/data/ourTeam/factsData";
import { OUR_TEAM_FAQ_DATA } from "@/data/ourTeam/faqData";
import { OUR_TEAM_STRUCTURE_DATA } from "@/data/ourTeam/teamStructureData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Our Team | FAM Chartered Accountants",
  description:
    "The team at FAM Chartered Accountants is structured around competence and accountability, not hierarchy.",
};

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={OUR_TEAM_HERO_DATA} /> */}
      <TeamStructure {...OUR_TEAM_STRUCTURE_DATA} />
      <Facts data={OUR_TEAM_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Faq data={OUR_TEAM_FAQ_DATA} />
      <Contact />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
