import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type NotForProfitIconKey = BookkeepingServiceScopeIconKey;

export const NOT_FOR_PROFIT_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Organisation",
  description:
    "Financial reporting, governance, and assurance services for charities and not-for-profit organisations, ensuring compliance with Charity Commission regulations and SORP.",
  items: [
    {
      title: "Financial Reporting",
      description:
        "Financial reporting compliant with Charity SORP requirements.",
      iconKey: "document-check" as NotForProfitIconKey,
    },
    {
      title: "Governance & Assurance",
      description:
        "Governance and assurance services for charities and not-for-profit organisations.",
      iconKey: "shield" as NotForProfitIconKey,
    },
    {
      title: "Charity Commission Compliance",
      description:
        "Ensuring compliance with Charity Commission regulations.",
      iconKey: "badge-check" as NotForProfitIconKey,
    },
    {
      title: "SORP Compliance",
      description: "Accounts and reporting aligned to Charity SORP.",
      iconKey: "calculator" as NotForProfitIconKey,
    },
    {
      title: "Fund Accounting",
      description:
        "Fund accounting including restricted and unrestricted funds.",
      iconKey: "boxes" as NotForProfitIconKey,
    },
  ],
};
