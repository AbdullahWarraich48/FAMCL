import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CorporationTaxWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CORPORATION_TAX_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Value Behind Proper Tax Planning",
  description:
    "Corporation tax mistakes can quietly affect a business over time. Overpaying reduces growth potential, while underpaying can result in penalties, interest, or investigations. Effective tax planning ensures your obligations are handled correctly while giving you clarity and confidence about your financial position.",
  items: [
    {
      title: "Reduced Risk",
      description:
        "Accurate tax management reduces the risk of penalties, fines, or compliance issues.",
      iconKey: "scale" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Better Financial Decisions",
      description:
        "Understanding tax obligations clearly allows better business planning and investment.",
      iconKey: "chart-line" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "HMRC Compliance",
      description:
        "Proper filings ensure your business remains compliant with HMRC regulations.",
      iconKey: "clipboard-check" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Lower Stress",
      description:
        "Professional tax management removes the pressure of dealing with complex tax rules.",
      iconKey: "leaf" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Stronger Cash Flow Planning",
      description:
        "When tax obligations are planned ahead, businesses manage cash flow more effectively.",
      iconKey: "arrow-left-right" as CorporationTaxWhyMattersIconKey,
    },
    {
      title: "Long-Term Stability",
      description:
        "Consistent tax planning reduces uncertainty and protects your business over time.",
      iconKey: "anchor" as CorporationTaxWhyMattersIconKey,
    },
  ],
};

