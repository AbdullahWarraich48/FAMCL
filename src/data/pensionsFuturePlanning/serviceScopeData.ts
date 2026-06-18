import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type PensionsServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const PENSIONS_FUTURE_PLANNING_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We help you understand and plan your pension position. Contributions are reviewed for tax efficiency. Long-term goals are aligned with current finances. Options are explained in simple terms. Your future income becomes clearer. Planning replaces uncertainty. Manage reporting to The Pension Regulator.",
  items: [
    {
      title: "Understand & Plan",
      description: "We help you understand and plan your pension position.",
      iconKey: "bar-chart" as PensionsServiceScopeIconKey,
    },
    {
      title: "Tax-Efficient Contributions",
      description: "Contributions are reviewed for tax efficiency.",
      iconKey: "badge-percent" as PensionsServiceScopeIconKey,
    },
    {
      title: "Goals Aligned",
      description: "Long-term goals are aligned with current finances.",
      iconKey: "target" as PensionsServiceScopeIconKey,
    },
    {
      title: "Clear Options & Income",
      description:
        "Options are explained in simple terms. Your future income becomes clearer.",
      iconKey: "message-square" as PensionsServiceScopeIconKey,
    },
    {
      title: "Planning & Regulator Reporting",
      description:
        "Planning replaces uncertainty. Manage reporting to The Pension Regulator.",
      iconKey: "badge-check" as PensionsServiceScopeIconKey,
    },
  ],
};
