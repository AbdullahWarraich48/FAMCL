import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";
import { TAX_ENQUIRIES_FACTS_DATA } from "@/data/taxEnquiries/factsData";
import { TAX_ENQUIRIES_FAQ_DATA } from "@/data/taxEnquiries/faqData";
import { TAX_ENQUIRIES_SERVICE_SCOPE_DATA } from "@/data/taxEnquiries/serviceScopeData";
import { TAX_ENQUIRIES_SOLUTION_DATA } from "@/data/taxEnquiries/solutionData";
import { TAX_ENQUIRIES_WHY_MATTERS_DATA } from "@/data/taxEnquiries/whyMattersData";

export const metadata = {
  title: "Tax Enquiries and Investigations | FAM Chartered Accountants",
  description:
    "Expert HMRC enquiry support for SMEs — self employment, VAT, PAYE, CIS, corporation tax, and more.",
};

export default function TaxEnquiriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceScope data={TAX_ENQUIRIES_SERVICE_SCOPE_DATA} />
      <WhyMatters data={TAX_ENQUIRIES_WHY_MATTERS_DATA} />
      <Facts data={TAX_ENQUIRIES_FACTS_DATA} />
      <Solution data={TAX_ENQUIRIES_SOLUTION_DATA} />
      <Faq data={TAX_ENQUIRIES_FAQ_DATA} />
      <Contact />
      <Steps />
      <AccountingFirm />
      <FooterSection />
    </main>
  );
}
