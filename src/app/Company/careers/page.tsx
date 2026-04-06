import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import TeamStructure from "@/Components/Home/TeamStructure";
import { CAREERS_HERO_DATA } from "@/data/careers/heroData";
import { CAREERS_FACTS_DATA } from "@/data/careers/factsData";
import { CAREERS_FAQ_DATA } from "@/data/careers/faqData";

export const metadata = {
  title: "Careers | FAM Chartered Accountants",
  description:
    "Careers at FAM Chartered Accountants for professionals who value careful judgement, professional responsibility, and disciplined work over volume.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CAREERS_HERO_DATA} />
      <TeamStructure
        badgeLabel="Our Culture"
        title="A Workplace Built On Responsibility And Quality"
        paragraphs={[
          "Our work requires attention to detail, regulatory awareness, and a willingness to take responsibility for complex financial decisions.",
          "Roles within the firm are suited to professionals who are comfortable working with responsibility and accountability, prefer solving complex problems properly rather than quickly, and respect regulatory standards and professional discipline.",
          "Professional development within the firm is practical and experience-led. Progress comes from capability, judgement, and demonstrated responsibility rather than tenure alone.",
        ]}
        mainImage={{
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          alt: "Modern office buildings",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
          alt: "Team working together in an office",
        }}
      />

      <Facts data={CAREERS_FACTS_DATA} />

      <Faq data={CAREERS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
