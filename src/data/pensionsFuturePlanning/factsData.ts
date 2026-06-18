import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type PensionsFactsIconKey = BookkeepingFactsIconKey;

export const PENSIONS_FUTURE_PLANNING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Pension Planning in Context",
  description:
    "Planning for your pension today is crucial for long-term financial security in retirement.",
  items: [
    {
      stat: "Under-Saving",
      description: "Millions of UK adults are under-saving for retirement.",
      source: "Office for National Statistics",
      iconKey: "alert-octagon" as PensionsFactsIconKey,
    },
    {
      stat: "Tax Rules Matter",
      description:
        "Pension tax rules significantly affect long-term outcomes.",
      source: "FCA",
      iconKey: "badge-percent" as PensionsFactsIconKey,
    },
    {
      stat: "Early Planning",
      description: "Early planning improves retirement security.",
      source: "MoneyHelper (UK Government)",
      iconKey: "clock" as PensionsFactsIconKey,
    },
  ],
};
