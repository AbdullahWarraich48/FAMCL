import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type VatServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const VAT_RETURNS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "VAT obligations involve more than simply submitting a return. Proper registration, accurate records, and compliant digital systems are essential for avoiding errors and maintaining HMRC compliance. Our service ensures your VAT processes remain organised, transparent, and reliable.",
  items: [
    {
      title: "VAT Registration & Setup",
      description:
        "We assist with VAT registration and ensure your business is registered under the correct VAT scheme.",
      iconKey: "document-check" as VatServiceScopeIconKey,
    },
    {
      title: "Digital VAT Compliance",
      description:
        "We help keep your digital VAT systems compliant with Making Tax Digital requirements.",
      iconKey: "bar-chart" as VatServiceScopeIconKey,
    },
    {
      title: "VAT Return Preparation",
      description:
        "All VAT data is reviewed and prepared before submission to minimise reporting errors.",
      iconKey: "shield" as VatServiceScopeIconKey,
    },
    {
      title: "Accurate Filing",
      description:
        "VAT returns are prepared and submitted to HMRC on time to maintain compliance.",
      iconKey: "eye" as VatServiceScopeIconKey,
    },
    {
      title: "Organised Record Maintenance",
      description:
        "Your VAT records remain structured, clear, and audit-ready at all times.",
      iconKey: "trend-up" as VatServiceScopeIconKey,
    },
  ],
};

