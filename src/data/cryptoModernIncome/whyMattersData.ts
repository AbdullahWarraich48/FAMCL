import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type CryptoWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CRYPTO_MODERN_INCOME_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Proper Crypto Tax Planning",
  description:
    "Crypto tax rules are actively enforced by HMRC. Misunderstanding reporting obligations or failing to report transactions correctly can lead to costly errors and investigations. Proper planning now protects you from future compliance issues.",
  items: [
    {
      title: "HMRC Actively Monitors Crypto Transactions",
      description:
        "HMRC is increasing its scrutiny of crypto transactions, so it’s crucial to stay compliant with the latest tax rules.",
      iconKey: "alert-triangle" as CryptoWhyMattersIconKey,
    },
    {
      title: "Avoid Misunderstanding Reporting Duties",
      description:
        "Many individuals are unaware of their reporting duties for crypto income. Proper advice ensures you meet your obligations.",
      iconKey: "clipboard-check" as CryptoWhyMattersIconKey,
    },
    {
      title: "Prevent HMRC Investigations",
      description:
        "Errors or inconsistent reporting can trigger HMRC investigations. Accurate reporting reduces the risk of unwanted scrutiny.",
      iconKey: "shield" as CryptoWhyMattersIconKey,
    },
    {
      title: "Clarity Protects You from Future Issues",
      description:
        "Proper tax advice and reporting ensure your crypto activity is handled correctly, giving you peace of mind for the future.",
      iconKey: "eye" as CryptoWhyMattersIconKey,
    },
    {
      title: "Confidence in Tax Filing",
      description:
        "Clear guidance allows you to file with confidence, avoiding mistakes and unnecessary penalties.",
      iconKey: "check-square" as CryptoWhyMattersIconKey,
    },
    {
      title: "Adapt to Evolving Rules",
      description:
        "Tax rules surrounding cryptocurrency are constantly evolving. We help you stay ahead and compliant with changing regulations.",
      iconKey: "trend-up" as CryptoWhyMattersIconKey,
    },
  ],
};

