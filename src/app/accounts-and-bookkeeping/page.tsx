import AccountingFirm from "@/Components/Book-Keeping/Accounting-Firm";
import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import Contact from "@/Components/Book-Keeping/Contact";
import Facts from "@/Components/Book-Keeping/Facts";
import Faq from "@/Components/Book-Keeping/Faq";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Solution from "@/Components/Book-Keeping/Solution";
import Steps from "@/Components/Book-Keeping/Steps";
import WhyMatters from "@/Components/Book-Keeping/Why-Matters";
import FooterSection from "@/Components/footer";

export const metadata = {
  title: "Accounts & Bookkeeping | FAM Chartered Accountants",
  description:
    "Accurate, structured financial records for your business. From day-to-day bookkeeping to year-end reporting.",
};

export default function AccountsAndBookkeepingPage() {
  return (
    <main className="min-h-screen bg-white">
      <BookKeepingHerosection />
      <ServiceScope />
      <WhyMatters />
  
      <Facts />
      <Solution />
      <Faq />
      <Contact />
      <Steps />
        <AccountingFirm />
        <FooterSection />
        
        
    </main>
  );
}
