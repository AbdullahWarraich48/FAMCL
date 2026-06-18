/** Official URLs for Facts & Stats source citations */
export const FACT_SOURCE_URLS: Readonly<Record<string, string>> = {
  "British Business Bank": "https://www.british-business-bank.co.uk/",
  HMRC: "https://www.gov.uk/government/organisations/hm-revenue-customs",
  "HMRC Compliance Handbook":
    "https://www.gov.uk/hmrc-internal-manuals/compliance-handbook",
  "Office for National Statistics": "https://www.ons.gov.uk/",
  "Office for National Statistics (ONS)": "https://www.ons.gov.uk/",
  ONS: "https://www.ons.gov.uk/",
  NAO: "https://www.nao.org.uk/",
  "Federation of Small Businesses": "https://www.fsb.org.uk/",
  FSB: "https://www.fsb.org.uk/",
  "National Audit Office": "https://www.nao.org.uk/",
  "National Audit Office (NAO)": "https://www.nao.org.uk/",
  MoneyHelper: "https://www.moneyhelper.org.uk/",
  "MoneyHelper (UK Government)": "https://www.moneyhelper.org.uk/",
  "Companies House":
    "https://www.gov.uk/government/organisations/companies-house",
  "legislation.gov.uk": "https://www.legislation.gov.uk/",
  FCA: "https://www.fca.org.uk/",
  ICAEW: "https://www.icaew.com/",
  "ICAEW Business Confidence Monitor":
    "https://www.icaew.com/insights/economy/business-confidence-monitor",
  "The Pensions Regulator": "https://www.thepensionsregulator.gov.uk/",
  "Chartered Institute of Payroll Professionals": "https://www.cipp.org.uk/",
  "Insolvency Service UK":
    "https://www.gov.uk/government/organisations/insolvency-service",
  "Insolvency Service":
    "https://www.gov.uk/government/organisations/insolvency-service",
  "FAM Chartered Accountants": "/",
  "Charity Commission":
    "https://www.gov.uk/government/organisations/charity-commission",
  "National Council for Voluntary Organisations (NCVO)":
    "https://www.ncvo.org.uk/",
  "National Council for Voluntary Organisations":
    "https://www.ncvo.org.uk/",
  "NHS England": "https://www.england.nhs.uk/",
  "Care Quality Commission": "https://www.cqc.org.uk/",
  "Department for Science, Innovation and Technology":
    "https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology",
  "Tech Nation / ONS": "https://www.ons.gov.uk/",
  "Tech Nation": "https://technation.io/",
  "Make UK Manufacturing Outlook":
    "https://www.makeuk.org/insights/economics/manufacturing-outlook",
  "Department for Business and Trade":
    "https://www.gov.uk/government/organisations/department-for-business-and-trade",
};

export function getFactSourceUrl(
  source: string | undefined,
  sourceUrl?: string,
): string | undefined {
  if (sourceUrl?.trim()) return sourceUrl.trim();
  if (!source?.trim()) return undefined;
  return FACT_SOURCE_URLS[source.trim()];
}
