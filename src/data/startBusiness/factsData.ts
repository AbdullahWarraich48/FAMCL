import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type StartBusinessFactsIconKey = BookkeepingFactsIconKey;

export const START_BUSINESS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Business Formation Insights",
  description:
    "Starting a business is common, but early structural and financial mistakes can create challenges that affect long‑term sustainability.",
  items: [
    {
      stat: "New Businesses Registered",
      description:
        "Over 750,000 new businesses are registered in the UK each year, adding to a highly competitive marketplace.",
      source: "Companies House",
      iconKey: "chart-pie" as StartBusinessFactsIconKey,
    },
    {
      stat: "Early Business Failures",
      description:
        "A high proportion of business failures occur within the first few years when foundations are not set up correctly.",
      source: "Office for National Statistics",
      iconKey: "alert-octagon" as StartBusinessFactsIconKey,
    },
    {
      stat: "Financial Setup Risks",
      description:
        "Poor financial structure and reporting systems are a leading contributor to early business failure.",
      source: "British Business Bank",
      iconKey: "clock" as StartBusinessFactsIconKey,
    },
  ],
};

