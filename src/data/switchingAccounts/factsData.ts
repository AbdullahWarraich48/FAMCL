import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type SwitchingFactsIconKey = BookkeepingFactsIconKey;

export const SWITCHING_ACCOUNTS_FACTS_DATA: FactsData = {
  sectionLabel: "Our Approach",
  heading: "A Structured And Supportive Approach",
  description:
    "Our services are designed to support both businesses and individuals with practical financial guidance and responsible compliance management. When working with our clients we focus on:",
  items: [
    {
      stat: "Clear Communication",
      description:
        "We explain financial matters in a straightforward way so clients fully understand their position.",
      source: "FAM Chartered Accountants",
      iconKey: "users" as SwitchingFactsIconKey,
    },
    {
      stat: "Professional Judgement",
      description:
        "Advice is based on careful analysis and regulatory awareness, not just short-term outcomes.",
      source: "FAM Chartered Accountants",
      iconKey: "chart-pie" as SwitchingFactsIconKey,
    },
    {
      stat: "Consistent Support",
      description:
        "Clients receive dependable guidance throughout the year rather than only at key filing deadlines.",
      source: "FAM Chartered Accountants",
      iconKey: "clock" as SwitchingFactsIconKey,
    },
  ],
};

