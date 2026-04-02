export type BookkeepingFactsIconKey =
  | "trend"
  | "file-warning"
  | "building"
  | "chart-pie"
  | "alert-octagon"
  | "clock"
  | "users"
  | "flask"
  | "badge-percent";

export type FactsData = {
  sectionLabel: string;
  heading: string;
  description: string;
  /** Default: large stat-style numbers. Use `principles` for title + body cards (e.g. About). */
  cardStyle?: "statistics" | "principles";
  items: ReadonlyArray<{
    stat: string;
    description: string;
    /** Hidden in the UI when omitted or empty */
    source?: string;
    iconKey: BookkeepingFactsIconKey;
  }>;
};

export const BOOKKEEPING_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Financial Visibility in Context",
  description:
    "Reliable financial management directly affects business stability and survival rates across the UK.",
  items: [
    {
      stat: "60%",
      description:
        "of UK SMEs experience cash-flow problems largely due to poor financial visibility.",
      source: "British Business Bank",
      iconKey: "trend",
    },
    {
      stat: "#1 Cause",
      description:
        "Late or incorrect records are a leading cause of HMRC penalties.",
      source: "HMRC",
      iconKey: "file-warning",
    },
    {
      stat: "5+ Years",
      description:
        "Businesses with regular management accounts are more likely to survive beyond five years.",
      source: "Office for National Statistics",
      iconKey: "building",
    },
  ],
} as const;

