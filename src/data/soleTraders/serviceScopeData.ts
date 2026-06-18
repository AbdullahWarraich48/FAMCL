import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type SoleTradersServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const SOLE_TRADERS_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Focus",
  heading: "What We Support for Sole Traders",
  description:
    "Ongoing tax and compliance support for self-employed individuals operating under UK Sole Trader rules, where simplicity often hides risk.",
  items: [
    {
      title: "Ongoing Tax Support",
      description:
        "Ongoing tax support for self-employed individuals operating under UK Sole Trader rules.",
      iconKey: "receipt-tax" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Compliance Support",
      description:
        "Ongoing compliance support for self-employed individuals under UK Sole Trader rules.",
      iconKey: "shield" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "UK Sole Trader Rules",
      description: "Support aligned to UK Sole Trader rules and HMRC requirements.",
      iconKey: "document-check" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Self-Employed Focus",
      description: "Designed for self-employed individuals managing their own affairs.",
      iconKey: "users" as SoleTradersServiceScopeIconKey,
    },
    {
      title: "Hidden Risk Awareness",
      description: "Where simplicity often hides risk — structured support replaces guesswork.",
      iconKey: "eye" as SoleTradersServiceScopeIconKey,
    },
  ],
};
