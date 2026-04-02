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
      iconKey: "calculator" as PayrollSolutionIconKey,
    },
    {
      number: "03",
      title: "Handle PAYE deductions and pension contributions",
      iconKey: "receipt-tax" as PayrollSolutionIconKey,
    },
    {
      number: "04",
      title: "Submit required payroll reports and filings on time",
      iconKey: "calendar-clock" as PayrollSolutionIconKey,
    },
    {
      number: "05",
      title: "Offer continuous payroll support and compliance guidance",
      iconKey: "message" as PayrollSolutionIconKey,
    },
  ],
};

