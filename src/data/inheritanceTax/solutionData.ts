import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type InheritanceSolutionIconKey = BookkeepingSolutionIconKey;

export const INHERITANCE_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach helps you understand your estate position, reduce tax exposure, and keep plans updated as circumstances change.",
  steps: [
    {
      number: "01",
      title: "Review estate structure",
      iconKey: "search" as InheritanceSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify tax exposure",
      iconKey: "calculator" as InheritanceSolutionIconKey,
    },
    {
      number: "03",
      title: "Explain planning options",
      iconKey: "message" as InheritanceSolutionIconKey,
    },
    {
      number: "04",
      title: "Coordinate with professionals if needed",
      iconKey: "network" as InheritanceSolutionIconKey,
    },
    {
      number: "05",
      title: "Keep plans under review",
      iconKey: "calendar-clock" as InheritanceSolutionIconKey,
    },
  ],
};
