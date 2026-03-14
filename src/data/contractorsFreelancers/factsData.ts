import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ContractorsFreelancersFactsIconKey = BookkeepingFactsIconKey;

export const CONTRACTORS_FREELANCERS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Contractor And Freelance Insights",
  description:
    "Contracting and freelance work are common in the UK, but regulatory interpretation can significantly affect tax outcomes.",
  items: [
    {
      stat: "Frequent Regulatory Changes",
      description:
        "Contractor taxation and employment status rules are subject to frequent regulatory change, increasing the risk of misinterpretation.",
      source: "HMRC",
      iconKey: "alert-octagon" as ContractorsFreelancersFactsIconKey,
    },
    {
      stat: "Structural Risk",
      description:
        "Incorrect operating structure can significantly increase tax exposure and the risk of HMRC challenge.",
      source: "ICAEW",
      iconKey: "trend" as ContractorsFreelancersFactsIconKey,
    },
    {
      stat: "Growth of the Contractor Workforce",
      description:
        "Millions of individuals in the UK operate through freelance or contractor arrangements across multiple sectors.",
      source: "Office for National Statistics",
      iconKey: "users" as ContractorsFreelancersFactsIconKey,
    },
  ],
};

