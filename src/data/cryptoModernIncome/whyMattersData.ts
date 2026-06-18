import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CryptoWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CRYPTO_MODERN_INCOME_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Crypto Tax Compliance Matters",
  description:
    "Crypto tax rules are actively enforced. Many people misunderstand reporting obligations. Errors can trigger HMRC investigations. Clarity protects you from future issues. Confidence replaces guesswork.",
  items: [
    {
      title: "Actively Enforced",
      description: "Crypto tax rules are actively enforced.",
      iconKey: "alert-triangle" as CryptoWhyMattersIconKey,
    },
    {
      title: "Misunderstood Obligations",
      description: "Many people misunderstand reporting obligations.",
      iconKey: "clipboard-check" as CryptoWhyMattersIconKey,
    },
    {
      title: "Investigation Risk",
      description: "Errors can trigger HMRC investigations.",
      iconKey: "shield" as CryptoWhyMattersIconKey,
    },
    {
      title: "Future Protection",
      description: "Clarity protects you from future issues.",
      iconKey: "eye" as CryptoWhyMattersIconKey,
    },
    {
      title: "Confidence Over Guesswork",
      description: "Confidence replaces guesswork.",
      iconKey: "check-square" as CryptoWhyMattersIconKey,
    },
  ],
};
