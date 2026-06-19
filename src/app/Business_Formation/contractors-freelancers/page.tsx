import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
// import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import ContractorsFreelancersChallenges from "@/Components/Home/ContractorsFreelancersChallenges";
import ContractorsFreelancersChooseService from "@/Components/Home/ContractorsFreelancersChooseService";
import { CONTRACTORS_FREELANCERS_HERO_DATA } from "@/data/contractorsFreelancers/heroData";
import { CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA } from "@/data/contractorsFreelancers/serviceScopeData";
import { CONTRACTORS_FREELANCERS_FACTS_DATA } from "@/data/contractorsFreelancers/factsData";
import {
  CONTRACTORS_FREELANCERS_SOLUTION_DATA,
  CONTRACTORS_FREELANCERS_TRUST_MATRIX_SOLUTION_DATA,
} from "@/data/contractorsFreelancers/solutionData";
import { CONTRACTORS_FREELANCERS_FAQ_DATA } from "@/data/contractorsFreelancers/faqData";
import { SECTION_BG } from "@/constants/sectionBackgrounds";

export const metadata = {
  title: "Contractors & Freelancers | FAM Chartered Accountants",
  description:
    "Stay compliant without the stress. Compliance and tax support for contractors and freelancers where regulatory interpretation affects outcomes.",
};

export default function ContractorsFreelancersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BookKeepingHerosection heroData={CONTRACTORS_FREELANCERS_HERO_DATA} /> */}
      <ServiceScope data={CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA} />
      <Facts data={CONTRACTORS_FREELANCERS_FACTS_DATA} sectionClassName={SECTION_BG.white} />
      <Solution data={CONTRACTORS_FREELANCERS_SOLUTION_DATA} sectionClassName={SECTION_BG.alt} />
      <ContractorsFreelancersChallenges />
      <ContractorsFreelancersChooseService />
      <Solution data={CONTRACTORS_FREELANCERS_TRUST_MATRIX_SOLUTION_DATA} />
      <Faq data={CONTRACTORS_FREELANCERS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
