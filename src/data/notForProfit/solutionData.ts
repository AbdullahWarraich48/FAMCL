import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type NotForProfitSolutionIconKey = BookkeepingSolutionIconKey;

export const NOT_FOR_PROFIT_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our structured approach ensures charities and not-for-profit organisations maintain compliance while strengthening financial governance.",
  steps: [
    {
      number: "01",
      title: "Prepare SORP-Compliant Accounts",
      iconKey: "document-check" as NotForProfitSolutionIconKey,
    },
    {
      number: "02",
      title: "Advise on Fund Accounting",
      iconKey: "calculator" as NotForProfitSolutionIconKey,
    },
    {
      number: "03",
      title: "Ensure Regulatory Compliance",
      iconKey: "badge-check" as NotForProfitSolutionIconKey,
    },
    {
      number: "04",
      title: "Provide VAT Guidance",
      iconKey: "receipt-tax" as NotForProfitSolutionIconKey,
    },
    {
      number: "05",
      title: "Support Trustee Governance",
      iconKey: "target" as NotForProfitSolutionIconKey,
    },
  ],
} as const;

