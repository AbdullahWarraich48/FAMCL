import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type ManufacturingEngineeringFactsIconKey = BookkeepingFactsIconKey;

export const MANUFACTURING_ENGINEERING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Manufacturing & Engineering in Context",
  description:
    "The manufacturing and engineering sectors play a pivotal role in the UK economy.",
  items: [
    {
      stat: "£217 Billion GDP",
      description:
        "Manufacturing contributes £217 billion, approximately 10% of UK GDP.",
      source: "Office for National Statistics",
      iconKey: "chart-pie" as ManufacturingEngineeringFactsIconKey,
    },
    {
      stat: "2.7 Million Jobs",
      description: "The sector employs around 2.7 million people across the UK.",
      source: "ONS",
      iconKey: "users" as ManufacturingEngineeringFactsIconKey,
    },
    {
      stat: "Cash-Flow Pressure",
      description:
        "Over 50% of manufacturers report cash-flow pressure due to rising energy and input costs.",
      source: "Make UK Manufacturing Outlook",
      iconKey: "file-warning" as ManufacturingEngineeringFactsIconKey,
    },
    {
      stat: "R&D Compliance Risk",
      description:
        "HMRC identifies R&D tax relief as a high-risk compliance area within manufacturing.",
      source: "HMRC",
      iconKey: "alert-octagon" as ManufacturingEngineeringFactsIconKey,
    },
  ],
};
