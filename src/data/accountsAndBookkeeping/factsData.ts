import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

export const ACCOUNTS_AND_BOOKKEEPING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Financial Visibility in Context",
  description:
    "Reliable financial management directly affects business stability and survival rates across the UK.",
  items: [
    {
      stat: "60%",
      description:
        "of UK SMEs experience cash-flow problems largely due to poor financial visibility.",
      source: "British Business Bank",
      iconKey: "trend" as BookkeepingFactsIconKey,
    },
    {
      stat: "#1 Cause",
      description:
        "Late or incorrect records are a leading cause of HMRC penalties.",
      source: "HMRC",
      iconKey: "file-warning" as BookkeepingFactsIconKey,
    },
    {
      stat: "5+ Years",
      description:
        "Businesses with regular management accounts are more likely to survive beyond five years.",
      source: "Office for National Statistics",
      iconKey: "building" as BookkeepingFactsIconKey,
    },
  ],
};
