import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type ProfessionalServicesSolutionIconKey = BookkeepingSolutionIconKey;

export const PROFESSIONAL_SERVICES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach helps professional services firms optimise financial operations, compliance, and profitability.",
  steps: [
    {
      number: "01",
      title: "Optimise time recording and billing systems for maximum recovery",
      iconKey: "clock" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "02",
      title: "Manage partner/director current accounts and profit allocation",
      iconKey: "calculator" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "03",
      title: "Ensure SRA and other regulatory compliance for client accounts",
      iconKey: "badge-check" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "04",
      title: "Analyse service line and client profitability",
      iconKey: "bar-chart" as ProfessionalServicesSolutionIconKey,
    },
    {
      number: "05",
      title: "Advise on tax-efficient structuring and profit extraction",
      iconKey: "receipt-tax" as ProfessionalServicesSolutionIconKey,
    },
  ],
};
