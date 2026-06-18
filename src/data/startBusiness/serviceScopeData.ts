import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type StartBusinessIconKey = BookkeepingServiceScopeIconKey;

export const START_BUSINESS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Set Up for Your Business",
  description:
    "Support for individuals establishing a business in the UK, focused on preventing early-stage structural, tax, and compliance errors that commonly affect sustainability. The service addresses both statutory requirements and operational readiness.",
  items: [
    {
      title: "UK Business Establishment",
      description:
        "Support for individuals establishing a business in the UK.",
      iconKey: "badge-check" as StartBusinessIconKey,
    },
    {
      title: "Structural Error Prevention",
      description:
        "Preventing early-stage structural errors that commonly affect sustainability.",
      iconKey: "document-check" as StartBusinessIconKey,
    },
    {
      title: "Tax & Compliance Setup",
      description:
        "Preventing early-stage tax and compliance errors before they create risk.",
      iconKey: "receipt-tax" as StartBusinessIconKey,
    },
    {
      title: "Statutory Requirements",
      description: "Addresses statutory requirements from the outset.",
      iconKey: "shield" as StartBusinessIconKey,
    },
    {
      title: "Operational Readiness",
      description: "Operational readiness before trading begins.",
      iconKey: "trend-up" as StartBusinessIconKey,
    },
  ],
};
