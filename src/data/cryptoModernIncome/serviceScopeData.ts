import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type CryptoServiceScopeIconKey = BookkeepingServiceScopeIconKey;

export const CRYPTO_MODERN_INCOME_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for You",
  description:
    "We provide tax guidance for cryptocurrency and digital income. Transactions are reviewed accurately. Tax obligations are identified clearly. Reporting requirements are handled correctly. You stay compliant as rules evolve.",
  items: [
    {
      title: "Crypto & Digital Income Guidance",
      description:
        "We provide tax guidance for cryptocurrency and digital income.",
      iconKey: "network" as CryptoServiceScopeIconKey,
    },
    {
      title: "Accurate Transaction Review",
      description: "Transactions are reviewed accurately.",
      iconKey: "search" as CryptoServiceScopeIconKey,
    },
    {
      title: "Clear Tax Obligations",
      description: "Tax obligations are identified clearly.",
      iconKey: "eye" as CryptoServiceScopeIconKey,
    },
    {
      title: "Correct Reporting",
      description: "Reporting requirements are handled correctly.",
      iconKey: "receipt-tax" as CryptoServiceScopeIconKey,
    },
    {
      title: "Evolving Compliance",
      description: "You stay compliant as rules evolve.",
      iconKey: "badge-check" as CryptoServiceScopeIconKey,
    },
  ],
};
