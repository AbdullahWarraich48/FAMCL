import NewsArticleHero from "@/Components/New-updates/NewsArticleHero";
import CorporationTaxTieredArticle from "@/Components/New-updates/CorporationTaxTieredArticle";
import FooterSection from "@/Components/footer";

export const metadata = {
  title:
    "Corporation Tax Changes for Small Companies | FAM Chartered Accountants",
  description:
    "Tiered corporation tax rates, marginal relief, and what small companies should review for tax planning.",
};

export default function CorporationTaxTieredRatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsArticleHero
        backHref="/recources/news-and-updates"
        title="Corporation Tax Changes for Small Companies"
        datesLine="Last updated 1 Mar 2026 | First published 20 Feb 2026"
        authorLine="By Samantha, FCCA, ACIPP, MAAT • 2 min read"
        category="Tax Compliance"
        shareTitle="Corporation Tax Changes for Small Companies"
      />
      <CorporationTaxTieredArticle />
      <FooterSection />
    </main>
  );
}
