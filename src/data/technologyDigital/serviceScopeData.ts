import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type TechnologyDigitalIconKey = BookkeepingServiceScopeIconKey;

export const TECHNOLOGY_DIGITAL_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Technology companies face unique financial challenges, from managing rapid growth to navigating investor expectations. We provide financial guidance designed specifically for startups, SaaS companies, and fast-growing digital businesses.",
  items: [
    {
      title: "Financial Models & Forecasting",
      description:
        "We develop robust financial models to support forecasting, investment readiness, and strategic planning.",
      iconKey: "bar-chart" as TechnologyDigitalIconKey,
    },
    {
      title: "Employee Share Option Schemes",
      description:
        "We structure and administer EMI and other employee share option schemes to attract and retain talent.",
      iconKey: "users" as TechnologyDigitalIconKey,
    },
    {
      title: "Revenue Recognition for SaaS & Projects",
      description:
        "We manage complex revenue recognition for subscription-based SaaS businesses and project-based digital services.",
      iconKey: "document-check" as TechnologyDigitalIconKey,
    },
    {
      title: "R&D Tax Credit Claims",
      description:
        "We ensure your R&D tax credit claims are maximised and fully compliant with HMRC requirements.",
      iconKey: "flask" as TechnologyDigitalIconKey,
    },
    {
      title: "Outsourced Finance Director Support",
      description:
        "We provide finance-director-level support to help secure business growth, funding, and financial strategy.",
      iconKey: "target" as TechnologyDigitalIconKey,
    },
  ],
} as const;

