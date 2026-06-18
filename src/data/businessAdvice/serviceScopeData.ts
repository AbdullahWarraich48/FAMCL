import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type BusinessAdviceServiceIconKey = BookkeepingServiceScopeIconKey;

export const BUSINESS_ADVICE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "We provide practical financial advice for real decisions. Growth, restructuring, retirement strategy and risk management. Advice is based on numbers, not opinions. Options are explained clearly. You understand consequences before acting. Support is proactive, not reactive.",
  items: [
    {
      title: "Practical Financial Advice",
      description:
        "We provide practical financial advice for real decisions.",
      iconKey: "bar-chart" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Growth & Strategy",
      description:
        "Growth, restructuring, retirement strategy and risk management.",
      iconKey: "trend-up" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Numbers-Based Guidance",
      description: "Advice is based on numbers, not opinions.",
      iconKey: "calculator" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Clear Options",
      description:
        "Options are explained clearly. You understand consequences before acting.",
      iconKey: "eye" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Proactive Support",
      description: "Support is proactive, not reactive.",
      iconKey: "shield" as BusinessAdviceServiceIconKey,
    },
  ],
};
