import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ProfessionalServicesSolutionIconKey = BookkeepingSolutionIconKey;

export const PROFESSIONAL_SERVICES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured approach helps professional services firms optimise their financial operations, ensuring you maximise revenue, comply with regulations, and maintain profitability.",
  steps: [
    {
      number: "01",
      title: "Optimise Time Recording & Billing",
      iconKey: "clock" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "02",
      title: "Manage Partner/Director Accounts & Profit Allocation",
      iconKey: "calculator" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "03",
      title: "Ensure Regulatory Compliance",
      iconKey: "badge-check" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "04",
      title: "Analyse Profitability",
      iconKey: "bar-chart" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "05",
      title: "Tax-Efficient Structuring & Profit Extraction",
      iconKey: "receipt-tax" as ProfessionalServicesSolutionIconKey,
    },
  ],
} as const;

