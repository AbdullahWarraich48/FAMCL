import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type BusinessStructureIconKey = BookkeepingServiceScopeIconKey;

export const BUSINESS_STRUCTURE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "We provide expert advice on choosing and implementing the right legal and tax structure for your business, whether you are starting up, scaling, or planning an exit. Our guidance covers sole trader, partnership, LLP, and limited company structures, ensuring your setup aligns with your commercial goals and risk appetite.",
  items: [
    {
      title: "Expert Structure Advice",
      description:
        "We provide expert advice on choosing and implementing the right legal and tax structure for your business, whether you are starting up, scaling, or planning an exit.",
      iconKey: "network" as BusinessStructureIconKey,
    },
    {
      title: "Sole Trader & Partnership",
      description:
        "Our guidance covers sole trader and partnership structures.",
      iconKey: "users" as BusinessStructureIconKey,
    },
    {
      title: "LLP & Limited Company",
      description: "Our guidance covers LLP and limited company structures.",
      iconKey: "factory" as BusinessStructureIconKey,
    },
    {
      title: "Commercial Goals",
      description: "Ensuring your setup aligns with your commercial goals.",
      iconKey: "trend-up" as BusinessStructureIconKey,
    },
    {
      title: "Risk Appetite",
      description: "Ensuring your setup aligns with your risk appetite.",
      iconKey: "shield" as BusinessStructureIconKey,
    },
  ],
};
