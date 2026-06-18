import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

export const ACCOUNTS_AND_BOOKKEEPING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business.",
  description:
    "We maintain accurate, up-to-date financial records that show the real position of your business. Your income, costs, and margins are clearly organized. Nothing is hidden and confusing. You always know where your business stands. Year-end accounts stop being stressful. Cash flow becomes visible, not guessed. Your decisions are based on facts, not assumptions.",
  items: [
    {
      title: "Accurate & Up-to-Date Records",
      description:
        "We maintain accurate, up-to-date financial records that show the real position of your business.",
      iconKey: "document-check" as BookkeepingServiceScopeIconKey,
    },
    {
      title: "Clear Income & Cost Tracking",
      description:
        "Your income, costs, and margins are clearly organized. Nothing is hidden and confusing.",
      iconKey: "bar-chart" as BookkeepingServiceScopeIconKey,
    },
    {
      title: "Always Know Where You Stand",
      description: "You always know where your business stands.",
      iconKey: "eye" as BookkeepingServiceScopeIconKey,
    },
    {
      title: "Stress-Free Year End",
      description: "Year-end accounts stop being stressful.",
      iconKey: "shield" as BookkeepingServiceScopeIconKey,
    },
    {
      title: "Visible Cash Flow & Fact-Based Decisions",
      description:
        "Cash flow becomes visible, not guessed. Your decisions are based on facts, not assumptions.",
      iconKey: "trend-up" as BookkeepingServiceScopeIconKey,
    },
  ],
};
