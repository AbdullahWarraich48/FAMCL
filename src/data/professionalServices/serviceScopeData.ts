import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ProfessionalServicesIconKey = BookkeepingServiceScopeIconKey;

export const PROFESSIONAL_SERVICES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Financial and operational guidance for professional service firms, including law, consultancy, and architecture, focusing on profitability, time tracking, and partner accounting.",
  items: [
    {
      title: "Financial & Operational Guidance",
      description:
        "Financial and operational guidance for professional service firms, including law, consultancy, and architecture.",
      iconKey: "bar-chart" as ProfessionalServicesIconKey,
    },
    {
      title: "Profitability",
      description: "Focusing on profitability across service lines and clients.",
      iconKey: "trend-up" as ProfessionalServicesIconKey,
    },
    {
      title: "Time Tracking",
      description: "Time tracking and billing systems optimised for fee recovery.",
      iconKey: "document-check" as ProfessionalServicesIconKey,
    },
    {
      title: "Partner Accounting",
      description: "Partner and director accounts, profit allocation, and extraction.",
      iconKey: "calculator" as ProfessionalServicesIconKey,
    },
    {
      title: "Regulatory Compliance",
      description:
        "SRA and other regulatory compliance for client accounts.",
      iconKey: "badge-check" as ProfessionalServicesIconKey,
    },
  ],
};
