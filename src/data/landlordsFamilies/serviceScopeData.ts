import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type LandlordsFamiliesServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const LANDLORDS_FAMILIES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Philosophy",
  heading: "What We Support for Property Owners & Families",
  description:
    "Tax and planning support for individuals with property income and family financial arrangements, where long-term impact outweighs short-term decisions.",
  items: [
    {
      title: "Tax & Planning Support",
      description:
        "Tax and planning support for individuals with property income and family financial arrangements.",
      iconKey: "calculator" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Property Income",
      description: "Support for individuals with property income.",
      iconKey: "receipt-tax" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Family Arrangements",
      description: "Support for family financial arrangements.",
      iconKey: "users" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Long-Term Impact",
      description: "Where long-term impact outweighs short-term decisions.",
      iconKey: "trend-up" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Continuity & Control",
      description:
        "Measured, forward-looking support structured for continuity and responsibility.",
      iconKey: "shield" as LandlordsFamiliesServiceScopeIconKey,
    },
  ],
};
