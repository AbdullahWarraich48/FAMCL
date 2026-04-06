import ApplicableGoodsGrid from "@/Components/Book-Keeping/ApplicableGoodsGrid";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Faq from "@/Components/Book-Keeping/Faq";
import MarginSchemeHowToStart from "@/Components/Book-Keeping/MarginSchemeHowToStart";
import VatMarginExceptionsGrid from "@/Components/Book-Keeping/VatMarginExceptionsGrid";
import VatMarginFrameworkSection from "@/Components/Book-Keeping/VatMarginFrameworkSection";
import VatMarginInvoiceRequirements from "@/Components/Book-Keeping/VatMarginInvoiceRequirements";
import FooterSection from "@/Components/footer";
import { VAT_MARGIN_SCHEME_HERO_DATA } from "@/data/vatMarginScheme/heroData";
import { VAT_MARGIN_SCHEME_FAQ_DATA } from "@/data/vatMarginScheme/faqData";
import Steps from "@/Components/Book-Keeping/Steps";
import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";

export const metadata = {
  title: "VAT Margin Scheme | FAM Chartered Accountants",
  description:
    "VAT margin scheme advice for eligible second-hand sales, record-keeping, and compliant VAT returns.",
};

export default function VatMarginSchemePage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={VAT_MARGIN_SCHEME_HERO_DATA} />
      <ApplicableGoodsGrid />
      <MarginSchemeHowToStart />
      <VatMarginExceptionsGrid />
      <VatMarginFrameworkSection />
      <VatMarginInvoiceRequirements />
      <Faq data={VAT_MARGIN_SCHEME_FAQ_DATA} />
      <Contact />
      <Steps /> 
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
