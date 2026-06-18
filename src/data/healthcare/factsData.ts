import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type HealthcareFactsIconKey = BookkeepingFactsIconKey;

export const HEALTHCARE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Healthcare in Context",
  description:
    "The UK healthcare sector is large and heavily regulated, making specialist financial support increasingly important.",
  items: [
    {
      stat: "4 Million Employees",
      description: "The UK healthcare sector employs over 4 million people.",
      source: "NHS England",
      iconKey: "users" as HealthcareFactsIconKey,
    },
    {
      stat: "Payroll Compliance Risks",
      description:
        "Payroll errors are among the top compliance risks for healthcare providers.",
      source: "HMRC",
      iconKey: "file-warning" as HealthcareFactsIconKey,
    },
    {
      stat: "Growing Obligations",
      description:
        "GP practices and care providers face increasing regulatory and financial reporting obligations.",
      source: "Care Quality Commission",
      iconKey: "alert-octagon" as HealthcareFactsIconKey,
    },
  ],
};
