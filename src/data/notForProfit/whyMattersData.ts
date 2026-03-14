import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type NotForProfitWhyIconKey = BookkeepingWhyMattersIconKey;

export const NOT_FOR_PROFIT_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Strong Financial Governance",
  description:
    "For charities and not-for-profit organisations, financial transparency is essential. Effective governance ensures compliance with regulations while maintaining the trust of donors, beneficiaries, and regulators.",
  items: [
    {
      title: "Protect Donor Confidence",
      description:
        "Strong financial reporting demonstrates accountability and builds trust with donors and stakeholders.",
      iconKey: "heart-check" as NotForProfitWhyIconKey,
    },
    {
      title: "Ensure Regulatory Compliance",
      description:
        "Charities must comply with strict Charity Commission regulations and reporting standards. We help keep you compliant.",
      iconKey: "clipboard-check" as NotForProfitWhyIconKey,
    },
    {
      title: "Maintain Financial Transparency",
      description:
        "Clear financial management ensures funds are used appropriately and reported accurately.",
      iconKey: "eye" as NotForProfitWhyIconKey,
    },
    {
      title: "Reduce Compliance Risks",
      description:
        "Accurate reporting and governance practices reduce the risk of regulatory breaches and reputational damage.",
      iconKey: "alert-triangle" as NotForProfitWhyIconKey,
    },
    {
      title: "Support Trustee Responsibilities",
      description:
        "Trustees carry legal responsibilities for governance and financial oversight. Proper guidance helps them fulfil these duties confidently.",
      iconKey: "activity" as NotForProfitWhyIconKey,
    },
    {
      title: "Focus on Your Mission",
      description:
        "By managing financial governance effectively, organisations can focus on delivering their mission and supporting their communities.",
      iconKey: "trend-up" as NotForProfitWhyIconKey,
    },
  ],
} as const;

