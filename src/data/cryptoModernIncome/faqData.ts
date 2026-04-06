import type { FaqSectionData } from "@/data/bookkeeping/faqData";

export const CRYPTO_MODERN_INCOME_FAQ_DATA: FaqSectionData = {
  sectionLabel: "FAQs",
  heading: "Crypto & Modern Income FAQs",
  description:
    "Typical questions on how crypto and other digital income are taxed in the UK and what you need to report.",
  items: [
    {
      question: "Do I pay tax on cryptocurrency gains?",
      answer:
        "You may pay income tax or capital gains tax depending on whether you are trading, mining, staking, or investing. The classification drives which rules apply and how losses can be used.",
    },
    {
      question: "What records should I keep for crypto?",
      answer:
        "You should keep dates, tokens, quantities, pound sterling values at acquisition and disposal, fees, and wallet or exchange statements. HMRC expects reasonable records to support figures on your return.",
    },
    {
      question: "What about side income or platform earnings?",
      answer:
        "Income from freelancing, platforms, or digital products is usually taxable even if paid in crypto or foreign currency. We report it in the right boxes and claim allowable expenses.",
    },
    {
      question: "Can I amend past years if I forgot to report crypto?",
      answer:
        "Where disclosure is needed, we can help you use HMRC’s facilities and calculate tax, interest, and any penalties so you put matters right proactively.",
    },
  ],
};
