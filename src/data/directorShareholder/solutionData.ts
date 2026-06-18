import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type DirectorSolutionIconKey = BookkeepingSolutionIconKey;

export const DIRECTOR_SHAREHOLDER_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured advisory service helps directors and shareholders navigate their duties, optimise tax strategies, and stay compliant.",
  steps: [
    {
      number: "01",
      title: "Review your current director and shareholder arrangements",
      iconKey: "search" as DirectorSolutionIconKey,
    },
    {
      number: "02",
      title:
        "Explain your legal duties and tax obligations in plain English",
      iconKey: "message" as DirectorSolutionIconKey,
    },
    {
      number: "03",
      title: "Advise on tax-efficient salary and dividend strategies",
      iconKey: "calculator" as DirectorSolutionIconKey,
    },
    {
      number: "04",
      title:
        "Ensure correct administration and documentation for dividends and loans",
      iconKey: "document-check" as DirectorSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Provide ongoing support for board resolutions and shareholder agreements",
      iconKey: "network" as DirectorSolutionIconKey,
    },
  ],
};
