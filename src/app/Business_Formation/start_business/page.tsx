import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import { START_BUSINESS_HERO_DATA } from "@/data/startBusiness/heroData";
import { START_BUSINESS_SERVICE_SCOPE_DATA } from "@/data/startBusiness/serviceScopeData";
import { START_BUSINESS_FACTS_DATA } from "@/data/startBusiness/factsData";
import {
  START_BUSINESS_SOLUTION_DATA,
  START_BUSINESS_TRUST_MATRIX_SOLUTION_DATA,
} from "@/data/startBusiness/solutionData";
import WhyChooseService from "@/Components/Home/ChooseService";
import Challenges from "@/Components/Home/Challenges";

export const metadata = {
  title: "Starting a Business | FAM Chartered Accountants",
  description:
    "Support for individuals establishing a business in the UK with professional secretarial services and structured guidance from day one.",
};

export default function StartBusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={START_BUSINESS_HERO_DATA} />
      <ServiceScope data={START_BUSINESS_SERVICE_SCOPE_DATA} />
      <Facts data={START_BUSINESS_FACTS_DATA} />
      <Solution data={START_BUSINESS_SOLUTION_DATA} />
      <Challenges />
      <WhyChooseService />
      <Solution data={START_BUSINESS_TRUST_MATRIX_SOLUTION_DATA} />

      <Faq />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
