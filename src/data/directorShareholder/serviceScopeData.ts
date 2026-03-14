import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type DirectorServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const DIRECTOR_SHAREHOLDER_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "Company directors and shareholders face complex legal, tax, and financial responsibilities. We provide guidance to ensure compliance with the law, optimise tax strategies, and manage potential conflicts of interest.",
  items: [
    {
      title: "Director & Shareholder Duties",
      description:
        "We help directors and shareholders understand and meet their legal duties and obligations under UK company law.",
      iconKey: "document-check" as DirectorServiceScopeIconKey,
    },
    {
      title: "Profit Extraction & Dividend Administration",
      description:
        "We advise on tax-efficient strategies for profit extraction and ensure dividends are paid and documented correctly.",
      iconKey: "bar-chart" as DirectorServiceScopeIconKey,
    },
    {
      title: "Director Loans & Compliance",
      description:
        "We ensure director loans are managed in accordance with tax rules and company law, avoiding personal liability.",
      iconKey: "shield" as DirectorServiceScopeIconKey,
    },
    {
      title: "Managing Conflicts of Interest",
      description:
        "We provide strategies for managing conflicts of interest to ensure governance remains clear and transparent.",
      iconKey: "eye" as DirectorServiceScopeIconKey,
    },
    {
      title: "Ongoing Support for Governance",
      description:
        "We offer continuous support with board resolutions, shareholder agreements, and maintaining good corporate governance.",
      iconKey: "trend-up" as DirectorServiceScopeIconKey,
    },
  ],
};

