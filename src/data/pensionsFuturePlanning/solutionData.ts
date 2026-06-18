import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type PensionsSolutionIconKey = BookkeepingSolutionIconKey;

export const PENSIONS_FUTURE_PLANNING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured process guides you from understanding your goals through to long-term pension planning.",
  steps: [
    {
      number: "01",
      title: "Understand your goals",
      iconKey: "target" as PensionsSolutionIconKey,
    },
    {
      number: "02",
      title: "Review pension position",
      iconKey: "bar-chart" as PensionsSolutionIconKey,
    },
    {
      number: "03",
      title: "Explain options clearly",
      iconKey: "message" as PensionsSolutionIconKey,
    },
    {
      number: "04",
      title: "Improve tax efficiency",
      iconKey: "calculator" as PensionsSolutionIconKey,
    },
    {
      number: "05",
      title: "Support long-term planning",
      iconKey: "calendar-clock" as PensionsSolutionIconKey,
    },
  ],
};
