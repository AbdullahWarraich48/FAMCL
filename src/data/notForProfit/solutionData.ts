import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type NotForProfitSolutionIconKey = BookkeepingSolutionIconKey;

export const NOT_FOR_PROFIT_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our structured approach ensures charities and not-for-profit organisations maintain compliance while strengthening financial governance.",
  steps: [
    {
      number: "01",
      title:
        "Prepare and independently examine accounts compliant with Charity SORP",
      iconKey: "document-check" as NotForProfitSolutionIconKey,
    },
    {
      number: "02",
      title: "Advise on fund accounting, including restricted and unrestricted funds",
      iconKey: "calculator" as NotForProfitSolutionIconKey,
    },
    {
      number: "03",
      title:
        "Ensure compliance with Charity Commission and regulatory filing requirements",
      iconKey: "badge-check" as NotForProfitSolutionIconKey,
    },
    {
      number: "04",
      title: "Provide guidance on VAT for charities and trading subsidiaries",
      iconKey: "receipt-tax" as NotForProfitSolutionIconKey,
    },
    {
      number: "05",
      title:
        "Assist trustees in fulfilling their financial governance responsibilities",
      iconKey: "target" as NotForProfitSolutionIconKey,
    },
  ],
};
