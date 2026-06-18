import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type LandlordsFamiliesFactsIconKey = BookkeepingFactsIconKey;

export const LANDLORDS_FAMILIES_FACTS_DATA: FactsData = {
  sectionLabel: "Stats & Facts (UK)",
  heading: "Landlords & Families in Context",
  description:
    "Property taxation in the UK has become increasingly complex, requiring careful planning and accurate reporting for landlords and families.",
  items: [
    {
      stat: "Tighter Property Rules",
      description: "Property tax rules have tightened significantly.",
      source: "HMRC",
      iconKey: "alert-octagon" as LandlordsFamiliesFactsIconKey,
    },
    {
      stat: "Missed Reliefs",
      description: "Many landlords overpay tax due to missed reliefs.",
      source: "ICAEW",
      iconKey: "file-warning" as LandlordsFamiliesFactsIconKey,
    },
  ],
};
