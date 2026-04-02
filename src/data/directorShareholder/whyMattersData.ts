import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type DirectorWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const DIRECTOR_SHAREHOLDER_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Clear Director & Shareholder Guidance",
  description:
    "Being a director or shareholder carries legal and financial responsibilities that, if misunderstood, can lead to personal liability, tax penalties, and disputes. Clear guidance helps you navigate these duties and protects your personal assets.",
  items: [
    {
      title: "Maintain Corporate Governance",
      description:
        "Clear understanding of your duties ensures good governance and transparency within the company, preventing future legal or financial issues.",
      iconKey: "clipboard-check" as DirectorWhyMattersIconKey,
    },
    {
      title: "Tax-Efficient Strategies",
      description:
        "We provide advice on tax-efficient salary and dividend strategies, helping you maximise your earnings while complying with UK tax laws.",
      iconKey: "circle-dollar" as DirectorWhyMattersIconKey,
    },
    {
      title: "Avoid Disputes",
      description:
        "Misunderstanding roles or responsibilities can lead to conflicts between directors and shareholders. Our advisory service prevents these issues by ensuring everyone is on the same page.",
      iconKey: "heart-check" as DirectorWhyMattersIconKey,
    },
    {
      title: "Secure Personal Assets",
      description:
        "Understanding your legal and tax duties helps protect your personal assets and avoid risks from non-compliance.",
      iconKey: "shield" as DirectorWhyMattersIconKey,
    },
    {
      title: "Avoid Personal Liability",
      description:
        "Directors can be personally liable for company tax debts in cases of negligence or deliberate default. We help you manage risks and avoid personal liability.",
      iconKey: "scale" as DirectorWhyMattersIconKey,
    },
    {
      title: "Prevent Tax Penalties",
      description:
        "Improperly paid dividends or failure to meet your obligations can trigger tax penalties and disputes with HMRC. We ensure you remain compliant with tax laws.",
      iconKey: "alert-triangle" as DirectorWhyMattersIconKey,
    },
  ],
};

