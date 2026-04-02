import type { BookkeepingFactsIconKey, FactsData } from "@/data/bookkeeping/factsData";

type DirectorFactsIconKey = BookkeepingFactsIconKey;

export const DIRECTOR_SHAREHOLDER_FACTS_DATA: FactsData = {
  sectionLabel: "Facts & Stats",
  heading: "Director & Shareholder Compliance in the UK",
  description:
    "Ensuring directors and shareholders comply with legal and tax obligations is essential for protecting both the company and personal assets.",
  items: [
    {
      stat: "Personal Liability for Tax Debts",
      description:
        "Directors can be held personally liable for the company’s tax debts in cases of negligence or deliberate default.",
      source: "HMRC",
      iconKey: "alert-octagon" as DirectorFactsIconKey,
    },
    {
      stat: "Dividends & Compliance",
      description:
        "Improperly paid dividends are one of the most common causes of company compliance failures, often triggering action from HMRC.",
      source: "Companies House",
      iconKey: "file-warning" as DirectorFactsIconKey,
    },
    {
      stat: "Companies Act 2006 Duties",
      description:
        "The Companies Act 2006 sets out seven key duties for directors, including the duty to promote the success of the company.",
      source: "legislation.gov.uk",
      iconKey: "building" as DirectorFactsIconKey,
    },
  ],
};

