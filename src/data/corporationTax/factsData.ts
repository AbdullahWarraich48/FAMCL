import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type CorporationTaxFactsIconKey = BookkeepingFactsIconKey;

export const CORPORATION_TAX_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Financial Compliance in Context",
  description:
    "Corporation tax management plays an important role in protecting businesses from financial risk and regulatory penalties.",
  items: [
    {
      stat: "100% Penalties",
      description:
        "HMRC penalties can reach up to 100% of unpaid tax.",
      source: "HMRC Compliance Handbook",
      iconKey: "alert-octagon" as CorporationTaxFactsIconKey,
    },
    {
      stat: "Missed Reliefs",
      description:
        "Many UK SMEs miss legitimate tax reliefs due to lack of planning or advice.",
      source: "Federation of Small Businesses",
      iconKey: "badge-percent" as CorporationTaxFactsIconKey,
    },
    {
      stat: "Investigation Triggers",
      description:
        "Tax investigations often begin due to inconsistent or inaccurate filings.",
      source: "HMRC",
      iconKey: "file-warning" as CorporationTaxFactsIconKey,
    },
  ],
};

