import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type StartBusinessSolutionIconKey = BookkeepingSolutionIconKey;

export const START_BUSINESS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solutions & Framework",
  heading: "How We Establish Your Business Correctly",
  description:
    "Our approach focuses on building a clear legal and financial foundation before your business begins trading.",
  steps: [
    {
      number: "01",
      title: "Assess the nature of income, risk exposure, and scalability",
      iconKey: "search" as StartBusinessSolutionIconKey,
    },
    {
      number: "02",
      title: "Select a structure aligned to tax efficiency and liability control",
      iconKey: "document-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "03",
      title: "Establish statutory registrations without over-complication",
      iconKey: "badge-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "04",
      title: "Design a compliance calendar before trading begins",
      iconKey: "calendar-clock" as StartBusinessSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Put reporting discipline in place to support future growth or funding",
      iconKey: "calculator" as StartBusinessSolutionIconKey,
    },
    {
      number: "06",
      title: "Transfer pricing between the subsidiaries",
      iconKey: "network" as StartBusinessSolutionIconKey,
    },
  ],
};

export const START_BUSINESS_TRUST_MATRIX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants Trust Matrix",
  description:
    "Accuracy enforced. Compliance mandatory. Judgement applied. Process controlled. Accountability retained.",
  steps: [
    {
      number: "01",
      title: "Accuracy enforced",
      iconKey: "document-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "02",
      title: "Compliance mandatory",
      iconKey: "badge-check" as StartBusinessSolutionIconKey,
    },
    {
      number: "03",
      title: "Judgement applied",
      iconKey: "calculator" as StartBusinessSolutionIconKey,
    },
    {
      number: "04",
      title: "Process controlled",
      iconKey: "cogs" as StartBusinessSolutionIconKey,
    },
    {
      number: "05",
      title: "Accountability retained",
      iconKey: "target" as StartBusinessSolutionIconKey,
    },
    {
      number: "06",
      title: "Transparent Service",
      iconKey: "bar-chart" as StartBusinessSolutionIconKey,
    },
  ],
};
