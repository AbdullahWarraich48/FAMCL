import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CapitalGainsSolutionIconKey = BookkeepingSolutionIconKey;

export const CAPITAL_GAINS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "We follow a structured approach to ensure your CGT reporting and tax planning is handled accurately and efficiently. From reviewing property sales to applying reliefs, our step-by-step process protects your finances.",
  steps: [
    {
      number: "01",
      title: "Review the Sale & History",
      iconKey: "search" as CapitalGainsSolutionIconKey,
    },
    {
      number: "02",
      title: "Calculate Gains Correctly",
      iconKey: "bar-chart" as CapitalGainsSolutionIconKey,
    },
    {
      number: "03",
      title: "Apply Reliefs & Allowances",
      iconKey: "cogs" as CapitalGainsSolutionIconKey,
    },
    {
      number: "04",
      title: "MTD Quarterly Reporting & Submit Reports on Time",
      iconKey: "message" as CapitalGainsSolutionIconKey,
    },
    {
      number: "05",
      title: "Advise on Future Planning",
      iconKey: "heart-check" as CapitalGainsSolutionIconKey,
    },
  ],
};

