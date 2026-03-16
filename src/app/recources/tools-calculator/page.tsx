import NewsUpdatesHero from "@/Components/New-updates/Herosection";
import ToolsIntroduction from "@/Components/Tools-Calculator/Intrduction";
import CtaExact from "@/Components/Home/Cta";
import FooterSection from "@/Components/footer";
import AvailableCalculators from "@/Components/Tools-Calculator/Avail_Calculators";
import ImportantUpdate from "@/Components/Tools-Calculator/Important-Update";

export const metadata = {
  title: "Tools & Calculators | FAM Chartered Accountants",
  description:
    "Practical financial tools to help you estimate taxes, plan ahead, and understand your numbers.",
};

export default function ToolsCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsUpdatesHero
        tagLabel="Tools & Calculators"
        title="Tools & Calculators"
        description="Practical financial tools help you estimate taxes, plan ahead, and understand your numbers."
      />

      <ToolsIntroduction />

      <AvailableCalculators />  
      <ImportantUpdate />   
      <CtaExact />
      <FooterSection /> 
    </main>
  );
}

