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
  | "clock"
  | "network"
  | "calendar-clock"
  | "monitor";

export type SolutionData = {
  /** Optional pill label above the heading (e.g. “Solution & Framework”) */
  sectionLabel?: string;
  heading: string;
  description: string;
  steps: ReadonlyArray<{
    number: string;
    title: string;
    iconKey: BookkeepingSolutionIconKey;
  }>;
};

export const BOOKKEEPING_SOLUTION_DATA: SolutionData = {
  heading: "How we deliver",
  description:
    "Our approach is structured and practical. We focus on clarity first, then consistency. A clear, step-by-step process to get your finances in order.",
  steps: [
    {
      number: "01",
      title: "Review your existing records",
      iconKey: "search",
    },
    {
      number: "02",
      title: "Clean and structure your accounts",
      iconKey: "boxes",
    },
    {
      number: "03",
      title: "Set up simple digital bookkeeping",
      iconKey: "monitor",
    },
    {
      number: "04",
      title: "Provide regular, readable reports",
      iconKey: "bar-chart",
    },
    {
      number: "05",
      title: "Support you year-round, not just at year end",
      iconKey: "heart-check",
    },
  ],
} as const;

