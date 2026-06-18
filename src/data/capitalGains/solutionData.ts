import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CapitalGainsSolutionIconKey = BookkeepingSolutionIconKey;

export const CAPITAL_GAINS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "We follow a structured approach from reviewing the sale through to future planning, so your CGT position is handled accurately and on time.",
  steps: [
    {
      number: "01",
      title: "Review the sale and history",
      iconKey: "search" as CapitalGainsSolutionIconKey,
    },
    {
      number: "02",
      title: "Calculate gains correctly",
      iconKey: "calculator" as CapitalGainsSolutionIconKey,
    },
    {
      number: "03",
      title: "Apply reliefs and allowances",
      iconKey: "badge-check" as CapitalGainsSolutionIconKey,
    },
    {
      number: "04",
      title: "MTD quarterly reporting",
      iconKey: "network" as CapitalGainsSolutionIconKey,
    },
    {
      number: "05",
      title: "Submit reports on time",
      iconKey: "calendar-clock" as CapitalGainsSolutionIconKey,
    },
    {
      number: "06",
      title: "Advise on future planning",
      iconKey: "target" as CapitalGainsSolutionIconKey,
    },
  ],
};
