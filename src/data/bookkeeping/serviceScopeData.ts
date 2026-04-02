export type BookkeepingServiceScopeIconKey =
  | "document-check"
  | "bar-chart"
  | "shield"
  | "eye"
  | "trend-up"
  | "hard-hat"
  | "calculator"
  | "receipt-tax"
  | "badge-check"
  | "target"
  | "flask"
  | "boxes"
  | "factory"
  | "users"
  | "calendar-clock"
  | "badge-percent"
  | "network"
  | "message-square"
  | "search"
  | "scale";

export type ServiceScopeData = {
  sectionLabel: string;
  heading: string;
  description: string;
  items: ReadonlyArray<{
    title: string;
    description: string;
    iconKey: BookkeepingServiceScopeIconKey;
  }>;
};

export const BOOKKEEPING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business.",
  description:
    "Maintaining accurate financial records is not just about compliance. It creates clarity across your operations and ensures you always understand your financial position. We organise your records so your business runs with structure and visibility.",
  items: [
    {
      title: "Accurate & Up-to-Date Records",
      description:
        "We maintain precise financial data that reflects the true position of your business.",
      iconKey: "document-check",
    },
    {
      title: "Clear Income & Cost Tracking",
      description:
        "Your income, expenses, and margins are organised clearly, with nothing hidden or confusing.",
      iconKey: "bar-chart",
    },
    {
      title: "Stress-Free Year End",
      description:
        "Well-maintained records make annual accounts straightforward and manageable.",
      iconKey: "shield",
    },
    {
      title: "Visible Cash Flow",
      description: "Cash flow becomes measurable and trackable, not estimated.",
      iconKey: "eye",
    },
    {
      title: "Fact-Based Decisions",
      description:
        "You make decisions using reliable data rather than assumptions.",
      iconKey: "trend-up",
    },
  ],
} as const;

