import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type DirectorWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const DIRECTOR_SHAREHOLDER_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Director & Shareholder Guidance Matters",
  description:
    "Being a director or shareholder carries significant legal and financial responsibilities. Misunderstanding these duties can lead to personal liability, tax penalties, and disputes. Our advisory service provides the clarity needed to make informed decisions, protect your personal assets, and maintain good corporate governance.",
  items: [
    {
      title: "Significant Responsibilities",
      description:
        "Being a director or shareholder carries significant legal and financial responsibilities.",
      iconKey: "clipboard-check" as DirectorWhyMattersIconKey,
    },
    {
      title: "Personal Liability & Penalties",
      description:
        "Misunderstanding these duties can lead to personal liability, tax penalties, and disputes.",
      iconKey: "alert-triangle" as DirectorWhyMattersIconKey,
    },
    {
      title: "Informed Decisions",
      description:
        "Our advisory service provides the clarity needed to make informed decisions.",
      iconKey: "eye" as DirectorWhyMattersIconKey,
    },
    {
      title: "Protect Personal Assets",
      description: "Protect your personal assets.",
      iconKey: "shield" as DirectorWhyMattersIconKey,
    },
    {
      title: "Good Corporate Governance",
      description: "Maintain good corporate governance.",
      iconKey: "check-square" as DirectorWhyMattersIconKey,
    },
  ],
};
