import FooterSection from "@/Components/footer";
import AgentHero from "@/Components/Agents/hero";
import AgentIntroduction from "@/Components/Agents/Introduction";
import AgentCta from "@/Components/Agents/Cta";

export const metadata = {
  title: "FreeAgent Cloud Accounting Software | FAM Chartered Accountants",
  description:
    "Overview of FreeAgent cloud accounting software and how we support clients who use it.",
};

export default function FreeAgentCloudAccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AgentHero 
        title="FreeAgent Cloud Accounting Software"
        breadcrumb="FreeAgent Cloud Accounting Software"
        lastUpdated="2 Mar 2026"
        firstPublished="9 Oct 2024"
        readTime="1 min read"
        tagLabel="Digital Reporting"
      />

      <AgentIntroduction />
      <AgentCta />
      <FooterSection />
    </main>
  );
}
