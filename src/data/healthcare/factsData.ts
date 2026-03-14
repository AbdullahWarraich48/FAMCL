import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type HealthcareFactsIconKey = BookkeepingFactsIconKey;

export const HEALTHCARE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Healthcare Sector Insights",
  description:
    "The UK healthcare sector is large and heavily regulated, making specialist financial support increasingly important.",
  items: [
    {
      stat: "Healthcare\nEmployment",
      description:
        "The UK healthcare sector employs over 4 million people across hospitals, practices, and care providers.",
      source: "NHS England",
      iconKey: "users" as HealthcareFactsIconKey,
    },
    {
      stat: "Payroll Compliance\nRisks",
      description:
        "Payroll errors are among the most common compliance risks faced by healthcare organisations.",
      source: "HMRC",
      iconKey: "file-warning" as HealthcareFactsIconKey,
    },
    {
      stat: "Increasing Regulatory\nOversight",
      description:
        "GP practices and care providers face growing financial reporting and compliance obligations.",
      source: "Care Quality Commission",
      iconKey: "alert-octagon" as HealthcareFactsIconKey,
    },
  ],
} as const;

