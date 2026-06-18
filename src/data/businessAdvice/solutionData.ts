import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type BusinessAdviceSolutionIconKey = BookkeepingSolutionIconKey;

export const BUSINESS_ADVICE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our advisory approach is structured, proactive, and designed to help you make the right decisions at the right time.",
  steps: [
    {
      number: "01",
      title: "Understand your goals",
      iconKey: "target" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "02",
      title: "Review financial position",
      iconKey: "bar-chart" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "03",
      title: "Identify risks and opportunities",
      iconKey: "search" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "04",
      title: "Explain options clearly",
      iconKey: "message" as BusinessAdviceSolutionIconKey,
    },
    {
      number: "05",
      title: "Support implementation",
      iconKey: "cogs" as BusinessAdviceSolutionIconKey,
    },
  ],
};
