import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type DirectorServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const DIRECTOR_SHAREHOLDER_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We provide clear, practical advice to company directors and shareholders on their legal duties, tax responsibilities, and financial obligations. This includes guidance on profit extraction, dividend administration, director loans, and managing conflicts of interest, ensuring you act in full compliance with UK company law.",
  items: [
    {
      title: "Legal Duties & Obligations",
      description:
        "We provide clear, practical advice to company directors and shareholders on their legal duties, tax responsibilities, and financial obligations.",
      iconKey: "scale" as DirectorServiceScopeIconKey,
    },
    {
      title: "Profit Extraction",
      description: "Guidance on profit extraction.",
      iconKey: "trend-up" as DirectorServiceScopeIconKey,
    },
    {
      title: "Dividend Administration",
      description: "Guidance on dividend administration.",
      iconKey: "receipt-tax" as DirectorServiceScopeIconKey,
    },
    {
      title: "Director Loans",
      description: "Guidance on director loans.",
      iconKey: "calculator" as DirectorServiceScopeIconKey,
    },
    {
      title: "Conflicts & Compliance",
      description:
        "Managing conflicts of interest, ensuring you act in full compliance with UK company law.",
      iconKey: "shield" as DirectorServiceScopeIconKey,
    },
  ],
};
