import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type PensionsServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const PENSIONS_FUTURE_PLANNING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "Pension planning is about more than just saving. We ensure that your contributions are tax-efficient and aligned with your long-term financial goals, giving you a clear path to a secure retirement.",
  items: [
    {
      title: "Review Pension Position",
      description:
        "We assess your current pension situation and provide clarity on your projected future income.",
      iconKey: "document-check" as PensionsServiceScopeIconKey,
    },
    {
      title: "Tax-Efficient Contributions",
      description:
        "Contribution patterns are reviewed to ensure your savings are optimised for better tax efficiency and long-term growth.",
      iconKey: "bar-chart" as PensionsServiceScopeIconKey,
    },
    {
      title: "Align Goals with Current Finances",
      description:
        "Your retirement goals are aligned with your current financial situation, ensuring realistic, achievable planning.",
      iconKey: "trend-up" as PensionsServiceScopeIconKey,
    },
    {
      title: "Explain Options Clearly",
      description:
        "We provide simple, clear explanations of your pension options, allowing you to make informed decisions.",
      iconKey: "eye" as PensionsServiceScopeIconKey,
    },
    {
      title: "Reporting to The Pension Regulator",
      description:
        "We handle all necessary reporting to The Pension Regulator to ensure ongoing compliance.",
      iconKey: "shield" as PensionsServiceScopeIconKey,
    },
  ],
};

