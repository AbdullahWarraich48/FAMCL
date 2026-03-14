import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import { Facts } from "@/Components/Book-Keeping/Facts";
import Foundation from "@/Components/Home/foundation";
import FooterSection from "@/Components/footer";
import { SWITCHING_ACCOUNTS_HERO_DATA } from "@/data/switchingAccounts/heroData";
import { SWITCHING_ACCOUNTS_FOUNDATION_DATA } from "@/data/switchingAccounts/foundationData";
import { SWITCHING_ACCOUNTS_FACTS_DATA } from "@/data/switchingAccounts/factsData";
import { SWITCHING_ACCOUNTS_CARASOUL } from "@/data/switchingAccounts/carasoulData";
import { SWITCHING_ACCOUNTS_WHY_MATTERS_DATA } from "@/data/switchingAccounts/whyMattersData";
import AccountingSol from "@/Components/Home/AccountingSol";
import Carasoul from "@/Components/Home/Carasoul";
import CtaExact from "@/Components/Home/Cta";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";

export const metadata = {
  title: "Switching Accountants | FAM Chartered Accountants",
  description:
    "Considering moving to a new accountant? We make switching straightforward with a smooth, organised and stress-free handover.",
};

export default function SwitchingAccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={SWITCHING_ACCOUNTS_HERO_DATA} />
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
