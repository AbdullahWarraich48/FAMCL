import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type SoleTradersFactsIconKey = BookkeepingFactsIconKey;

export const SOLE_TRADERS_FACTS_DATA: FactsData = {
  sectionLabel: "Stats & Facts (UK)",
  heading: "Sole Traders in Context",
  description:
    "Self-employment is a significant part of the UK economy, but many Sole Traders face challenges with tax reporting and financial visibility.",
  items: [
    {
      stat: "Largest Segment",
      description: "Sole Traders represent the largest segment of UK businesses.",
      source: "ONS",
      iconKey: "chart-pie" as SoleTradersFactsIconKey,
    },
    {
      stat: "Late Filings",
      description: "Late or inaccurate Self-Assessment filings are common.",
      source: "HMRC",
      iconKey: "file-warning" as SoleTradersFactsIconKey,
    },
    {
      stat: "Cash-Flow Visibility",
      description: "Cash-flow visibility remains a major challenge.",
      source: "British Business Bank",
      iconKey: "trend" as SoleTradersFactsIconKey,
    },
  ],
};
