import type {
  BookkeepingFactsIconKey,
  FactsData,
} from "@/data/bookkeeping/factsData";

type CryptoFactsIconKey = BookkeepingFactsIconKey;

export const CRYPTO_MODERN_INCOME_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats (UK)",
  heading: "Crypto Tax in Context",
  description:
    "Understanding the tax treatment of crypto and modern income streams is essential to avoid costly mistakes.",
  items: [
    {
      stat: "HMRC Monitoring",
      description: "HMRC actively monitors crypto transactions.",
      source: "HMRC",
      iconKey: "alert-octagon" as CryptoFactsIconKey,
    },
    {
      stat: "Taxable Gains",
      description: "Crypto gains are taxable under UK law.",
      source: "HMRC",
      iconKey: "badge-percent" as CryptoFactsIconKey,
    },
    {
      stat: "Unaware Taxpayers",
      description: "Many taxpayers are unaware of reporting duties.",
      source: "NAO",
      iconKey: "file-warning" as CryptoFactsIconKey,
    },
  ],
};
