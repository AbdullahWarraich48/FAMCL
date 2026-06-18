import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ContractorsFreelancersFactsIconKey = BookkeepingFactsIconKey;

export const CONTRACTORS_FREELANCERS_FACTS_DATA: FactsData = {
  sectionLabel: "Stats & Facts (UK)",
  heading: "Contractors & Freelancers in Context",
  description:
    "Contracting and freelance work are common in the UK, but regulatory interpretation can significantly affect tax outcomes.",
  items: [
    {
      stat: "Frequent Rule Changes",
      description: "Contractor rules are subject to frequent change.",
      source: "HMRC",
      iconKey: "alert-octagon" as ContractorsFreelancersFactsIconKey,
    },
    {
      stat: "Structural Tax Exposure",
      description: "Incorrect structure increases tax exposure.",
      source: "ICAEW",
      iconKey: "trend" as ContractorsFreelancersFactsIconKey,
    },
  ],
};
