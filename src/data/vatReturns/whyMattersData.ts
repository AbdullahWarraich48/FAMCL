import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type VatWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const VAT_RETURNS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Accurate VAT Management",
  description:
    "VAT mistakes can lead to unnecessary penalties, administrative pressure, and financial uncertainty. Clear and well-managed VAT processes reduce risk, improve visibility, and help your business remain compliant with confidence.",
  items: [
    {
      title: "Avoid Costly Penalties",
      description:
        "Late or incorrect VAT filings can trigger financial penalties and compliance issues.",
      iconKey: "alert-triangle" as VatWhyMattersIconKey,
    },
    {
      title: "Stay Digitally Compliant",
      description:
        "Making Tax Digital requires businesses to maintain proper digital VAT records.",
      iconKey: "check-square" as VatWhyMattersIconKey,
    },
    {
      title: "Lower Risk of HMRC Queries",
      description:
        "Clear records reduce the chances of compliance checks or investigations.",
      iconKey: "shield" as VatWhyMattersIconKey,
    },
    {
      title: "Reduce Administrative Stress",
      description:
        "Professional VAT management removes the pressure of calculations and deadlines.",
      iconKey: "activity" as VatWhyMattersIconKey,
    },
    {
      title: "Protect Cash Flow",
      description:
        "Accurate VAT tracking prevents unexpected liabilities and improves planning.",
      iconKey: "circle-dollar" as VatWhyMattersIconKey,
    },
    {
      title: "Confidence in Compliance",
      description:
        "With structured processes, you know your VAT obligations are handled correctly.",
      iconKey: "zap" as VatWhyMattersIconKey,
    },
  ],
};

