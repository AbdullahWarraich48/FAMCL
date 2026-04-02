import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type VatFactsIconKey = BookkeepingFactsIconKey;

export const VAT_RETURNS_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "VAT Compliance in the UK",
  description:
    "Accurate VAT reporting plays a major role in maintaining financial stability and avoiding penalties for UK businesses.",
  items: [
    {
      stat: "Billions Lost to VAT Errors",
      description:
        "VAT reporting mistakes cost UK businesses significant amounts each year.",
      source: "National Audit Office",
      iconKey: "alert-octagon" as VatFactsIconKey,
    },
    {
      stat: "Making Tax Digital Requirement",
      description:
        "Making Tax Digital has made digital record-keeping mandatory for VAT-registered businesses.",
      source: "HMRC",
      iconKey: "chart-pie" as VatFactsIconKey,
    },
    {
      stat: "Penalties Even for Unintentional Errors",
      description:
        "VAT penalties can apply even when mistakes are not deliberate.",
      source: "HMRC",
      iconKey: "file-warning" as VatFactsIconKey,
    },
  ],
};

