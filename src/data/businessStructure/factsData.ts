import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type BusinessStructureFactsIconKey = BookkeepingFactsIconKey;

export const BUSINESS_STRUCTURE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Business Structuring in Context",
  description:
    "Selecting the right business structure is critical for minimising risks and ensuring long-term success.",
  items: [
    {
      stat: "30% Common Mistake",
      description:
        "Choosing the wrong legal structure is a common mistake made by over 30% of new businesses.",
      source: "FSB",
      iconKey: "alert-octagon" as BusinessStructureFactsIconKey,
    },
    {
      stat: "Costly Restructuring",
      description:
        "Restructuring a business later can be complex and costly, often triggering capital gains or other taxes.",
      source: "ICAEW",
      iconKey: "file-warning" as BusinessStructureFactsIconKey,
    },
    {
      stat: "Limited Company Trade-Off",
      description:
        "Limited companies offer liability protection but come with higher administrative and compliance duties.",
      source: "Companies House",
      iconKey: "building" as BusinessStructureFactsIconKey,
    },
  ],
};
