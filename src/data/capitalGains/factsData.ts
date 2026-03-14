import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type CapitalGainsFactsIconKey = BookkeepingFactsIconKey;

export const CAPITAL_GAINS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Capital Gains & Property Tax Compliance",
  description:
    "Capital Gains Tax is an essential part of property sales. These facts highlight why accurate CGT management is critical.",
  items: [
    {
      stat: "Shorter CGT Reporting Deadlines",
      description:
        "CGT reporting deadlines for property sales have become shorter, in some cases as short as 60 days.",
      source: "HMRC",
      iconKey: "trend" as CapitalGainsFactsIconKey,
    },
    {
      stat: "CGT Reporting Errors",
      description:
        "Property disposals are a leading source of CGT reporting errors, often due to complex rules.",
      source: "National Audit Office",
      iconKey: "file-warning" as CapitalGainsFactsIconKey,
    },
    {
      stat: "Missed Reliefs Lead to Overpayment",
      description:
        "Many taxpayers overpay Capital Gains Tax due to missed reliefs and allowances.",
      source: "ICAEW",
      iconKey: "building" as CapitalGainsFactsIconKey,
    },
  ],
};

