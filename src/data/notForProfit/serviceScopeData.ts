import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type NotForProfitIconKey = BookkeepingServiceScopeIconKey;

export const NOT_FOR_PROFIT_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Organisation",
  description:
    "Not-for-profit organisations require careful financial governance to maintain accountability and transparency. Our services help charities and mission-driven organisations manage reporting, compliance, and financial oversight effectively.",
  items: [
    {
      title: "Charity Financial Reporting",
      description:
        "We prepare and review financial statements in accordance with Charity SORP requirements.",
      iconKey: "document-check" as NotForProfitIconKey,
    },
    {
      title: "Fund Accounting & Financial Management",
      description:
        "We advise on fund tracking, ensuring restricted, unrestricted, and designated funds are managed and reported clearly.",
      iconKey: "calculator" as NotForProfitIconKey,
    },
    {
      title: "Regulatory Compliance & Filings",
      description:
        "We ensure your organisation meets Charity Commission requirements and all regulatory filing obligations.",
      iconKey: "badge-check" as NotForProfitIconKey,
    },
    {
      title: "VAT Guidance for Charities",
      description:
        "We provide advice on VAT matters affecting charities, including trading subsidiaries and VAT recovery rules.",
      iconKey: "receipt-tax" as NotForProfitIconKey,
    },
    {
      title: "Trustee Governance Support",
      description:
        "We assist trustees in understanding their financial responsibilities and maintaining strong governance standards.",
      iconKey: "target" as NotForProfitIconKey,
    },
  ],
} as const;

