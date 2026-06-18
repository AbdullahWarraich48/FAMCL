import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type VatWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const VAT_RETURNS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "The Cost of Getting VAT Wrong",
  description:
    "VAT mistakes are expensive and time-consuming. Digital compliance is no longer optional. Late or incorrect VAT filings trigger penalties. Poor VAT control harms cash flow. Clear VAT handling removes constant worry.",
  items: [
    {
      title: "Expensive Mistakes",
      description: "VAT mistakes are expensive and time-consuming.",
      iconKey: "alert-triangle" as VatWhyMattersIconKey,
    },
    {
      title: "Digital Compliance Required",
      description: "Digital compliance is no longer optional.",
      iconKey: "clipboard-check" as VatWhyMattersIconKey,
    },
    {
      title: "Penalties for Late Filing",
      description: "Late or incorrect VAT filings trigger penalties.",
      iconKey: "scale" as VatWhyMattersIconKey,
    },
    {
      title: "Cash Flow Impact",
      description: "Poor VAT control harms cash flow.",
      iconKey: "arrow-left-right" as VatWhyMattersIconKey,
    },
    {
      title: "Peace of Mind",
      description: "Clear VAT handling removes constant worry.",
      iconKey: "leaf" as VatWhyMattersIconKey,
    },
  ],
};
