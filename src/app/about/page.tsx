import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import FooterSection from "@/Components/footer";
import AccountingSol from "@/Components/Home/AccountingSol";
import Carasoul from "@/Components/Home/Carasoul";
import CtaExact from "@/Components/Home/Cta";
import { ABOUT_HERO_DATA } from "@/data/about/heroData";
import { ABOUT_CARASOUL } from "@/data/about/carasoulData";
import Foundation from "@/Components/Home/foundation";
import { ABOUT_FOUNDATION_DATA } from "@/data/about/foundationData";
import { ABOUT_FACTS_DATA } from "@/data/about/factsData";
import Facts from "@/Components/Book-Keeping/Facts";

export const metadata = {
  title: "About Us | FAM Chartered Accountants",
  description:
    "Learn more about FAM Chartered Accountants, our focus on clarity, and how we support businesses and individuals with responsible financial guidance.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={ABOUT_HERO_DATA as any} />
     
      <Carasoul hideArrows items={ABOUT_CARASOUL} />
      <AccountingSol />
      <Foundation data={ABOUT_FOUNDATION_DATA} />
      <Facts data={ABOUT_FACTS_DATA} />     
 

      <CtaExact />      
      <FooterSection />
    </main>
  );
}
