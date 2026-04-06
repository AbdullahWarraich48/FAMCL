import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { OUR_TEAM_HERO_DATA } from "@/data/ourTeam/heroData";
import { OUR_TEAM_FACTS_DATA } from "../../../data/ourTeam/factsData";
import { OUR_TEAM_FAQ_DATA } from "@/data/ourTeam/faqData";

export const metadata = {
  title: "Our Team | FAM Chartered Accountants",
  description:
    "Meet the FAM Chartered Accountants team, built on competence, accountability, and practical regulatory experience.",
};

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={OUR_TEAM_HERO_DATA} />
      <TeamStructure
        badgeLabel="Our Structure"
        title="Responsibility That Remains Clear"
        paragraphs={[
          "Our team structure prioritises expertise, accountability, and regulatory understanding.",
          "Each engagement is managed by professionals who:",
          "Work is not passed between disconnected departments. Responsibility remains clearly defined throughout every engagement.",
        ]}
        bulletItems={[
          "understand UK tax and compliance frameworks",
          "apply regulations in real business situations",
          "recognise how small errors can create significant risks",
        ]}
        mainImage={{
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          alt: "Modern office buildings",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
          alt: "Team working together in an office",
        }}
      />
      <Facts data={OUR_TEAM_FACTS_DATA} />
      <Faq data={OUR_TEAM_FAQ_DATA} />
      <Contact />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
