import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type ProfessionalServicesIconKey = BookkeepingServiceScopeIconKey;

export const PROFESSIONAL_SERVICES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Industry",
  description:
    "We offer tailored financial management and advisory services to professional service firms, ensuring that billing is efficient, project costs are accurately tracked, and partner structures are optimised for profitability.",
  items: [
    {
      title: "Optimise Time Recording & Billing Systems",
      description:
        "We help implement systems that track time accurately and bill clients efficiently, ensuring maximum revenue recovery.",
      iconKey: "document-check" as ProfessionalServicesIconKey,
    },
    {
      title: "Manage Partner/Director Accounts & Profit Allocation",
      description:
        "We provide advice on managing partner/director accounts, ensuring fair and efficient profit allocation.",
      iconKey: "calculator" as ProfessionalServicesIconKey,
    },
    {
      title: "Ensure Regulatory Compliance for Client Accounts",
      description:
        "We ensure your firm complies with SRA and other regulatory requirements for managing client funds and accounts.",
      iconKey: "badge-check" as ProfessionalServicesIconKey,
    },
    {
      title: "Analyse Service Line & Client Profitability",
      description:
        "We offer insights into your service lines and client profitability, helping you identify areas for improvement.",
      iconKey: "bar-chart" as ProfessionalServicesIconKey,
    },
    {
      title: "Tax-Efficient Structuring & Profit Extraction",
      description:
        "We advise on the most tax-efficient ways to structure your firm and extract profits, minimising your tax liability.",
      iconKey: "receipt-tax" as ProfessionalServicesIconKey,
    },
  ],
} as const;

