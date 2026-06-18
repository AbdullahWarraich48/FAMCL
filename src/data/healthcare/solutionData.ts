import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type HealthcareSolutionIconKey = BookkeepingSolutionIconKey;

export const HEALTHCARE_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach helps healthcare providers manage financial operations, maintain compliance, and focus on patient care.",
  steps: [
    {
      number: "01",
      title:
        "Manage specialist medical payroll, including locum and practitioner payments",
      iconKey: "document-check" as HealthcareSolutionIconKey,
    },
    {
      number: "02",
      title: "Handle NHS contract reconciliation and GP practice accounts",
      iconKey: "calculator" as HealthcareSolutionIconKey,
    },
    {
      number: "03",
      title: "Advise on tax planning for partnerships and expense claims",
      iconKey: "receipt-tax" as HealthcareSolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure financial reporting meets CQC and regulatory standards",
      iconKey: "badge-check" as HealthcareSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Provide guidance on practice mergers, acquisitions, and succession planning",
      iconKey: "target" as HealthcareSolutionIconKey,
    },
  ],
};
