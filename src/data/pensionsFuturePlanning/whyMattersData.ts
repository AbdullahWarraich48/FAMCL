import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type PensionsWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const PENSIONS_FUTURE_PLANNING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Pension Planning Matters",
  description:
    "Many people underestimate retirement needs. Tax efficiency matters more over time. Poor planning leads to reduced income later. Small decisions today compound significantly. Clarity now protects your future lifestyle.",
  items: [
    {
      title: "Underestimated Needs",
      description: "Many people underestimate retirement needs.",
      iconKey: "alert-triangle" as PensionsWhyMattersIconKey,
    },
    {
      title: "Tax Efficiency Over Time",
      description: "Tax efficiency matters more over time.",
      iconKey: "circle-dollar" as PensionsWhyMattersIconKey,
    },
    {
      title: "Reduced Income Later",
      description: "Poor planning leads to reduced income later.",
      iconKey: "chart-line" as PensionsWhyMattersIconKey,
    },
    {
      title: "Compounding Decisions",
      description: "Small decisions today compound significantly.",
      iconKey: "clock" as PensionsWhyMattersIconKey,
    },
    {
      title: "Protect Your Lifestyle",
      description: "Clarity now protects your future lifestyle.",
      iconKey: "shield" as PensionsWhyMattersIconKey,
    },
  ],
};
