import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type ProfessionalServicesFactsIconKey = BookkeepingFactsIconKey;

export const PROFESSIONAL_SERVICES_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Professional Services Insights",
  description:
    "The professional services sector is a significant contributor to the UK economy. Efficient financial and operational management is essential to avoid the common pitfalls that can impact profitability and growth.",
  items: [
    {
      stat: "Contribution to UK\nEconomy",
      description: "Professional services contribute over £250 billion to the UK economy.",
      source: "Office for National Statistics (ONS)",
      iconKey: "trend" as ProfessionalServicesFactsIconKey,
    },
    {
      stat: "Margin Pressure in\nProfessional Firms",
      description:
        "Around 60% of professional firms report margin pressure due to rising costs.",
      source: "ICAEW Business Confidence Monitor",
      iconKey: "file-warning" as ProfessionalServicesFactsIconKey,
    },
    {
      stat: "Impact of Poor Time\nRecording",
      description:
        "Poor time recording reduces profitability by up to 20% in fee-based firms.",
      source: "ICAEW",
      iconKey: "clock" as ProfessionalServicesFactsIconKey,
    },
  ],
} as const;

