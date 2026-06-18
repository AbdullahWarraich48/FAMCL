import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ProfessionalServicesFactsIconKey = BookkeepingFactsIconKey;

export const PROFESSIONAL_SERVICES_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Professional Services in Context",
  description:
    "The professional services sector is a significant contributor to the UK economy.",
  items: [
    {
      stat: "£250 Billion+",
      description:
        "Professional services contribute over £250 billion to the UK economy.",
      source: "ONS",
      iconKey: "trend" as ProfessionalServicesFactsIconKey,
    },
    {
      stat: "Margin Pressure",
      description:
        "Around 60% of professional firms report margin pressure due to rising costs.",
      source: "ICAEW Business Confidence Monitor",
      iconKey: "file-warning" as ProfessionalServicesFactsIconKey,
    },
    {
      stat: "Poor Time Recording",
      description:
        "Poor time recording reduces profitability by up to 20% in fee-based firms.",
      source: "ICAEW",
      iconKey: "clock" as ProfessionalServicesFactsIconKey,
    },
  ],
};
