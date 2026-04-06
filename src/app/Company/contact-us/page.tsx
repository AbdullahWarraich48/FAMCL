import Contact from "@/Components/Book-Keeping/Contact";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import CtaExact from "@/Components/Home/Cta";
import { CONTACT_US_FAQ_DATA } from "@/data/contactUs/faqData";

export const metadata = {
  title: "Contact Us | FAM Chartered Accountants",
  description:
    "Contact FAM Chartered Accountants for enquiries, consultations, and support with accounting and tax.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Faq data={CONTACT_US_FAQ_DATA} />
      <Contact />
      <CtaExact />
      <FooterSection />
    </main>
  );
}
