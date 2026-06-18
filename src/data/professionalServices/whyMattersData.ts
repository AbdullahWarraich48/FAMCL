import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ProfessionalServicesWhyIconKey = BookkeepingWhyMattersIconKey;

export const PROFESSIONAL_SERVICES_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Financial Discipline Matters",
  description:
    "For firms whose product is expertise, time is money. Inefficient billing, poor project costing, and complex partner structures can erode profitability. We provide the financial discipline to ensure your firm's financial health is as robust as its professional reputation.",
  items: [
    {
      title: "Time Is Money",
      description: "For firms whose product is expertise, time is money.",
      iconKey: "clock" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Inefficient Billing",
      description: "Inefficient billing can erode profitability.",
      iconKey: "alert-triangle" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Poor Project Costing",
      description: "Poor project costing can erode profitability.",
      iconKey: "chart-line" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Complex Partner Structures",
      description: "Complex partner structures can erode profitability.",
      iconKey: "cogs" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Robust Financial Health",
      description:
        "We provide the financial discipline to ensure your firm's financial health is as robust as its professional reputation.",
      iconKey: "shield" as ProfessionalServicesWhyIconKey,
    },
  ],
};
