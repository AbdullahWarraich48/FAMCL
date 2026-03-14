import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type FixedFeesFactsIconKey = BookkeepingFactsIconKey;

export const FIXED_FEES_FACTS_DATA: FactsData = {
  sectionLabel: "Why Fixed Fees",
  heading: "Designed For Transparency And Objectivity",
  description:
    "Our pricing structure supports clear expectations and professional independence.",
  items: [
    {
      stat: "Clear Expectations",
      description:
        "Clients understand the scope of work and associated fees before the engagement begins.",
      source: "FAM Chartered Accountants",
      iconKey: "trend" as FixedFeesFactsIconKey,
    },
    {
      stat: "Proper Time Allocation",
      description:
        "Work can be carried out carefully and thoroughly without unnecessary time pressure created by uncertain billing.",
      source: "FAM Chartered Accountants",
      iconKey: "clock" as FixedFeesFactsIconKey,
    },
    {
      stat: "Objective Advice",
      description:
        "Advice remains independent and focused on what is appropriate rather than influenced by time-based billing.",
      source: "FAM Chartered Accountants",
      iconKey: "users" as FixedFeesFactsIconKey,
    },
  ],
};

