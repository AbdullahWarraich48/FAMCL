import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type VatFactsIconKey = BookkeepingFactsIconKey;

export const VAT_RETURNS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "VAT Compliance in Context",
  description:
    "Accurate VAT reporting plays a major role in maintaining financial stability and avoiding penalties for UK businesses.",
  items: [
    {
      stat: "Billions Lost",
      description: "VAT errors cost UK businesses billions each year.",
      source: "National Audit Office",
      iconKey: "alert-octagon" as VatFactsIconKey,
    },
    {
      stat: "Making Tax Digital",
      description:
        "Making Tax Digital is mandatory for VAT-registered businesses.",
      source: "HMRC",
      iconKey: "chart-pie" as VatFactsIconKey,
    },
    {
      stat: "Unintentional Penalties",
      description:
        "VAT penalties apply even when mistakes are unintentional.",
      source: "HMRC",
      iconKey: "file-warning" as VatFactsIconKey,
    },
  ],
};
