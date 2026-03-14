import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type SoleTradersSolutionIconKey = BookkeepingSolutionIconKey;

export const SOLE_TRADERS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Support Sole Traders",
  description:
    "Our approach focuses on providing simple but structured financial support so Sole Traders remain compliant and financially organised.",
  steps: [
    {
      number: "01",
      title: "Establish Record-Keeping Discipline",
      iconKey: "document-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "02",
      title: "Separate Business & Personal Finances",
      iconKey: "boxes" as SoleTradersSolutionIconKey,
    },
    {
      number: "03",
      title: "Identify Allowable Expenses",
      iconKey: "receipt-tax" as SoleTradersSolutionIconKey,
    },
    {
      number: "04",
      title: "Plan Tax Liabilities in Advance",
      iconKey: "calculator" as SoleTradersSolutionIconKey,
    },
    {
      number: "05",
      title: "Review Business Structure Periodically",
      iconKey: "search" as SoleTradersSolutionIconKey,
    },
  ],
};

export const SOLE_TRADERS_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises accuracy, accountability, and structured financial management.",
  steps: [
    {
      number: "01",
      title: "Accuracy Enforced",
      iconKey: "document-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "02",
      title: "Accountability Retained",
      iconKey: "target" as SoleTradersSolutionIconKey,
    },
    {
      number: "03",
      title: "Compliance Mandatory",
      iconKey: "badge-check" as SoleTradersSolutionIconKey,
    },
    {
      number: "04",
      title: "Process Controlled",
      iconKey: "cogs" as SoleTradersSolutionIconKey,
    },
    {
      number: "05",
      title: "Judgement Applied",
      iconKey: "calculator" as SoleTradersSolutionIconKey,
    },
    {
      number: "06",
      title: "Transparent Service",
      iconKey: "bar-chart" as SoleTradersSolutionIconKey,
    },
  ],
};

