import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type DirectorSolutionIconKey = BookkeepingSolutionIconKey;

export const DIRECTOR_SHAREHOLDER_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured advisory service helps directors and shareholders navigate their duties and responsibilities, ensuring compliance, optimising tax strategies, and protecting personal assets.",
  steps: [
    {
      number: "01",
      title: "Review Your Director & Shareholder Arrangements",
      iconKey: "search" as DirectorSolutionIconKey,
    },
    {
      number: "02",
      title: "Explain Legal Duties & Tax Obligations",
      iconKey: "message" as DirectorSolutionIconKey,
    },
    {
      number: "03",
      title: "Advise on Tax-Efficient Salary & Dividends",
      iconKey: "calculator" as DirectorSolutionIconKey,
    },
    {
      number: "04",
      title: "Ensure Proper Dividend & Loan Documentation",
      iconKey: "document-check" as DirectorSolutionIconKey,
    },
    {
      number: "05",
      title: "Provide Ongoing Support & Guidance",
      iconKey: "message" as DirectorSolutionIconKey,
    },
  ],
};

