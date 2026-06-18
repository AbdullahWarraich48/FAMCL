import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type BusinessAdviceFactsIconKey = BookkeepingFactsIconKey;

export const BUSINESS_ADVICE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Business Advice in Context",
  description:
    "The right business advice can transform a company's trajectory, helping it avoid risks and identify opportunities for growth.",
  items: [
    {
      stat: "Cash Flow Failures",
      description: "Cash flow issues cause most UK business failures.",
      source: "British Business Bank",
      iconKey: "alert-octagon" as BusinessAdviceFactsIconKey,
    },
    {
      stat: "Higher Survival Rates",
      description:
        "Businesses using regular advisory services show higher survival rates.",
      source: "ICAEW",
      iconKey: "trend" as BusinessAdviceFactsIconKey,
    },
    {
      stat: "Early Planning",
      description: "Early financial planning reduces insolvency risk.",
      source: "Insolvency Service UK",
      iconKey: "clock" as BusinessAdviceFactsIconKey,
    },
  ],
};
