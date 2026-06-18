import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type BusinessAdviceWhyIconKey = BookkeepingWhyMattersIconKey;

export const BUSINESS_ADVICE_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Clear Advice Makes a Difference",
  description:
    "Most business problems start quietly. Cash flow issues grow before they are noticed. Poor decisions often come from missing information. Advisory support improves survival and growth. Clarity leads to confidence.",
  items: [
    {
      title: "Problems Start Quietly",
      description: "Most business problems start quietly.",
      iconKey: "alert-triangle" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Hidden Cash Flow Issues",
      description: "Cash flow issues grow before they are noticed.",
      iconKey: "arrow-left-right" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Missing Information",
      description: "Poor decisions often come from missing information.",
      iconKey: "activity" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Better Survival & Growth",
      description: "Advisory support improves survival and growth.",
      iconKey: "trend-up" as BusinessAdviceWhyIconKey,
    },
    {
      title: "Clarity & Confidence",
      description: "Clarity leads to confidence.",
      iconKey: "check-square" as BusinessAdviceWhyIconKey,
    },
  ],
};
