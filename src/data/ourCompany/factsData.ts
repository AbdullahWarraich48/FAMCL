import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type OurCompanyFactsIconKey = BookkeepingFactsIconKey;

export const OUR_COMPANY_FACTS_DATA: FactsData = {
  sectionLabel: "Core Principles",
  heading: "FAM Chartered Accountants Core Principles",
  description:
    "Our work is guided by three core principles that ensure clarity and accountability.",
  cardStyle: "principles",
  items: [
    {
      stat: "Accuracy before speed",
      description: "",
      iconKey: "clock" as OurCompanyFactsIconKey,
    },
    {
      stat: "Judgement before optimisation",
      description: "",
      iconKey: "chart-pie" as OurCompanyFactsIconKey,
    },
    {
      stat: "Responsibility before convenience",
      description: "",
      iconKey: "building" as OurCompanyFactsIconKey,
    },
  ],
};
