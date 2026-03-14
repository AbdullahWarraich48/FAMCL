import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ContractorsFreelancersWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const CONTRACTORS_FREELANCERS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Trust Matrix",
  heading: "FAM Chartered Accountants – Trust Matrix",
  description:
    "Our work follows a professional framework that emphasises accountability, clarity, and controlled financial processes for contractors and freelancers.",
  items: [
    {
      title: "Accuracy Enforced",
      description:
        "Financial reporting and documentation must remain precise and reliable so you can sign off with confidence.",
      iconKey: "check-square" as ContractorsFreelancersWhyMattersIconKey,
    },
    {
      title: "Accountability Retained",
      description:
        "Responsibility remains clear throughout the engagement, so decisions and outcomes are always owned.",
      iconKey: "shield" as ContractorsFreelancersWhyMattersIconKey,
    },
    {
      title: "Compliance Mandatory",
      description:
        "All statutory obligations are addressed proactively, reducing the risk of penalties and regulatory issues.",
      iconKey: "alert-octagon" as ContractorsFreelancersWhyMattersIconKey,
    },
    {
      title: "Process Controlled",
      description:
        "Structured systems reduce risk and maintain consistency across invoicing, tax, and financial reporting.",
      iconKey: "cogs" as ContractorsFreelancersWhyMattersIconKey,
    },
    {
      title: "Judgement Applied",
      description:
        "Professional expertise guides every financial and regulatory decision, not just automated or templated processes.",
      iconKey: "scale" as ContractorsFreelancersWhyMattersIconKey,
    },
    {
      title: "Transparent Service",
      description:
        "Clients always understand their financial position and obligations, with visibility before decisions are made.",
      iconKey: "eye" as ContractorsFreelancersWhyMattersIconKey,
    },
  ],
};

