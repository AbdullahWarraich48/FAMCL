import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type PayrollSolutionIconKey = BookkeepingSolutionIconKey;

export const PAYROLL_PANSIONS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our payroll process focuses on accuracy, security, and regulatory compliance. A structured system ensures employees are paid correctly and reporting obligations are consistently met.",
  steps: [
    {
      number: "01",
      title: "Set Up Secure Payroll Systems",
      iconKey: "cogs" as PayrollSolutionIconKey,
    },
    {
      number: "02",
      title: "Calculate & process employee payments with full accuracy",
      iconKey: "search" as PayrollSolutionIconKey,
    },
    {
      number: "03",
      title: "Handle PAYE deductions and pension contributions",
      iconKey: "bar-chart" as PayrollSolutionIconKey,
    },
    {
      number: "04",
      title: "Submit required payroll reports and filings on time",
      iconKey: "message" as PayrollSolutionIconKey,
    },
    {
      number: "05",
      title: "Offer continuous payroll support and compliance guidance",
      iconKey: "heart-check" as PayrollSolutionIconKey,
    },
  ],
};

