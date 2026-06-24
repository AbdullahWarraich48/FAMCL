import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type TaxEnquiriesWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const TAX_ENQUIRIES_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters to You",
  heading: "Why Choose our Service",
  description:
    "Dedicated enquiry support backed by practical tax expertise, tailored advice, and a client-focused approach.",
  items: [
    {
      title: "UK & International Expertise",
      description: "Expertise in UK and international tax matters.",
      iconKey: "scale" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Commercially Focused Advice",
      description: "Practical, commercially focused tax advice.",
      iconKey: "chart-line" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Tailored Solutions",
      description:
        "Tailored solutions based on your individual circumstances.",
      iconKey: "clipboard-check" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Evolving Compliance Support",
      description:
        "Support with evolving tax regulations and compliance requirements.",
      iconKey: "shield" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Proactive Risk Management",
      description:
        "Proactive advice to help manage tax risks and opportunities.",
      iconKey: "alert-triangle" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Individuals & Businesses",
      description: "Dedicated support for both individuals and businesses.",
      iconKey: "heart-check" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Client-Focused Approach",
      description:
        "Client-focused approach aligned with your goals and priorities.",
      iconKey: "eye" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Clear, Reliable Advice",
      description:
        "Clear, reliable advice delivered with confidence and professionalism.",
      iconKey: "check-square" as TaxEnquiriesWhyMattersIconKey,
    },
    {
      title: "Comprehensive Enquiry Support",
      description:
        "Comprehensive support across a wide range of aspects relating to tax enquiries.",
      iconKey: "anchor" as TaxEnquiriesWhyMattersIconKey,
    },
  ],
};
