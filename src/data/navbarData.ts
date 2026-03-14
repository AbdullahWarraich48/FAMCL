export type NavLink =
  | { label: string; href: string; hasDropdown?: false }
  | { label: string; href: string; hasDropdown: true };

export const NAV_LINKS: NavLink[] = [
  { label: "Business", href: "#business", hasDropdown: true },
  { label: "For You", href: "#for-you", hasDropdown: true },
  {
    label: "Business Formation",
    href: "/Business_Formation/start_business",
    hasDropdown: true,
  },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Company", href: "/Company/our-company", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
];

export const BUSINESS_FORMATION_COL1: { label: string; href: string; withArrow?: boolean }[] = [
  {
    label: "Starting a Business",
    href: "/Business_Formation/start_business",
    withArrow: true,
  },
  {
    label: "Sole Traders",
    href: "/Business_Formation/sole-traders",
  },
] as const;

export const BUSINESS_FORMATION_COL2 = [
  {
    label: "Limited Companies",
    href: "/Business_Formation/limited-companies",
  },
] as const;

export const BUSINESS_FORMATION_COL3 = [
  {
    label: "Landlords & Families",
    href: "/Business_Formation/landlords-families",
  },
  {
    label: "Contractors & Freelancers",
    href: "/Business_Formation/contractors-freelancers",
  },
] as const;

export const BUSINESS_SERVICES_COL1: { label: string; href: string; withArrow?: boolean }[] = [
  {
    label: "Accounts & Bookkeeping",
    href: "/accounts-and-bookkeeping",
    withArrow: true,
  },
  {
    label: "VAT Returns",
    href: "/vat-returns",
  },
];

export const BUSINESS_SERVICES_COL2 = [
  {
    label: "Corporation Tax",
    href: "/corporation-tax",
  },
  {
    label: "Payroll & Pensions",
    href: "/payroll-pansions",
  },
] as const;

export const BUSINESS_SERVICES_COL3 = [
  {
    label: "Business Advice",
    href: "/business-advice",
  },
  {
    label: "Business Structuring",
    href: "/business-structure",
  },
] as const;

export const PERSONAL_SERVICES_COL1: { label: string; href: string; withArrow?: boolean }[] = [
  {
    label: "Self-Assessment Tax",
    href: "/self-assesment-tax",
    withArrow: true,
  },
  { label: "Capital Gains & Property Tax", href: "/capital-gain-property-tax" },
] as const;

export const PERSONAL_SERVICES_COL2 = [
  { label: "Pensions & Future Planning", href: "/pensions-future-planning" },
  {
    label: "Inheritance Tax, Retirement Strategy & Estate Planning",
    href: "/inheritance-tax-retirement-strategy-estate-planning",
  },
] as const;

export const PERSONAL_SERVICES_COL3 = [
  { label: "Crypto & Modern Income", href: "/crypto-modern-income" },
  {
    label: "Director & Shareholder Advisory",
    href: "/director-shareholder-advice",
  },
] as const;

export const WHO_WE_HELP_COL1: { label: string; href: string; withArrow?: boolean }[] = [
  {
    label: "Contractors & Property",
    href: "/Industries/construction-property",
    withArrow: true,
  },
  {
    label: "Manufacturing & Engineering",
    href: "/Industries/manufacturing-engaging",
  },
] as const;

export const WHO_WE_HELP_COL2 = [
  {
    label: "Professional Services",
    href: "/Industries/professional-services",
  },
  {
    label: "Technology & Digital",
    href: "/Industries/technology-digital",
  },
] as const;

export const WHO_WE_HELP_COL3 = [
  {
    label: "Healthcare",
    href: "/Industries/healthcare",
  },
  {
    label: "Not-for-Profit",
    href: "/Industries/not-for-profit",
  },
] as const;

export const ABOUT_US_COL1: {
  title: string;
  links: { label: string; href: string; withArrow?: boolean }[];
} = {
  title: "About Company",
  links: [
    { label: "Our Story", href: "/Company/our-company", withArrow: true },
    { label: "Our Team", href: "/Company/our-team" },
  ],
} as const;

export const ABOUT_US_COL2: {
  title: string;
  links: { label: string; href: string }[];
} = {
  title: "How We Work",
  links: [
    { label: "How We Work", href: "/Company/how-we-work" },
    { label: "Fixed Fees", href: "/Company/fixed-fees" },
  ],
} as const;

export const ABOUT_US_COL3: {
  title: string;
  links: { label: string; href: string }[];
} = {
  title: "Careers & Contact",
  links: [
    { label: "Careers", href: "/Company/careers" },
    { label: "Contact Us", href: "#contact-us" },
  ],
} as const;

export const RESOURCES_COL1: { label: string; href: string; withArrow?: boolean }[] = [
  { label: "News & Updates", href: "#resources-news-updates", withArrow: true },
] as const;

export const RESOURCES_COL2 = [
  { label: "FAQs", href: "/faqs" },
] as const;

export const RESOURCES_COL3 = [
  { label: "Tools & Calculators", href: "#resources-tools-calculators" },
] as const;
