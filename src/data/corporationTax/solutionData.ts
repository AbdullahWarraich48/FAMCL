import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CorporationTaxSolutionIconKey = BookkeepingSolutionIconKey;

export const CORPORATION_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our process ensures corporation tax is managed accurately while identifying opportunities for better tax efficiency.",
  steps: [
    {
      number: "01",
      title: "Understand your business and structure",
      iconKey: "network" as CorporationTaxSolutionIconKey,
    },
    {
      number: "02",
      title: "Review past filings and risks",
      iconKey: "document-check" as CorporationTaxSolutionIconKey,
    },
    {
      number: "03",
      title: "Plan tax before deadlines",
      iconKey: "calendar-clock" as CorporationTaxSolutionIconKey,
    },
    {
      number: "04",
      title: "File accurately and on time",
      iconKey: "receipt-tax" as CorporationTaxSolutionIconKey,
    },
    {
      number: "05",
      title: "Act as your point of contact with HMRC",
      iconKey: "message" as CorporationTaxSolutionIconKey,
    },
  ],
};
