import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CryptoServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CRYPTO_MODERN_INCOME_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "With the rise of cryptocurrency and other digital income streams, understanding the tax implications is essential. We guide you through your tax obligations, ensuring your transactions are reviewed, reported, and compliant with evolving tax rules.",
  items: [
    {
      title: "Review Crypto Activity",
      description:
        "We carefully review your crypto transactions to identify taxable events and ensure accuracy.",
      iconKey: "document-check" as CryptoServiceScopeIconKey,
    },
    {
      title: "Identify Taxable Events",
      description:
        "We identify the taxable events from your digital income and determine how they create tax liabilities.",
      iconKey: "eye" as CryptoServiceScopeIconKey,
    },
    {
      title: "Calculate Liabilities Correctly",
      description:
        "We calculate your tax liabilities based on your crypto activity to ensure you are paying the correct amount.",
      iconKey: "bar-chart" as CryptoServiceScopeIconKey,
    },
    {
      title: "Accurate Reporting",
      description:
        "We ensure your crypto transactions are reported accurately to HMRC according to UK tax law.",
      iconKey: "shield" as CryptoServiceScopeIconKey,
    },
    {
      title: "Future Compliance Advice",
      description:
        "We provide ongoing guidance as tax rules evolve, ensuring continued compliance.",
      iconKey: "trend-up" as CryptoServiceScopeIconKey,
    },
  ],
};

