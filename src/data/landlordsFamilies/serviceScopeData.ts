import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type LandlordsFamiliesServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const LANDLORDS_FAMILIES_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Overview",
  heading: "What We Support for Property Owners & Families",
  description:
    "Property ownership and family financial arrangements often involve complex tax considerations. Our service helps ensure property income, tax reporting, and long‑term planning remain aligned and compliant.",
  items: [
    {
      title: "Property Ownership Review",
      description:
        "We review how properties are owned and structured to ensure the arrangement remains tax efficient and suitable for your circumstances.",
      iconKey: "document-check" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Property Income & Tax Planning",
      description:
        "We identify taxable income, allowable expenses, and tax exposure to ensure accurate reporting and strategic tax planning.",
      iconKey: "calculator" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Relief & Allowance Guidance",
      description:
        "We identify available tax reliefs and allowances to help reduce unnecessary tax payments on property and family income.",
      iconKey: "receipt-tax" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Reporting & Compliance Support",
      description:
        "We ensure property income and disposals are reported correctly and on time according to HMRC requirements.",
      iconKey: "shield" as LandlordsFamiliesServiceScopeIconKey,
    },
    {
      title: "Long-Term Family Planning",
      description:
        "We help align property transfers, ownership changes, and estate considerations with long‑term family goals.",
      iconKey: "trend-up" as LandlordsFamiliesServiceScopeIconKey,
    },
  ],
};

