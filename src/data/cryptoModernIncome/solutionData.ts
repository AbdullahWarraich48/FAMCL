import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CryptoSolutionIconKey = BookkeepingSolutionIconKey;

export const CRYPTO_MODERN_INCOME_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach ensures your crypto activity is reviewed, reported accurately, and kept compliant with UK tax law.",
  steps: [
    {
      number: "01",
      title: "Review crypto activity",
      iconKey: "search" as CryptoSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify taxable events",
      iconKey: "document-check" as CryptoSolutionIconKey,
    },
    {
      number: "03",
      title: "Calculate liabilities correctly",
      iconKey: "calculator" as CryptoSolutionIconKey,
    },
    {
      number: "04",
      title: "Report accurately",
      iconKey: "receipt-tax" as CryptoSolutionIconKey,
    },
    {
      number: "05",
      title: "Advise on future compliance",
      iconKey: "message" as CryptoSolutionIconKey,
    },
  ],
};
