import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type NotForProfitFactsIconKey = BookkeepingFactsIconKey;

export const NOT_FOR_PROFIT_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Not-for-Profit Sector Insights",
  description:
    "The charity and not-for-profit sector plays a significant role in UK society and requires strong financial governance to maintain accountability.",
  items: [
    {
      stat: "Number of Registered\nCharities",
      description:
        "There are over 168,000 registered charities in England and Wales.",
      source: "Charity Commission",
      iconKey: "users" as NotForProfitFactsIconKey,
    },
    {
      stat: "Assets Managed by\nthe Sector",
      description:
        "The sector oversees more than £80 billion in assets across thousands of organisations.",
      source: "National Council for Voluntary Organisations (NCVO)",
      iconKey: "chart-pie" as NotForProfitFactsIconKey,
    },
    {
      stat: "Regulatory\nConcerns",
      description:
        "Governance and financial reporting failures remain among the top regulatory concerns for charities.",
      source: "Charity Commission",
      iconKey: "alert-octagon" as NotForProfitFactsIconKey,
    },
  ],
} as const;

