import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type FixedFeesFactsIconKey = BookkeepingFactsIconKey;

export const FIXED_FEES_FACTS_DATA: FactsData = {
  sectionLabel: "Why Fixed Fees?",
  heading: "Why Fixed Fees?",
  description: "Our fee structure is designed for clarity and objectivity.",
  cardStyle: "principles",
  items: [
    {
      stat: "Clear expectations",
      description: "",
      iconKey: "trend" as FixedFeesFactsIconKey,
    },
    {
      stat: "Proper time allocation",
      description: "",
      iconKey: "clock" as FixedFeesFactsIconKey,
    },
    {
      stat: "Objective advice",
      description: "",
      iconKey: "users" as FixedFeesFactsIconKey,
    },
  ],
};
