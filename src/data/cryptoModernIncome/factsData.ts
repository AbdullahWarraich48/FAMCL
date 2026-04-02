import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type CryptoFactsIconKey = BookkeepingFactsIconKey;

export const CRYPTO_MODERN_INCOME_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Crypto Tax Compliance in the UK",
  description:
    "Understanding the tax treatment of crypto and modern income streams is essential to avoid costly mistakes.",
  items: [
    {
      stat: "HMRC Monitors Crypto Transactions",
      description:
        "HMRC actively monitors cryptocurrency transactions and is increasing enforcement activity.",
      source: "HMRC",
      iconKey: "alert-octagon" as CryptoFactsIconKey,
    },
    {
      stat: "Crypto Gains are Taxable",
      description:
        "Crypto gains are subject to tax under UK law, so it’s essential to understand your tax obligations.",
      source: "HMRC",
      iconKey: "badge-percent" as CryptoFactsIconKey,
    },
    {
      stat: "Many Taxpayers Are Unaware of Their Duties",
      description:
        "Many taxpayers are unaware of their obligation to report crypto transactions to HMRC.",
      source: "National Audit Office (NAO)",
      iconKey: "file-warning" as CryptoFactsIconKey,
    },
  ],
};

