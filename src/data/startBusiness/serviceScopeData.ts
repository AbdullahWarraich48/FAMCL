import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type StartBusinessIconKey = BookkeepingServiceScopeIconKey;

export const START_BUSINESS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Set Up for Your Business",
  description:
    "Starting a business requires the right legal structure, tax registrations, and compliance framework. We help founders establish these foundations properly so the business can operate confidently and grow sustainably.",
  items: [
    {
      title: "Business Structure Planning",
      description:
        "We assess your income, risk exposure, and long‑term goals to recommend the most suitable business structure.",
      iconKey: "document-check" as StartBusinessIconKey,
    },
    {
      title: "Statutory Registrations",
      description:
        "We handle company and tax registrations with HMRC and Companies House so the process remains simple and efficient.",
      iconKey: "badge-check" as StartBusinessIconKey,
    },
    {
      title: "Compliance Framework Setup",
      description:
        "We establish a clear compliance framework so your business understands reporting obligations and regulatory deadlines.",
      iconKey: "shield" as StartBusinessIconKey,
    },
    {
      title: "Financial Reporting Foundations",
      description:
        "We introduce proper record‑keeping and reporting processes to support transparency and financial control.",
      iconKey: "calculator" as StartBusinessIconKey,
    },
    {
      title: "VAT & Tax Registration Guidance",
      description:
        "We advise on when to register for VAT and other taxes and complete the registrations on your behalf.",
      iconKey: "receipt-tax" as StartBusinessIconKey,
    },
    {
      title: "Growth-Ready Financial Systems",
      description:
        "We help implement financial systems that support scaling, funding opportunities, and long‑term sustainability.",
      iconKey: "trend-up" as StartBusinessIconKey,
    },
  ],
};

