import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import { FAQS_HERO_DATA } from "@/data/faqs/heroData";

export const metadata = {
  title: "FAQs | FAM Chartered Accountants",
  description:
    "Frequently asked questions about our accounting, tax, and advisory services, with clear answers to help you understand how we work.",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={FAQS_HERO_DATA} />
      <Faq />
      <Contact />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
