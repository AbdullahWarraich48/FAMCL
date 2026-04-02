import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CorporationTaxIconKey = BookkeepingServiceScopeIconKey;

export const CORPORATION_TAX_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "Corporation tax management involves more than simply submitting returns. It requires accurate calculation, careful planning, and consistent compliance with HMRC regulations. Our approach ensures your tax obligations are handled professionally while identifying opportunities to improve efficiency and reduce unnecessary tax payments.",
  items: [
    {
      title: "Tax Calculation & Filing",
      description:
        "We calculate your corporation tax accurately and prepare compliant filings according to UK regulations.",
      iconKey: "calculator" as CorporationTaxIconKey,
    },
    {
      title: "Tax Planning Ahead of Deadlines",
      description:
        "Your tax position is planned early so deadlines are never missed and surprises are avoided.",
      iconKey: "calendar-clock" as CorporationTaxIconKey,
    },
    {
      title: "Reliefs & Allowances Identification",
      description:
        "Eligible tax reliefs and allowances are identified so you do not miss legitimate savings.",
      iconKey: "badge-percent" as CorporationTaxIconKey,
    },
    {
      title: "Business Structure Review",
      description:
        "Your company structure is reviewed to ensure it remains tax-efficient as your business grows.",
      iconKey: "network" as CorporationTaxIconKey,
    },
    {
      title: "HMRC Communication Management",
      description:
        "We handle communication with HMRC professionally, ensuring queries and filings are managed correctly.",
      iconKey: "message-square" as CorporationTaxIconKey,
    },
  ],
};

