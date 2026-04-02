import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type PensionsSolutionIconKey = BookkeepingSolutionIconKey;

export const PENSIONS_FUTURE_PLANNING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our process ensures you have a clear and structured plan for your pension, guiding you through every step to achieve a secure future.",
  steps: [
    {
      number: "01",
      title: "Understand Your Goals",
      iconKey: "target" as PensionsSolutionIconKey,
    },
    {
      number: "02",
      title: "Review Pension Position",
      iconKey: "bar-chart" as PensionsSolutionIconKey,
    },
    {
      number: "03",
      title: "Explain Options Clearly",
      iconKey: "message" as PensionsSolutionIconKey,
    },
    {
      number: "04",
      title: "Improve Tax Efficiency",
      iconKey: "calculator" as PensionsSolutionIconKey,
    },
    {
      number: "05",
      title: "Keep Your Plan Under Review",
      iconKey: "calendar-clock" as PensionsSolutionIconKey,
    },
  ],
};

