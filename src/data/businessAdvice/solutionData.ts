import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type BusinessAdviceSolutionIconKey = BookkeepingSolutionIconKey;

export const BUSINESS_ADVICE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our advisory services are structured, proactive, and designed to help you make the right decisions at the right time. Each step focuses on clarity, growth, and risk management.",
  steps: [
    {
      number: "01",
      title: "Understand Your Goals",
      iconKey: "target" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "02",
      title: "Review Financial Position",
      iconKey: "bar-chart" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "03",
      title: "Identify Risks & Opportunities",
      iconKey: "search" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "04",
      title: "Explain Options Clearly",
      iconKey: "message" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "05",
      title: "Support Implementation",
      iconKey: "cogs" as BusinessAdviceSolutionIconKey,
    },
  ],
};

