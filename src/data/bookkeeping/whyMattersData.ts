export type BookkeepingWhyMattersIconKey =
  | "alert-triangle"
  | "check-square"
  | "shield"
  | "activity"
  | "circle-dollar"
  | "zap"
  | "trend-up"
  | "clock"
  | "clipboard-check"
  | "alert-octagon"
  | "scale"
  | "chart-line"
  | "eye"
  | "flask"
  | "cogs"
  | "leaf"
  | "heart-check"
  | "anchor"
  | "arrow-left-right";

export type WhyMattersData = {
  sectionLabel: string;
  heading: string;
  description: string;
  items: ReadonlyArray<{
    title: string;
    description: string;
    iconKey: BookkeepingWhyMattersIconKey;
  }>;
};

export const BOOKKEEPING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Value Behind Proper Records",
  description:
    "Poor financial records rarely cause immediate damage. Instead, they create slow uncertainty that affects decisions, growth, and compliance. Clear records reduce risk, improve confidence, and give you control over your business direction.",
  items: [
    {
      title: "Reduced Risk",
      description:
        "Accurate numbers reduce the risk of costly errors and regulatory penalties.",
      iconKey: "shield",
    },
    {
      title: "Faster Decisions",
      description:
        "When information is organised, action becomes quicker and more confident.",
      iconKey: "zap",
    },
    {
      title: "HMRC Protection",
      description:
        "Accurate records provide security during reviews or investigations.",
      iconKey: "clipboard-check",
    },
    {
      title: "Lower Stress",
      description:
        "Clarity removes the pressure of uncertainty and last-minute surprises.",
      iconKey: "activity",
    },
    {
      title: "Stronger Cash Flow Awareness",
      description:
        "You gain visibility over income and expenditure, allowing better financial planning.",
      iconKey: "circle-dollar",
    },
    {
      title: "Greater Business Control",
      description:
        "You understand exactly where your business stands at any moment.",
      iconKey: "chart-line",
    },
  ],
} as const;

