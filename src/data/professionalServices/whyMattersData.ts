import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type ProfessionalServicesWhyIconKey = BookkeepingWhyMattersIconKey;

export const PROFESSIONAL_SERVICES_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Financial Discipline for\nProfessional Services",
  description:
    "Time is money in client-driven industries like law, consultancy, and architecture. Poor financial practices, like inefficient billing or poor project costing, can erode profitability and affect your firm’s reputation. We ensure that your financial systems are aligned with your goals, maintaining both profitability and compliance.",
  items: [
    {
      title: "Avoid Profit Erosion",
      description:
        "Inefficient billing, poor time tracking, and unclear project costing can erode profitability. We help streamline these processes to ensure maximum financial return.",
      iconKey: "alert-triangle" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Maximise Time Efficiency",
      description:
        "For client-driven businesses, accurate time tracking is essential. We optimise time recording and billing systems to ensure no revenue is left uncollected.",
      iconKey: "clock" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Protect Your Reputation",
      description:
        "Your firm’s financial health reflects your professional reputation. Ensuring proper financial management safeguards both.",
      iconKey: "shield" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Ensure Long-Term Profitability",
      description:
        "We ensure your firm’s financials are aligned with your long-term goals, helping you grow sustainably and profitably.",
      iconKey: "trend-up" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Ensure Compliance with Regulations",
      description:
        "Professional service firms must comply with regulatory requirements, such as SRA rules. We ensure full compliance to protect your firm from penalties.",
      iconKey: "clipboard-check" as ProfessionalServicesWhyIconKey,
    },
    {
      title: "Optimise Partner Structures",
      description:
        "Managing partner and director profit allocation correctly is critical to avoid disputes and ensure fair remuneration. We provide expert advice on structuring this efficiently.",
      iconKey: "cogs" as ProfessionalServicesWhyIconKey,
    },
  ],
} as const;

