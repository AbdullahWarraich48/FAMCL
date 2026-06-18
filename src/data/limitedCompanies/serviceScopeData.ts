import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type LimitedCompaniesServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const LIMITED_COMPANIES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Mandate",
  heading: "What We Manage for Limited Companies",
  description:
    "Accounting, tax, and compliance support for UK limited companies, with emphasis on director responsibility, statutory obligations, and risk control.",
  items: [
    {
      title: "Accounting Support",
      description:
        "Accounting support for UK limited companies with clear financial reporting.",
      iconKey: "bar-chart" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Tax Support",
      description: "Tax support including Corporation Tax planning and compliance.",
      iconKey: "receipt-tax" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Compliance Support",
      description: "Compliance support aligned to HMRC and Companies House requirements.",
      iconKey: "badge-check" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Director Responsibility",
      description: "Emphasis on director responsibility and reporting obligations.",
      iconKey: "shield" as LimitedCompaniesServiceScopeIconKey,
    },
    {
      title: "Statutory Obligations & Risk Control",
      description:
        "Statutory obligations managed with structured risk control.",
      iconKey: "document-check" as LimitedCompaniesServiceScopeIconKey,
    },
  ],
};
