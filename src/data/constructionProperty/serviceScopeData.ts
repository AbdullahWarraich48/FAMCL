import type {
  ServiceScopeData,
  BookkeepingServiceScopeIconKey,
} from "@/data/bookkeeping/serviceScopeData";

type ConstructionPropertyIconKey = BookkeepingServiceScopeIconKey;

export const CONSTRUCTION_PROPERTY_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "Specialised accounting and tax services for the UK construction and property sectors, addressing CIS, project profitability, and regulatory compliance.",
  items: [
    {
      title: "Specialised Accounting & Tax",
      description:
        "Specialised accounting and tax services for the UK construction and property sectors.",
      iconKey: "calculator" as ConstructionPropertyIconKey,
    },
    {
      title: "CIS Compliance",
      description: "Addressing CIS registration, verification, and returns.",
      iconKey: "hard-hat" as ConstructionPropertyIconKey,
    },
    {
      title: "Project Profitability",
      description: "Project profitability tracking and margin protection.",
      iconKey: "bar-chart" as ConstructionPropertyIconKey,
    },
    {
      title: "Regulatory Compliance",
      description: "Regulatory compliance across industry-specific requirements.",
      iconKey: "shield" as ConstructionPropertyIconKey,
    },
    {
      title: "Property & VAT",
      description:
        "VAT implications for property, including zero-rating and reverse charges.",
      iconKey: "receipt-tax" as ConstructionPropertyIconKey,
    },
  ],
};
