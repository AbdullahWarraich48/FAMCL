import type {
  ServiceScopeData,
  BookkeepingServiceScopeIconKey,
} from "@/data/bookkeeping/serviceScopeData";

type ConstructionPropertyIconKey = BookkeepingServiceScopeIconKey;

export const CONSTRUCTION_PROPERTY_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "We offer accounting and tax services specifically designed for the construction and property sectors. From CIS compliance to VAT management, we ensure your projects are financially sound and legally compliant.",
  items: [
    {
      title: "CIS Registration & Compliance",
      description:
        "We assist with the registration and management of the Construction Industry Scheme (CIS), ensuring compliance with HMRC rules and avoiding penalties.",
      iconKey: "hard-hat" as ConstructionPropertyIconKey,
    },
    {
      title: "Project Profitability & Cost Tracking",
      description:
        "We implement project-based accounting, providing clear visibility of project costs and margins to ensure profitability.",
      iconKey: "calculator" as ConstructionPropertyIconKey,
    },
    {
      title: "VAT Implications for Property Transactions",
      description:
        "We advise on VAT rules for property transactions, including zero-rating & reverse charges, ensuring compliance & minimising costs.",
      iconKey: "receipt-tax" as ConstructionPropertyIconKey,
    },
    {
      title: "Industry-Specific Regulatory Compliance",
      description:
        "We ensure your business complies with industry-specific regulations, keeping your operations protected.",
      iconKey: "badge-check" as ConstructionPropertyIconKey,
    },
    {
      title: "Financial Data for Project Bids & Financing",
      description:
        "We provide accurate financial data to support your project bids, financing, and other key decisions.",
      iconKey: "target" as ConstructionPropertyIconKey,
    },
  ],
} as const;

