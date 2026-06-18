import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { LANDLORDS_FAMILIES_HERO_DATA } from "@/data/landlordsFamilies/heroData";
import { LANDLORDS_FAMILIES_SERVICE_SCOPE_DATA } from "@/data/landlordsFamilies/serviceScopeData";
import { LANDLORDS_FAMILIES_FACTS_DATA } from "@/data/landlordsFamilies/factsData";
import {
  LANDLORDS_FAMILIES_SOLUTION_DATA,
  LANDLORDS_FAMILIES_TRUST_MATRIX_SOLUTION_DATA,
} from "@/data/landlordsFamilies/solutionData";
import { LANDLORDS_FAMILIES_FAQ_DATA } from "@/data/landlordsFamilies/faqData";
import LandlordsFamiliesChallenges from "@/Components/Home/LandlordsFamiliesChallenges";
import LandlordsFamiliesChooseService from "@/Components/Home/LandlordsFamiliesChooseService";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Landlords & Families | FAM Chartered Accountants",
  description:
    "Property and personal tax made clear. Tax and planning support for property income and family financial arrangements.",
};

export default function LandlordsFamiliesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={LANDLORDS_FAMILIES_HERO_DATA} />
      <ServiceScope data={LANDLORDS_FAMILIES_SERVICE_SCOPE_DATA} />
      <Facts data={LANDLORDS_FAMILIES_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Solution data={LANDLORDS_FAMILIES_SOLUTION_DATA} sectionClassName={SECTION_BG.alt} />
      <LandlordsFamiliesChallenges />
      <LandlordsFamiliesChooseService />
      <Solution data={LANDLORDS_FAMILIES_TRUST_MATRIX_SOLUTION_DATA} />
      <Faq data={LANDLORDS_FAMILIES_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
