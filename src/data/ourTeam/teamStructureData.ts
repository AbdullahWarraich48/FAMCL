type TeamStructureData = {
  badgeLabel: string;
  title: string;
  paragraphs: string[];
  mainImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
};

export const OUR_TEAM_STRUCTURE_DATA: TeamStructureData = {
  badgeLabel: "Our Structure",
  title: "Our Structure",
  paragraphs: [
    "The team at FAM Chartered Accountants is structured around competence and accountability, not hierarchy. Each engagement is handled by professionals who understand UK tax and compliance frameworks, how regulation is applied in practice, and how small errors compound into large risks. Work is not passed between disconnected departments. Responsibility remains clear throughout an engagement.",
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
