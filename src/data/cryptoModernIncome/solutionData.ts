import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CryptoSolutionIconKey = BookkeepingSolutionIconKey;

export const CRYPTO_MODERN_INCOME_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured approach ensures that your crypto transactions are properly handled and compliant with UK tax laws.",
  steps: [
    {
      number: "01",
      title: "Review Crypto Activity",
      iconKey: "search" as CryptoSolutionIconKey,
    },
    {
      number: "02",
      title: "Identify Taxable Events",
      iconKey: "bar-chart" as CryptoSolutionIconKey,
    },
    {
      number: "03",
      title: "Calculate Liabilities Correctly",
      iconKey: "cogs" as CryptoSolutionIconKey,
    },
    {
      number: "04",
      title: "Report Accurately",
      iconKey: "message" as CryptoSolutionIconKey,
    },
    {
      number: "05",
      title: "Advise on Future Compliance",
      iconKey: "heart-check" as CryptoSolutionIconKey,
    },
  ],
};

