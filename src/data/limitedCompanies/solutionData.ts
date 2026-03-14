import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type LimitedCompaniesSolutionIconKey = BookkeepingSolutionIconKey;

export const LIMITED_COMPANIES_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Support Limited Companies",
  description:
    "Our structured approach ensures directors understand their responsibilities and maintain strong financial discipline within the company.",
  steps: [
    {
      number: "01",
      title: "Clarify Director Duties",
      iconKey: "document-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "02",
      title: "Maintain Statutory Records",
      iconKey: "boxes" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "03",
      title: "Prepare Accurate Accounts",
      iconKey: "bar-chart" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "04",
      title: "Manage Corporation Tax Planning",
      iconKey: "receipt-tax" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "05",
      title: "Support Compliance Decisions",
      iconKey: "cogs" as LimitedCompaniesSolutionIconKey,
    },
  ],
};

export const LIMITED_COMPANIES_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises accountability, clarity, and controlled financial processes.",
  steps: [
    {
      number: "01",
      title: "Accuracy Enforced",
      iconKey: "document-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "02",
      title: "Accountability Retained",
      iconKey: "target" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "03",
      title: "Compliance Mandatory",
      iconKey: "badge-check" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "04",
      title: "Process Controlled",
      iconKey: "cogs" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "05",
      title: "Judgement Applied",
      iconKey: "calculator" as LimitedCompaniesSolutionIconKey,
    },
    {
      number: "06",
      title: "Transparent Service",
      iconKey: "bar-chart" as LimitedCompaniesSolutionIconKey,
    },
  ],
};


