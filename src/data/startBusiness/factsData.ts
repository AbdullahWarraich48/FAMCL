import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type StartBusinessFactsIconKey = BookkeepingFactsIconKey;

export const START_BUSINESS_FACTS_DATA: FactsData = {
  sectionLabel: "Stats & Facts (UK)",
  heading: "Starting a Business in Context",
  description:
    "Starting a business is common, but early structural and financial mistakes can create challenges that affect long-term sustainability.",
  items: [
    {
      stat: "750,000+ New Businesses",
      description:
        "Over 750,000 new businesses are registered annually in the UK.",
      source: "Companies House",
      iconKey: "chart-pie" as StartBusinessFactsIconKey,
    },
    {
      stat: "First Three Years",
      description:
        "A high proportion of business failures occur within the first three years.",
      source: "Office for National Statistics",
      iconKey: "alert-octagon" as StartBusinessFactsIconKey,
    },
    {
      stat: "Poor Financial Setup",
      description:
        "Poor financial setup is a leading contributor to early failure.",
      source: "British Business Bank",
      iconKey: "clock" as StartBusinessFactsIconKey,
    },
  ],
};
