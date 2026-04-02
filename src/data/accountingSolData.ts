export const ACCOUNTING_SOL_SECTION = {
  title: "Comprehensive Accounting Solutions",
  description:
    "From day-to-day bookkeeping to complex tax planning, we provide a full range of accounting services tailored to your needs.",
};

export type ServiceBlock = {
  title: string;
  desc: string;
  bullets: string[];
  imageUrl: string;
  iconKey: "briefcase" | "userRound";
  dot: string;
};

export const ACCOUNTING_SOL_BLOCKS: ServiceBlock[] = [
  {
    title: "Business Services",
    desc: "Complete financial support for businesses of all sizes, from startups to established companies.",
    bullets: [
      "Accounts & Bookkeeping",
      "Corporation Tax",
      "VAT Returns",
      "Payroll & Pensions",
      "Business Advice",
      "Business Structuring",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    iconKey: "briefcase",
    dot: "bg-[#175dab]",
  },
  {
    title: "Personal Services",
    desc: "Expert guidance for managing your personal finances and tax obligations.",
    bullets: [
      "Self-Assessment Tax Returns",
      "Capital Gains & Property Tax",
      "Pensions & Future Planning",
      "Inheritance Tax & Estate Planning",
      "Crypto & Modern Income",
      "Director & Shareholder Advisory",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    iconKey: "userRound",
    dot: "bg-[#175dab]",
  },
];
