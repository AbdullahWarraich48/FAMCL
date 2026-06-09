export type HomeHeroSlide = {
  id: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  /** Original home hero uses the frosted card; additional slides use overlay text. */
  variant?: "card" | "overlay";
  heading: string;
  line1: string;
  line2: string;
  ctaLabel: string;
  ctaHref: string;
};

export const HOME_HERO_SLIDES: HomeHeroSlide[] = [
  {
    id: "accounting-tax",
    variant: "card",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Professionals collaborating on financial planning",
    heading: "Local expertise that goes beyond accounting & tax",
    line1:
      "We support you at every stage of your financial journey from compliance to confident financial planning.",
    line2: "",
    ctaLabel: "Book a Free Consultation",
    ctaHref: "#contact",
  },
  {
    id: "bookkeeping",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1470&q=80",
    backgroundImageAlt: "Bookkeeping and accounts on a desk with calculator",
    heading: "Accounts & Bookkeeping You Can Rely On",
    line1:
      "Accurate, structured records that keep your business compliant and fully informed.",
    line2:
      "From day-to-day bookkeeping to year-end reporting — organised and transparent.",
    ctaLabel: "Explore Bookkeeping",
    ctaHref: "/bookkeeping",
  },
  {
    id: "business-formation",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Business planning and company formation",
    heading: "Grow Your Business with Confidence",
    line1:
      "Whether you are starting out or restructuring, we guide you on setup and compliance.",
    line2:
      "Sole traders, limited companies, and landlords — tailored support at every stage.",
    ctaLabel: "Business Formation",
    ctaHref: "/Business_Formation/start_business",
  },
  {
    id: "tax-planning",
    backgroundImageSrc:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1470&auto=format&fit=crop",
    backgroundImageAlt: "Tax planning and financial documents",
    heading: "Tax Planning & Year-Round Compliance",
    line1:
      "Corporation tax, VAT, self-assessment, and payroll handled with care and clarity.",
    line2:
      "Stay ahead of deadlines and make informed decisions with proactive advice.",
    ctaLabel: "View Tax Services",
    ctaHref: "/corporation-tax",
  },
];

export const HOME_HERO_SLIDE_INTERVAL_MS = 3000;
