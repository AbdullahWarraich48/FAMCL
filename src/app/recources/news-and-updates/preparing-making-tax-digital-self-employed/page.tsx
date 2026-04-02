import NewsArticleHero from "@/Components/New-updates/NewsArticleHero";
import PreparingMtdSelfEmployedArticle from "@/Components/New-updates/PreparingMtdSelfEmployedArticle";
import FooterSection from "@/Components/footer";

export const metadata = {
  title:
    "Preparing for the Expansion of Making Tax Digital | FAM Chartered Accountants",
  description:
    "How self-employed individuals can prepare for expanded Making Tax Digital rules, digital record-keeping, and quarterly updates.",
};

export default function PreparingMtdSelfEmployedPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsArticleHero
        backHref="/recources/news-and-updates"
        title="Preparing for the Expansion of Making Tax Digital"
        datesLine="Last updated 2 Mar 2024 | First published 9 Oct 2024"
        authorLine="By Samantha, FCCA, ACIPP, MAAT • 1 min read"
        category="Digital Reporting"
        shareTitle="Preparing for the Expansion of Making Tax Digital"
      />
      <PreparingMtdSelfEmployedArticle />
      <FooterSection />
    </main>
  );
}
