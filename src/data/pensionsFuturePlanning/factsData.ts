import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type PensionsFactsIconKey = BookkeepingFactsIconKey;

export const PENSIONS_FUTURE_PLANNING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Pension Planning in the UK",
  description:
    "Here’s why planning for your pension matters and why taking action today is crucial.",
  items: [
    {
      stat: "Under-Saving for Retirement",
      description:
        "Millions of UK adults are not saving enough for retirement, increasing the risk of financial pressure later in life.",
      source: "Office for National Statistics",
      iconKey: "alert-octagon" as PensionsFactsIconKey,
    },
    {
      stat: "Tax Rules Affect Long-Term Outcomes",
      description:
        "Pension tax rules significantly impact the size of your retirement fund and long-term financial outcomes.",
      source: "FCA",
      iconKey: "badge-percent" as PensionsFactsIconKey,
    },
    {
      stat: "Early Planning Improves Retirement Security",
      description:
        "Planning for retirement early increases financial security in later years by giving your savings longer to grow.",
      source: "MoneyHelper (UK Government)",
      iconKey: "clock" as PensionsFactsIconKey,
    },
  ],
};

