import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Faq from "@/Components/Book-Keeping/Faq";
import FooterSection from "@/Components/footer";
import { VAT_MARGIN_SCHEME_HERO_DATA } from "@/data/vatMarginScheme/heroData";

export const metadata = {
  title: "VAT Margin Scheme | FAM Chartered Accountants",
  description:
    "VAT margin scheme advice for eligible second-hand sales, record-keeping, and compliant VAT returns.",
};

export default function VatMarginSchemePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={VAT_MARGIN_SCHEME_HERO_DATA} />
      <Faq />
      <Contact />
      <FooterSection />
    </main>
  );
}
