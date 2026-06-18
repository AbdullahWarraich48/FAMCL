import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type NotForProfitFactsIconKey = BookkeepingFactsIconKey;

export const NOT_FOR_PROFIT_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Not-for-Profit in Context",
  description:
    "The charity and not-for-profit sector plays a significant role in UK society and requires strong financial governance.",
  items: [
    {
      stat: "168,000+ Charities",
      description:
        "There are over 168,000 registered charities in England and Wales.",
      source: "Charity Commission",
      iconKey: "users" as NotForProfitFactsIconKey,
    },
    {
      stat: "£300 Billion Assets",
      description: "The charity sector manages over £300 billion in assets.",
      source: "National Council for Voluntary Organisations",
      iconKey: "chart-pie" as NotForProfitFactsIconKey,
    },
    {
      stat: "Governance Concerns",
      description:
        "Governance and financial reporting failures are among the top regulatory concerns.",
      source: "Charity Commission",
      iconKey: "alert-octagon" as NotForProfitFactsIconKey,
    },
  ],
};
