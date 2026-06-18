import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type LimitedCompaniesSolutionIconKey = BookkeepingSolutionIconKey;

export const LIMITED_COMPANIES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solutions & Roadmap",
  heading: "How We Support Limited Companies",
  description:
    "Our structured approach ensures directors understand their responsibilities and maintain strong financial discipline within the company.",
  steps: [
    {
      number: "01",
      title: "Clarify director duties and reporting responsibilities",
      iconKey: "document-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "02",
      title: "Maintain statutory records correctly",
      iconKey: "boxes" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "03",
      title: "Prepare accounts aligned to both HMRC and Companies House",
      iconKey: "bar-chart" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "04",
      title: "Manage Corporation Tax planning proactively",
      iconKey: "receipt-tax" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "05",
      title: "Support directors through compliance decisions",
      iconKey: "cogs" as LimitedCompaniesSolutionIconKey,
    },
  ],
};

export const LIMITED_COMPANIES_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants Trust Matrix",
  description:
    "Accuracy enforced. Compliance mandatory. Judgement applied. Process controlled. Accountability retained.",
  steps: [
    {
      number: "01",
      title: "Accuracy enforced",
      iconKey: "document-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "02",
      title: "Compliance mandatory",
      iconKey: "badge-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "03",
      title: "Judgement applied",
      iconKey: "calculator" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "04",
      title: "Process controlled",
      iconKey: "cogs" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "05",
      title: "Accountability retained",
      iconKey: "target" as LimitedCompaniesSolutionIconKey,
    },
  ],
};
