import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type VatServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const VAT_RETURNS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "We manage VAT registration, returns, and digital submissions. Your VAT is checked before it is filed. Errors are reduced. Records remain audit-ready at all times. Digital systems are kept compliant and simple.",
  items: [
    {
      title: "Registration & Returns",
      description:
        "We manage VAT registration, returns, and digital submissions.",
      iconKey: "badge-check" as VatServiceScopeIconKey,
    },
    {
      title: "Pre-Filing Checks",
      description: "Your VAT is checked before it is filed.",
      iconKey: "document-check" as VatServiceScopeIconKey,
    },
    {
      title: "Reduced Errors",
      description: "Errors are reduced.",
      iconKey: "receipt-tax" as VatServiceScopeIconKey,
    },
    {
      title: "Audit-Ready Records",
      description: "Records remain audit-ready at all times.",
      iconKey: "boxes" as VatServiceScopeIconKey,
    },
    {
      title: "Digital Compliance",
      description: "Digital systems are kept compliant and simple.",
      iconKey: "network" as VatServiceScopeIconKey,
    },
  ],
};
