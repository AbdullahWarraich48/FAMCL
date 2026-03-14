import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type LandlordsFamiliesFactsIconKey = BookkeepingFactsIconKey;

export const LANDLORDS_FAMILIES_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Property And Landlord Insights",
  description:
    "Property taxation in the UK has become increasingly complex, requiring careful planning and accurate reporting for landlords and families.",
  items: [
    {
      stat: "Tightening Property Tax Rules",
      description:
        "Property taxation rules for landlords have tightened significantly in recent years, increasing the risk of unexpected liabilities.",
      source: "HMRC",
      iconKey: "alert-octagon" as LandlordsFamiliesFactsIconKey,
    },
    {
      stat: "Missed Reliefs",
      description:
        "Many landlords overpay tax because eligible reliefs and allowances are not properly identified or claimed.",
      source: "ICAEW",
      iconKey: "file-warning" as LandlordsFamiliesFactsIconKey,
    },
    {
      stat: "Scale of the UK Rental Market",
      description:
        "Private landlords provide housing for millions of households across the UK, making reliable tax compliance essential.",
      source: "Office for National Statistics",
      iconKey: "building" as LandlordsFamiliesFactsIconKey,
    },
  ],
};

