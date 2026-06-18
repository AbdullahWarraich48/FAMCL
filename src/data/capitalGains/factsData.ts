import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type CapitalGainsFactsIconKey = BookkeepingFactsIconKey;

export const CAPITAL_GAINS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Capital Gains Tax in Context",
  description:
    "Capital Gains Tax is an essential part of property sales. Accurate reporting and relief planning protect your proceeds.",
  items: [
    {
      stat: "60-Day Deadlines",
      description:
        "CGT reporting deadlines are now as short as 60 days for property.",
      source: "HMRC",
      iconKey: "clock" as CapitalGainsFactsIconKey,
    },
    {
      stat: "Property Disposal Errors",
      description: "Property disposals are a major source of CGT errors.",
      source: "National Audit Office",
      iconKey: "file-warning" as CapitalGainsFactsIconKey,
    },
    {
      stat: "Overpayment Risk",
      description: "Many taxpayers overpay CGT due to missed reliefs.",
      source: "ICAEW",
      iconKey: "badge-percent" as CapitalGainsFactsIconKey,
    },
  ],
};
