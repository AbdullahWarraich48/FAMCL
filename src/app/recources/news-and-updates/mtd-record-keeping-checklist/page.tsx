import NewsArticleHero from "@/Components/New-updates/NewsArticleHero";
import MtdRecordKeepingChecklistArticle from "@/Components/New-updates/MtdRecordKeepingChecklistArticle";
import FooterSection from "@/Components/footer";

export const metadata = {
  title:
    "Making Tax Digital: Record-Keeping Checklist | FAM Chartered Accountants",
  description:
    "Practical steps for digital records and compatible software to meet HMRC Making Tax Digital requirements.",
};

export default function MtdRecordKeepingChecklistPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsArticleHero
        backHref="/recources/news-and-updates"
        title="Making Tax Digital: Record-Keeping Checklist"
        datesLine="Last updated 1 Feb 2026 | First published 18 Jan 2026"
        authorLine="By Samantha, FCCA, ACIPP, MAAT • 2 min read"
        category="Digital Reporting"
        shareTitle="Making Tax Digital: Record-Keeping Checklist"
      />
      <MtdRecordKeepingChecklistArticle />
      <FooterSection />
    </main>
  );
}
