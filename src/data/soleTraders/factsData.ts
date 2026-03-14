import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type SoleTradersFactsIconKey = BookkeepingFactsIconKey;

export const SOLE_TRADERS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Sole Trader Insights",
  description:
    "Self-employment is a significant part of the UK economy, but many Sole Traders face challenges with tax reporting and financial visibility.",
  items: [
    {
      stat: "Largest Business Segment",
      description:
        "Sole Traders represent the largest segment of UK businesses, contributing significantly to local and national economies.",
      source: "Office for National Statistics",
      iconKey: "chart-pie" as SoleTradersFactsIconKey,
    },
    {
      stat: "Self-Assessment Filing Errors",
      description:
        "Late or inaccurate Self Assessment filings are common among self-employed individuals and can quickly lead to penalties.",
      source: "HMRC",
      iconKey: "file-warning" as SoleTradersFactsIconKey,
    },
    {
      stat: "Cash-Flow Visibility Issues",
      description:
        "Cash-flow visibility remains a major challenge for many small businesses and self-employed workers.",
      source: "British Business Bank",
      iconKey: "trend" as SoleTradersFactsIconKey,
    },
  ],
};

