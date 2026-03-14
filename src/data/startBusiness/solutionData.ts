import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type StartBusinessSolutionIconKey = BookkeepingSolutionIconKey;

export const START_BUSINESS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Establish Your Business Correctly",
  description:
    "Our approach focuses on building a clear legal and financial foundation before your business begins trading, so you can operate with confidence from day one.",
  steps: [
    {
      number: "01",
      title: "Assess Business Model & Risk Exposure",
      iconKey: "search" as StartBusinessSolutionIconKey,
    },
    {
      number: "02",
      title: "Select the Right Legal Structure",
      iconKey: "document-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "03",
      title: "Complete Statutory Registrations",
      iconKey: "badge-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "04",
      title: "Design a Compliance Calendar",
      iconKey: "clock" as StartBusinessSolutionIconKey,
    },
    {
      number: "05",
      title: "Implement Financial Reporting Discipline",
      iconKey: "calculator" as StartBusinessSolutionIconKey,
    },
  ],
};

export const START_BUSINESS_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises responsibility, accuracy, and transparency throughout every engagement.",
  steps: [
    {
      number: "01",
      title: "Accuracy Enforced",
      iconKey: "document-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "02",
      title: "Accountability Retained",
      iconKey: "target" as StartBusinessSolutionIconKey,
    },
    {
      number: "03",
      title: "Compliance Mandatory",
      iconKey: "badge-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "04",
      title: "Process Controlled",
      iconKey: "cogs" as StartBusinessSolutionIconKey,
    },
    {
      number: "05",
      title: "Judgement Applied",
      iconKey: "calculator" as StartBusinessSolutionIconKey,
    },
    {
      number: "06",
      title: "Transparent Service",
      iconKey: "bar-chart" as StartBusinessSolutionIconKey,
    },
  ],
};

