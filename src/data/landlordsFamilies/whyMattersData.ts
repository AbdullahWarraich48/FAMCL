import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type LandlordsFamiliesWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const LANDLORDS_FAMILIES_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a structured professional framework that emphasises accuracy, compliance, and responsible financial management for landlords and families.",
  items: [
    {
      title: "Accuracy Enforced",
      description:
        "Financial reporting and documentation must remain precise and reliable so property and family decisions are based on trusted numbers.",
      iconKey: "check-square" as LandlordsFamiliesWhyMattersIconKey,
    },
    {
      title: "Accountability Retained",
      description:
        "Responsibility for decisions and outcomes remains clear throughout the engagement, supporting confident long-term planning.",
      iconKey: "shield" as LandlordsFamiliesWhyMattersIconKey,
    },
    {
      title: "Compliance Mandatory",
      description:
        "All statutory obligations are addressed proactively, reducing the risk of penalties and unexpected tax exposure.",
      iconKey: "alert-octagon" as LandlordsFamiliesWhyMattersIconKey,
    },
    {
      title: "Process Controlled",
      description:
        "Structured systems reduce risk and maintain consistency across property records, tax returns, and family wealth planning.",
      iconKey: "cogs" as LandlordsFamiliesWhyMattersIconKey,
    },
    {
      title: "Judgement Applied",
      description:
        "Professional expertise guides every financial and regulatory decision, balancing tax efficiency with family objectives.",
      iconKey: "scale" as LandlordsFamiliesWhyMattersIconKey,
    },
    {
      title: "Transparent Service",
      description:
        "Clients always understand their financial position and obligations, with clear visibility before key decisions are made.",
      iconKey: "eye" as LandlordsFamiliesWhyMattersIconKey,
    },
  ],
};

