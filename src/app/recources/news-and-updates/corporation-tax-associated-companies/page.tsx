import NewsArticleHero from "@/Components/New-updates/NewsArticleHero";
import CorporationTaxAssociatedArticle from "@/Components/New-updates/CorporationTaxAssociatedArticle";
import FooterSection from "@/Components/footer";
import Steps from "@/Components/Book-Keeping/Steps";
import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";

export const metadata = {
  title:
    "Corporation Tax: Associated Companies and Rate Bands | FAM Chartered Accountants",
  description:
    "How associated company rules interact with the small profits rate and main rate for corporation tax.",
};

export default function CorporationTaxAssociatedCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsArticleHero
        backHref="/recources/news-and-updates"
        title="Corporation Tax: Associated Companies and Rate Bands"
        datesLine="Last updated 1 Feb 2026 | First published 15 Jan 2026"
        authorLine="By Samantha, FCCA, ACIPP, MAAT • 2 min read"
        category="Tax Compliance"
        shareTitle="Corporation Tax: Associated Companies and Rate Bands"
      />
      <CorporationTaxAssociatedArticle />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
