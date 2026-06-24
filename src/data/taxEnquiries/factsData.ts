import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type TaxEnquiriesFactsIconKey = BookkeepingFactsIconKey;

export const TAX_ENQUIRIES_FACTS_DATA: FactsData = {
  sectionLabel: "Enquiry Types",
  heading: "Enquiries We Deal With",
  description:
    "We deal with all forms of tax enquiry, whether they relate to personal or business tax matters.",
  cardStyle: "principles",
  items: [
    {
      stat: "Self employment",
      description: "",
      iconKey: "users" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "Capital Gain Tax",
      description: "",
      iconKey: "trend" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "Property Income",
      description: "",
      iconKey: "building" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "VAT Returns",
      description: "",
      iconKey: "file-warning" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "Late VAT Registration",
      description: "",
      iconKey: "clock" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "PAYE and CIS",
      description: "",
      iconKey: "chart-pie" as TaxEnquiriesFactsIconKey,
    },
    {
      stat: "Corporation Tax",
      description: "",
      iconKey: "badge-percent" as TaxEnquiriesFactsIconKey,
    },
  ],
};
