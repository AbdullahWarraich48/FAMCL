import type {
  BookkeepingSolutionIconKey,
  SolutionData,
} from "@/data/bookkeeping/solutionData";

type VatSolutionIconKey = BookkeepingSolutionIconKey;

export const VAT_RETURNS_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver",
  description:
    "Our VAT management approach focuses on clarity, accuracy, and consistent compliance at every stage.",
  steps: [
    {
      number: "01",
      title: "Review VAT position and risks",
      iconKey: "search" as VatSolutionIconKey,
    },
    {
      number: "02",
      title: "Set up compliant digital software",
      iconKey: "cogs" as VatSolutionIconKey,
    },
    {
      number: "03",
      title: "Check VAT data before submission",
      iconKey: "document-check" as VatSolutionIconKey,
    },
    {
      number: "04",
      title: "File returns accurately and on time",
      iconKey: "receipt-tax" as VatSolutionIconKey,
    },
    {
      number: "05",
      title: "Support you during HMRC queries",
      iconKey: "message" as VatSolutionIconKey,
    },
  ],
};
