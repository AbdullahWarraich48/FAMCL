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
import { LANDLORDS_FAMILIES_SOLUTION_DATA } from "@/data/landlordsFamilies/solutionData";
import { LANDLORDS_FAMILIES_WHY_MATTERS_DATA } from "@/data/landlordsFamilies/whyMattersData";
import LandlordsFamiliesChallenges from "@/Components/Home/LandlordsFamiliesChallenges";
import LandlordsFamiliesChooseService from "@/Components/Home/LandlordsFamiliesChooseService";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";

export const metadata = {
  title: "Landlords & Families | FAM Chartered Accountants",
  description:
    "Structured tax planning and compliance support for landlords and families, making property and personal tax responsibilities clear and manageable.",
};

export default function LandlordsFamiliesPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={LANDLORDS_FAMILIES_HERO_DATA} />
      <ServiceScope data={LANDLORDS_FAMILIES_SERVICE_SCOPE_DATA} />
      <Facts data={LANDLORDS_FAMILIES_FACTS_DATA} />
      <Solution data={LANDLORDS_FAMILIES_SOLUTION_DATA} />
      <LandlordsFamiliesChallenges />
      <LandlordsFamiliesChooseService />
      <WhyMatters data={LANDLORDS_FAMILIES_WHY_MATTERS_DATA} />
      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
