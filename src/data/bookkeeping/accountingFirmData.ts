import { CHOOSE_FIRM_SECTION } from "@/Components/Home/chooseCardData";

export type BookkeepingAccountingFirmIconKey = "users" | "headset" | "refresh";

const iconKeyMap: Record<string, BookkeepingAccountingFirmIconKey> = {
  users: "users",
  headset: "headset",
  refreshCw: "refresh",
};

export const BOOKKEEPING_ACCOUNTING_FIRM_DATA = {
  heading: CHOOSE_FIRM_SECTION.sectionTitle,
  description: CHOOSE_FIRM_SECTION.sectionDescription,
  cards: CHOOSE_FIRM_SECTION.cards.map((card) => ({
    title: card.title,
    description: card.description,
    iconKey: iconKeyMap[card.iconKey ?? "users"] ?? "users",
    cta: { label: card.buttonLabel, href: card.buttonHref },
  })),
} as const;
