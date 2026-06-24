import NewsUpdatesHero from "@/Components/New-updates/Herosection";
import OutsourceContent from "@/Components/Outsource/OutsourceContent";
import CtaExact from "@/Components/Home/Cta";
import FooterSection from "@/Components/footer";
import { OUTSOURCE_PAGE_DATA } from "@/data/outsource/outsourceData";

export const metadata = {
  title: "Outsource | FAM Chartered Accountants",
  description:
    "Flexible accounts department outsourcing — bookkeeping, payroll, management accounts, VAT returns, and more.",
};

export default function OutsourcePage() {
  const { tagLabel, title, description } = OUTSOURCE_PAGE_DATA;

  return (
    <main className="min-h-screen bg-white">
      <NewsUpdatesHero
        tagLabel={tagLabel}
        title={title}
        description={description}
      />
      <OutsourceContent />
      <CtaExact />
      <FooterSection />
    </main>
  );
}
