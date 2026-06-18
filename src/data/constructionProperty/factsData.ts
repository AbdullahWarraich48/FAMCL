import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ConstructionPropertyFactsIconKey = BookkeepingFactsIconKey;

export const CONSTRUCTION_PROPERTY_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Construction & Property in Context",
  description:
    "Effective financial management is crucial in the construction and property sectors.",
  items: [
    {
      stat: "£110 Billion GDP",
      description:
        "Construction contributes £110 billion, approximately 6% of UK GDP.",
      source: "ONS",
      iconKey: "chart-pie" as ConstructionPropertyFactsIconKey,
    },
    {
      stat: "One in Five Insolvencies",
      description:
        "One in five UK insolvencies occurs in the construction sector.",
      source: "Insolvency Service",
      iconKey: "alert-octagon" as ConstructionPropertyFactsIconKey,
    },
    {
      stat: "Late Payments",
      description:
        "Over 40 percent of construction businesses experience late payments.",
      source: "Department for Business and Trade",
      iconKey: "clock" as ConstructionPropertyFactsIconKey,
    },
    {
      stat: "CIS Non-Compliance",
      description:
        "CIS non-compliance is a leading cause of HMRC penalties in the sector.",
      source: "HMRC",
      iconKey: "file-warning" as ConstructionPropertyFactsIconKey,
    },
  ],
};
