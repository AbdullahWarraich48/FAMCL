import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type BusinessStructureFactsIconKey = BookkeepingFactsIconKey;

export const BUSINESS_STRUCTURE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Business Structuring Insights",
  description:
    "Selecting the right business structure is critical for minimising risks and ensuring long-term success. Here’s why getting it right matters.",
  items: [
    {
      stat: "Common Mistake in New Businesses",
      description:
        "Over 30% of new businesses choose the wrong legal structure, which can hinder growth and increase administrative burdens.",
      source: "FSB",
      iconKey: "trend" as BusinessStructureFactsIconKey,
    },
    {
      stat: "Cost of Restructuring",
      description:
        "Changing structure later on can be costly due to legal fees, potential capital gains or stamp duties, and operational disruption.",
      source: "ICAEW",
      iconKey: "file-warning" as BusinessStructureFactsIconKey,
    },
    {
      stat: "Liability Protection with Companies",
      description:
        "Limited companies offer liability protection but come with additional administrative and compliance duties.",
      source: "Companies House",
      iconKey: "building" as BusinessStructureFactsIconKey,
    },
  ],
};

