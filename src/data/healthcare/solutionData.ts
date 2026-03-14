import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type HealthcareSolutionIconKey = BookkeepingSolutionIconKey;

export const HEALTHCARE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured approach helps healthcare providers manage financial operations, maintain compliance, and focus on patient care.",
  steps: [
    {
      number: "01",
      title: "Manage Specialist Medical Payroll",
      iconKey: "document-check" as HealthcareSolutionIconKey,
    },
    {
      number: "02",
      title: "Handle NHS Contract Reconciliation",
      iconKey: "calculator" as HealthcareSolutionIconKey,
    },
    {
      number: "03",
      title: "Provide Tax Planning Advice",
      iconKey: "receipt-tax" as HealthcareSolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure Regulatory Compliance",
      iconKey: "badge-check" as HealthcareSolutionIconKey,
    },
    {
      number: "05",
      title: "Support Strategic Practice Planning",
      iconKey: "target" as HealthcareSolutionIconKey,
    },
  ],
} as const;

