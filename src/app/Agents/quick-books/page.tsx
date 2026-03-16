import FooterSection from "@/Components/footer";
import AgentHero from "@/Components/Agents/hero";
import QuickBooksIntroduction from "@/Components/Agents/QuickBooksIntroduction";
import AgentCta from "@/Components/Agents/Cta";

export const metadata = {
  title: "QuickBooks Online Accounting Software | FAM Chartered Accountants",
  description:
    "Overview of QuickBooks online accounting software and how we support clients who use it.",
};

export default function QuickBooksPage() {
  return (
    <main className="min-h-screen bg-white">
      <AgentHero 
        title="QuickBooks Online Accounting Software"
        breadcrumb="QuickBooks Online Accounting Software"
        lastUpdated="2 Mar 2026"
        firstPublished="9 Oct 2024"
        readTime="1 min read"
        tagLabel="Digital Reporting"
      />

      <QuickBooksIntroduction />
      <AgentCta />
      <FooterSection />
    </main>
  );
}
