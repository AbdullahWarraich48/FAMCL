import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type VatSolutionIconKey = BookkeepingSolutionIconKey;

export const VAT_RETURNS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our VAT management approach focuses on clarity, accuracy, and consistent compliance. A structured process ensures every stage of your VAT reporting is handled correctly.",
  steps: [
    {
      number: "01",
      title: "Review VAT Position and Risks",
      iconKey: "search" as VatSolutionIconKey,
    },
    {
      number: "02",
      title: "Set Up Digital Systems",
      iconKey: "cogs" as VatSolutionIconKey,
    },
    {
      number: "03",
      title: "Review VAT Records before each submission",
      iconKey: "document-check" as VatSolutionIconKey,
    },
    {
      number: "04",
      title: "Prepare and submit VAT returns accurately and on time",
      iconKey: "receipt-tax" as VatSolutionIconKey,
    },
    {
      number: "05",
      title: "Support you during HMRC queries",
      iconKey: "message" as VatSolutionIconKey,
    },
  ],
};

