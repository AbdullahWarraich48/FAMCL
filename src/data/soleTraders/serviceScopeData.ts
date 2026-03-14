import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type SoleTradersServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const SOLE_TRADERS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Support for Sole Traders",
  description:
    "Sole Traders often manage their finances independently, which can lead to gaps in compliance, record-keeping, or tax planning. Our service provides structured support to ensure your self-employed work remains organised, compliant, and financially clear.",
  items: [
    {
      title: "Record-Keeping Systems",
      description:
        "We establish disciplined record-keeping processes that meet HMRC requirements and support accurate reporting.",
      iconKey: "document-check" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Business & Personal Finance Separation",
      description:
        "We help you clearly separate business and personal finances so your activity is easy to track and explain.",
      iconKey: "boxes" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Allowable Expense Guidance",
      description:
        "We identify legitimate business expenses while ensuring claims remain compliant with HMRC rules.",
      iconKey: "receipt-tax" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Tax Planning Support",
      description:
        "We help plan your tax liabilities in advance so you can prepare for Self Assessment deadlines with confidence.",
      iconKey: "calculator" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Profitability & Financial Visibility",
      description:
        "We provide insight into your business income, expenses, and profitability so you can make informed decisions.",
      iconKey: "bar-chart" as SoleTradersServiceScopeIconKey,
    },
  ],
};

