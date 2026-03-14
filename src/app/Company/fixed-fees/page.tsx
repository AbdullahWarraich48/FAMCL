import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { FIXED_FEES_HERO_DATA } from "@/data/fixedFees/heroData";
import { FIXED_FEES_FACTS_DATA } from "@/data/fixedFees/factsData";

export const metadata = {
  title: "Fixed Fees | FAM Chartered Accountants",
  description:
    "Clear fixed-fee accountancy pricing agreed in advance, linked to the scope and responsibility of the work so you can plan with confidence.",
};

export default function LandlordsFamiliesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={FIXED_FEES_HERO_DATA} />
      <TeamStructure
        badgeLabel="Our Pricing Philosophy"
        title="Clarity Before Commitment"
        paragraphs={[
          "We believe professional fees should be clear and predictable from the beginning of an engagement.",
          "Fees are therefore agreed in advance and linked to the scope and responsibility of the work, rather than results or outcomes.",
          "This approach exists for a simple reason: uncertainty around cost can create pressure to rush decisions. Rushed decisions increase the risk of mistakes and poor financial judgment.",
          "If the scope of work changes, the matter is discussed before additional work continues. Clients always understand the financial commitment before proceeding.",
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

      <Facts data={FIXED_FEES_FACTS_DATA} />

      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
