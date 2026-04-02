import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import { FAQS_PAGE_DATA } from "@/data/faqs/faqData";
import { FAQS_HERO_DATA } from "@/data/faqs/heroData";
import CtaExact from "@/Components/Home/Cta";

export const metadata = {
  title: "FAQs | FAM Chartered Accountants",
  description:
    "Frequently asked questions about our accounting, tax, and advisory services, with clear answers to help you understand how we work.",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={FAQS_HERO_DATA} />
      <Faq data={FAQS_PAGE_DATA} />
   <CtaExact /> 
      <FooterSection />
    </main>
  );
}
