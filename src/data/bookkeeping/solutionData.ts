export type BookkeepingSolutionIconKey =
  | "search"
  | "cogs"
  | "message"
  | "bar-chart"
  | "heart-check"
  | "hard-hat"
  | "calculator"
  | "document-check"
  | "receipt-tax"
  | "badge-check"
  | "target"
  | "boxes"
  | "flask"
  | "factory"
  | "clock";

export type SolutionData = {
  sectionLabel: string;
  heading: string;
  description: string;
  steps: ReadonlyArray<{
    number: string;
    title: string;
    iconKey: BookkeepingSolutionIconKey;
  }>;
};

export const BOOKKEEPING_SOLUTION_DATA: SolutionData = {
  sectionLabel: "Solution & Framework",
  heading: "How We Deliver This Service",
  description:
    "Our VAT management approach focuses on clarity, accuracy, and consistent compliance. A structured process ensures every stage of your VAT reporting is handled correctly.",
  steps: [
    { number: "01", title: "Review VAT Position and Risks", iconKey: "search" },
    { number: "02", title: "Set Up Digital Systems", iconKey: "cogs" },
    {
      number: "03",
      title: "Review VAT Records before each submission",
      iconKey: "message",
    },
    {
      number: "04",
      title: "Prepare and submit VAT returns accurately and on time",
      iconKey: "bar-chart",
    },
    { number: "05", title: "Support you during HMRC enquiries", iconKey: "heart-check" },
  ],
} as const;

