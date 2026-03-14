import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type SwitchingWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const SWITCHING_ACCOUNTS_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Switching Process",
  heading: "How the Switching Process Works",
  description:
    "Changing accountants follows a straightforward professional process. Each step is handled carefully so your records, obligations and expectations remain clear throughout.",
  items: [
    {
      title: "Initial Discussion",
      description:
        "We begin with a conversation to understand your circumstances, your current arrangements, and the services you require.",
      iconKey: "eye" as SwitchingWhyMattersIconKey,
    },
    {
      title: "Engagement and Fee Agreement",
      description:
        "Once the scope of work is agreed, we provide a clear fixed-fee quotation and confirm how we will support you.",
      iconKey: "clipboard-check" as SwitchingWhyMattersIconKey,
    },
    {
      title: "Professional Communication",
      description:
        "With your permission, we contact your previous accountant to request the relevant accounting and tax records.",
      iconKey: "activity" as SwitchingWhyMattersIconKey,
    },
    {
      title: "Transfer of Records",
      description:
        "Professional bodies require accountants to provide client records within a reasonable timeframe, allowing the transition to proceed smoothly.",
      iconKey: "scale" as SwitchingWhyMattersIconKey,
    },
  ],
};

