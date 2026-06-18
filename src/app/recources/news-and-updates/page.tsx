import Feature_Insight from "@/Components/New-updates/Feature_Insight";
import LatestUpdate from "@/Components/New-updates/Latest-update";
import NewsUpdatesHero from "@/Components/New-updates/Herosection";
import Regulation from "@/Components/New-updates/Regulation";
import Focus_Areas from "@/Components/New-updates/Focus_Areas";
import CtaExact from "@/Components/Home/Cta";
import FooterSection from "@/Components/footer";

export const metadata = {
  title: "News & Updates | FAM Chartered Accountants",
  description:
    "Regulatory and tax changes explained, with expert interpretation and impact assessment.",
};

export default function NewsAndUpdatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsUpdatesHero />
      <Regulation />    
      <Feature_Insight />       
      <LatestUpdate />
      <Focus_Areas />       
      <CtaExact  />
      <FooterSection /> 
    </main>
  );
}

