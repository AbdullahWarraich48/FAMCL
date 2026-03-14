import { Facts } from "@/Components/Book-Keeping/Facts";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import AccountingSol from "@/Components/Home/AccountingSol";
import Carasoul from "@/Components/Home/Carasoul";
import CtaExact from "@/Components/Home/Cta";
import Foundation from "@/Components/Home/foundation";
import { ABOUT_HERO_DATA } from "@/data/about/heroData";
import { SWITCHING_ACCOUNTS_CARASOUL } from "@/data/switchingAccounts/carasoulData";
import { SWITCHING_ACCOUNTS_FACTS_DATA } from "@/data/switchingAccounts/factsData";
import { SWITCHING_ACCOUNTS_FOUNDATION_DATA } from "@/data/switchingAccounts/foundationData";
import { SWITCHING_ACCOUNTS_WHY_MATTERS_DATA } from "@/data/switchingAccounts/whyMattersData";

export const metadata = {
  title: "About Us | FAM Chartered Accountants",
  description:
    "Learn more about FAM Chartered Accountants, our focus on clarity, and how we support businesses and individuals with responsible financial guidance.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={ABOUT_HERO_DATA as any} />
      <Foundation data={SWITCHING_ACCOUNTS_FOUNDATION_DATA} />
      <Facts data={SWITCHING_ACCOUNTS_FACTS_DATA} />
      <AccountingSol />
      <Carasoul hideArrows items={SWITCHING_ACCOUNTS_CARASOUL} />
      <WhyMatters data={SWITCHING_ACCOUNTS_WHY_MATTERS_DATA} />            
      <CtaExact />      
      <FooterSection />
    </main>
  );
}
