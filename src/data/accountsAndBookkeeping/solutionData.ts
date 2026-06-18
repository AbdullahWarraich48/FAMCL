import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

export const ACCOUNTS_AND_BOOKKEEPING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our approach is structured and practical. We focus on clarity first, then consistency.",
  steps: [
    {
      number: "01",
      title: "Review your existing records",
      iconKey: "search" as BookkeepingSolutionIconKey,
    },
    {
      number: "02",
      title: "Clean and structure your accounts",
      iconKey: "boxes" as BookkeepingSolutionIconKey,
    },
    {
      number: "03",
      title: "Set up simple digital bookkeeping",
      iconKey: "monitor" as BookkeepingSolutionIconKey,
    },
    {
      number: "04",
      title: "Provide regular, readable reports",
      iconKey: "bar-chart" as BookkeepingSolutionIconKey,
    },
    {
      number: "05",
      title: "Support you year-round, not just at year end",
      iconKey: "heart-check" as BookkeepingSolutionIconKey,
    },
  ],
};
