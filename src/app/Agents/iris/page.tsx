import FooterSection from "@/Components/footer";
import AgentHero from "@/Components/Agents/hero";
import IrisIntroduction from "@/Components/Agents/IrisIntroduction";
import AgentCta from "@/Components/Agents/Cta";

export const metadata = {
  title: "IRIS Accounting and Tax Software | FAM Chartered Accountants",
  description:
    "Overview of IRIS accounting and tax software and how we use it to support clients.",
};

export default function IrisPage() {
  return (
    <main className="min-h-screen bg-white">
      <AgentHero 
        title="IRIS Accounting and Tax Software"
        breadcrumb="IRIS Accounting and Tax Software"
        lastUpdated="2 Mar 2026"
        firstPublished="9 Oct 2024"
        readTime="1 min read"
        tagLabel="Digital Reporting"
      />

      <IrisIntroduction />
      <AgentCta />
      <FooterSection />
    </main>
  );
}
