import type {
  BookkeepingServiceScopeIconKey,
  ServiceScopeData,
} from "@/data/bookkeeping/serviceScopeData";

type BusinessAdviceServiceIconKey = BookkeepingServiceScopeIconKey;

export const BUSINESS_ADVICE_SERVICE_SCOPE_DATA: ServiceScopeData = {
  sectionLabel: "Service Scope",
  heading: "What We Manage for Your Business",
  description:
    "Our advisory services support businesses through significant decisions, from growth strategies to managing risks. We help you make informed, data-driven decisions that align with your goals and market conditions.",
  items: [
    {
      title: "Growth Strategy",
      description:
        "We provide actionable advice to help your business grow, whether through expanding operations, optimising finances, or diversifying.",
      iconKey: "trend-up" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Restructuring & Planning",
      description:
        "We guide you through business restructuring to improve efficiency, profitability, or exit options.",
      iconKey: "document-check" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Retirement Strategy",
      description:
        "We help you prepare for the future by developing long-term retirement plans for business owners and key stakeholders.",
      iconKey: "bar-chart" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Risk Management",
      description:
        "Our approach is proactive, reviewing the risks your business faces and helping you implement strategies to mitigate potential financial and operational risks.",
      iconKey: "shield" as BusinessAdviceServiceIconKey,
    },
    {
      title: "Proactive Advice",
      description:
        "We monitor key performance indicators regularly, so we can help you address issues early and maintain sustainable growth.",
      iconKey: "eye" as BusinessAdviceServiceIconKey,
    },
  ],
};

