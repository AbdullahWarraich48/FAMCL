import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type PayrollSolutionIconKey = BookkeepingSolutionIconKey;

export const PAYROLL_PANSIONS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our payroll process focuses on accuracy, security, and regulatory compliance at every stage.",
  steps: [
    {
      number: "01",
      title: "Set up secure payroll systems",
      iconKey: "cogs" as PayrollSolutionIconKey,
    },
    {
      number: "02",
      title: "Process payroll accurately",
      iconKey: "calculator" as PayrollSolutionIconKey,
    },
    {
      number: "03",
      title: "Manage PAYE and pensions",
      iconKey: "receipt-tax" as PayrollSolutionIconKey,
    },
    {
      number: "04",
      title: "Handle reporting and filings",
      iconKey: "calendar-clock" as PayrollSolutionIconKey,
    },
    {
      number: "05",
      title: "Support you year-round",
      iconKey: "message" as PayrollSolutionIconKey,
    },
  ],
};
