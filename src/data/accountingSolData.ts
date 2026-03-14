export const ACCOUNTING_SOL_SECTION = {
  title: "A Blended Approach to Support",
  description:
    "We combine modern tools with professional judgement so your financial information stays organised, accessible and clearly explained.",
};

export type ServiceBlock = {
  title: string;
  desc: string;
  bullets: string[];
  imageUrl: string;
  iconKey: "briefcase" | "userRound";
  iconWrap: string;
  panelBg: string;
  dot: string;
};

export const ACCOUNTING_SOL_BLOCKS: ServiceBlock[] = [
  {
    title: "Technology That Keeps You In Control",
    desc: "Modern accounting tools allow financial information to be managed more efficiently.",
    bullets: [
      "maintain organised financial records",
      "manage invoices and expenses",
      "prepare for Making Tax Digital requirements",
      "access financial information securely",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    iconKey: "briefcase",
    iconWrap: "bg-blue-700",
    panelBg: "bg-gradient-to-br from-white via-white to-blue-100/80",
    dot: "bg-blue-700",
  },
  {
    title: "Personal Advice When You Need It",
    desc: "While technology improves efficiency, professional advice remains essential.",
    bullets: [
      "discuss financial matters and next steps",
      "understand regulatory requirements and implications",
      "receive timely guidance ahead of key decisions",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    iconKey: "userRound",
    iconWrap: "bg-green-600",
    panelBg: "bg-gradient-to-br from-white via-white to-emerald-100/80",
    dot: "bg-green-600",
  },
];
