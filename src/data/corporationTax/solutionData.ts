import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type CorporationTaxSolutionIconKey = BookkeepingSolutionIconKey;

export const CORPORATION_TAX_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our process ensures corporation tax is managed accurately while identifying opportunities for better tax efficiency. Each step focuses on clarity, compliance, and proactive planning.",
  steps: [
    {
      number: "01",
      title: "Understand your business and structure",
      iconKey: "search" as CorporationTaxSolutionIconKey,
    },
    {
      number: "02",
      title: "Review past filings and potential risks",
      iconKey: "cogs" as CorporationTaxSolutionIconKey,
    },
    {
      number: "03",
      title: "Plan tax obligations before deadlines",
      iconKey: "message" as CorporationTaxSolutionIconKey,
    },
    {
      number: "04",
      title: "File corporation tax accurately and on time",
      iconKey: "bar-chart" as CorporationTaxSolutionIconKey,
    },
    {
      number: "05",
      title: "Act as your point of contact with HMRC",
      iconKey: "heart-check" as CorporationTaxSolutionIconKey,
    },
  ],
};

