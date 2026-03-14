import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ManufacturingEngineeringWhyIconKey = BookkeepingWhyMattersIconKey;

export const MANUFACTURING_ENGINEERING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Industry-Specific Financial Management",
  description:
    "In the manufacturing and engineering sectors, small financial oversights can lead to significant inefficiencies. Our services help you identify and manage key areas like cost control, R&D claims, and inventory management to maximise profitability and ensure long-term sustainability.",
  items: [
    {
      title: "Avoid Financial Blind Spots",
      description:
        "Uncontrolled costs, missed tax relief opportunities, and poor inventory management directly impact your bottom line. Our services help uncover and address these issues.",
      iconKey: "eye" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Maximise R&D Tax Credits",
      description:
        "Many manufacturers miss out on valuable R&D tax relief due to insufficient understanding or documentation. We ensure you claim all eligible tax credits.",
      iconKey: "flask" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Enhance Efficiency in Production",
      description:
        "Accurate financial data and analysis allow you to optimise production and supply chain processes for maximum efficiency.",
      iconKey: "cogs" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Sustainable Growth",
      description:
        "With the right financial management strategies in place, you can achieve sustainable growth and remain competitive in the market.",
      iconKey: "leaf" as ManufacturingEngineeringWhyIconKey,
    },
    {
      title: "Improve Cash Flow & Profitability",
      description:
        "Managing cash flow and optimising profitability is key to growth. We help reduce unnecessary expenses and ensure you stay on top of your financials.",
      iconKey: "circle-dollar" as ManufacturingEngineeringWhyIconKey,
    },
  ],
} as const;

