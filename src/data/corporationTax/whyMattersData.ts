import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CorporationTaxWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CORPORATION_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "The Real Cost of Poor Tax Planning",
  description:
    "Overpaying tax quietly drains growth. Underpaying risks fines, interest, and investigations. Tax stress distracts business owners from growth. Good tax planning improves cash flows. It also reduces long-term risk and uncertainty.",
  items: [
    {
      title: "Overpaying Drains Growth",
      description: "Overpaying tax quietly drains growth.",
      iconKey: "circle-dollar" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Underpaying Risks Penalties",
      description:
        "Underpaying risks fines, interest, and investigations.",
      iconKey: "scale" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Tax Stress Distracts",
      description: "Tax stress distracts business owners from growth.",
      iconKey: "activity" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Better Cash Flow",
      description: "Good tax planning improves cash flows.",
      iconKey: "arrow-left-right" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Reduced Long-Term Risk",
      description: "It also reduces long-term risk and uncertainty.",
      iconKey: "anchor" as CorporationTaxWhyMattersIconKey,
    },
  ],
};
