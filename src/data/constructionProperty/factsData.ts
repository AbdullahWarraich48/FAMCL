import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ConstructionPropertyFactsIconKey = BookkeepingFactsIconKey;

export const CONSTRUCTION_PROPERTY_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Construction & Property Sector Insights",
  description:
    "Here’s why effective financial management is crucial in the construction and property sectors.",
  items: [
    {
      stat: "Construction’s\nContribution to UK GDP",
      description:
        "The construction sector contributes £110 billion, approximately 6% of the UK GDP.",
      source: "Office for National Statistics (ONS)",
      iconKey: "chart-pie" as ConstructionPropertyFactsIconKey,
    },
    {
      stat: "Insolvency Rate in\nConstruction",
      description: "1 in 5 UK insolvencies occur in the construction sector.",
      source: "Insolvency Service",
      iconKey: "alert-octagon" as ConstructionPropertyFactsIconKey,
    },
    {
      stat: "Late Payments in the\nConstruction Sector",
      description:
        "Over 40% of construction businesses experience late payments, impacting cash flow and project timelines.",
      source: "Department for Business and Trade",
      iconKey: "clock" as ConstructionPropertyFactsIconKey,
    },
  ],
} as const;

