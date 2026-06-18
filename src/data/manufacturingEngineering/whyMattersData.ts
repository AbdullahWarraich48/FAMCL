import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ManufacturingEngineeringWhyIconKey = BookkeepingWhyMattersIconKey;

export const MANUFACTURING_ENGINEERING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Financial Precision Matters",
  description:
    "In a sector driven by efficiency, financial blind spots are liabilities. Uncontrolled costs, missed R&D tax relief, and poor inventory valuation directly impact your bottom line. We deliver the financial data needed to optimise production, claim valuable reliefs, and drive sustainable growth.",
  items: [
    {
      title: "Financial Blind Spots",
      description:
        "In a sector driven by efficiency, financial blind spots are liabilities.",
      iconKey: "eye" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Uncontrolled Costs",
      description: "Uncontrolled costs directly impact your bottom line.",
      iconKey: "alert-triangle" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Missed R&D Relief",
      description: "Missed R&D tax relief directly impacts your bottom line.",
      iconKey: "flask" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Poor Inventory Valuation",
      description: "Poor inventory valuation directly impacts your bottom line.",
      iconKey: "chart-line" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Optimise & Grow",
      description:
        "We deliver the financial data needed to optimise production, claim valuable reliefs, and drive sustainable growth.",
      iconKey: "trend-up" as ManufacturingEngineeringWhyIconKey,
    },
  ],
};
