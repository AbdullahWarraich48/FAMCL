type CareersCultureData = {
  badgeLabel: string;
  title: string;
  paragraphs: string[];
  mainImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
};

export const CAREERS_CULTURE_DATA: CareersCultureData = {
  badgeLabel: "Our Culture",
  title: "Our Culture",
  paragraphs: [
    "FAM Chartered Accountants looks for professionals who value judgement over volume. The work requires attention to detail, comfort with responsibility, and respect for regulatory standards. Roles are suited to individuals who prefer solving complex problems properly and working in an environment where quality matters and accountability is valued over delegation. Development is practical and experience-led. Progress comes from capability, not tenure.",
  ],
  mainImage: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern office buildings",
  },
  secondaryImage: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team working together in an office",
  },
};
