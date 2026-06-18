import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type SoleTradersSolutionIconKey = BookkeepingSolutionIconKey;

export const SOLE_TRADERS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solutions & Roadmap",
  heading: "How We Support Sole Traders",
  description:
    "Our approach focuses on structured financial support so Sole Traders remain compliant and financially organised.",
  steps: [
    {
      number: "01",
      title: "Establish disciplined record-keeping suitable for HMRC review",
      iconKey: "document-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "02",
      title: "Separate business and personal financial activity clearly",
      iconKey: "boxes" as SoleTradersSolutionIconKey,
    },
    {
      number: "03",
      title: "Identify allowable expenses without exposing risk",
      iconKey: "receipt-tax" as SoleTradersSolutionIconKey,
    },
    {
      number: "04",
      title: "Plan tax liabilities ahead of deadlines",
      iconKey: "calculator" as SoleTradersSolutionIconKey,
    },
    {
      number: "05",
      title: "Review structure periodically as income grows",
      iconKey: "search" as SoleTradersSolutionIconKey,
    },
  ],
};

export const SOLE_TRADERS_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants Trust Matrix",
  description:
    "Accuracy enforced. Compliance mandatory. Judgement applied. Process controlled. Accountability retained.",
  steps: [
    {
      number: "01",
      title: "Accuracy enforced",
      iconKey: "document-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "02",
      title: "Compliance mandatory",
      iconKey: "badge-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "03",
      title: "Judgement applied",
      iconKey: "calculator" as SoleTradersSolutionIconKey,
    },
    {
      number: "04",
      title: "Process controlled",
      iconKey: "cogs" as SoleTradersSolutionIconKey,
    },
    {
      number: "05",
      title: "Accountability retained",
      iconKey: "target" as SoleTradersSolutionIconKey,
    },
  ],
};
