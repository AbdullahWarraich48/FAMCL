import Image from "next/image";
import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import FooterSection from "@/Components/footer";
import ContractorsFreelancersChallenges from "@/Components/Home/ContractorsFreelancersChallenges";
import { CONTRACTORS_FREELANCERS_HERO_DATA } from "@/data/contractorsFreelancers/heroData";
import { CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA } from "@/data/contractorsFreelancers/serviceScopeData";
import { CONTRACTORS_FREELANCERS_FACTS_DATA } from "@/data/contractorsFreelancers/factsData";
import { CONTRACTORS_FREELANCERS_SOLUTION_DATA } from "@/data/contractorsFreelancers/solutionData";
import { CONTRACTORS_FREELANCERS_WHY_MATTERS_DATA } from "@/data/contractorsFreelancers/whyMattersData";
import { CONTRACTORS_FREELANCERS_FAQ_DATA } from "@/data/contractorsFreelancers/faqData";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";

export const metadata = {
  title: "Contractors & Freelancers | FAM Chartered Accountants",
  description:
    "Specialist tax and compliance support for contractors and freelancers, helping you stay aligned with changing regulations without added stress.",
};

export default function ContractorsFreelancersPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection heroData={CONTRACTORS_FREELANCERS_HERO_DATA} />
      <ServiceScope data={CONTRACTORS_FREELANCERS_SERVICE_SCOPE_DATA} />
      <Facts data={CONTRACTORS_FREELANCERS_FACTS_DATA} />
      <Solution data={CONTRACTORS_FREELANCERS_SOLUTION_DATA} />
      <ContractorsFreelancersChallenges />
      <section className="w-full bg-[#edf1f6]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-8 py-10 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-12">
          <div className="max-w-[560px]">
            <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
              Why Choose This Service
            </span>

            <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
              Built For Environments Where Scrutiny Is Common
            </h2>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
              Contractor taxation is often subject to regulatory review. This service is designed
              with the understanding that contractor arrangements are frequently examined by HMRC
              and other regulators.
            </p>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
              Our support focuses on defensible compliance rather than aggressive optimisation,
              ensuring that decisions are based on regulatory interpretation and practical risk
              management rather than assumptions.
            </p>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Contractor reviewing and signing documents at a desk"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <WhyMatters data={CONTRACTORS_FREELANCERS_WHY_MATTERS_DATA} />
      <Faq data={CONTRACTORS_FREELANCERS_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
