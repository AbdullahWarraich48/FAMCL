import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type OurCompanyFactsIconKey = BookkeepingFactsIconKey;

export const OUR_COMPANY_FACTS_DATA: FactsData = {
  sectionLabel: "Core Principles",
  heading: "The Standards That Guide Our Work",
  description:
    "Our work is guided by three principles designed to ensure clarity, accountability, and responsible financial advice.",
  items: [
    {
      stat: "Accuracy Before Speed",
      description:
        "Financial reporting and advice must be precise and reliable rather than rushed.",
      source: "FAM Chartered Accountants",
      iconKey: "file-warning" as OurCompanyFactsIconKey,
    },
    {
      stat: "Judgement Before Optimisation",
      description:
        "Professional judgement comes before aggressive optimisation, particularly where risk or short-term gains are involved.",
      source: "FAM Chartered Accountants",
      iconKey: "chart-pie" as OurCompanyFactsIconKey,
    },
    {
      stat: "Responsibility Before Convenience",
      description:
        "Decisions prioritise long-term responsibility and regulatory discipline over convenience or ease.",
      source: "FAM Chartered Accountants",
      iconKey: "users" as OurCompanyFactsIconKey,
    },
  ],
};

