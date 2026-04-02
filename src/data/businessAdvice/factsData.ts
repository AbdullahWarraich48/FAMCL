import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type BusinessAdviceFactsIconKey = BookkeepingFactsIconKey;

export const BUSINESS_ADVICE_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Business Advice in Action",
  description:
    "The right business advice can transform a company's trajectory, helping it avoid risks and identify opportunities for growth.",
  items: [
    {
      stat: "Cash Flow Issues",
      description:
        "Cash flow issues are responsible for the majority of UK business failures.",
      source: "British Business Bank",
      iconKey: "alert-octagon" as BusinessAdviceFactsIconKey,
    },
    {
      stat: "Advisory Services Improve Survival",
      description:
        "Businesses that use professional advisory services show significantly higher survival rates.",
      source: "ICAEW",
      iconKey: "trend" as BusinessAdviceFactsIconKey,
    },
    {
      stat: "Early Financial Planning",
      description:
        "Early financial planning can significantly reduce the risk of insolvency.",
      source: "Insolvency Service UK",
      iconKey: "clock" as BusinessAdviceFactsIconKey,
    },
  ],
};

