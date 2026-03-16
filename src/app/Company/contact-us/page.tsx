
import ServiceScope from "@/Components/Book-Keeping/Service-scope";
import Contact from "@/Components/Book-Keeping/Contact";

import FooterSection from "@/Components/footer";

import CtaExact from "@/Components/Home/Cta";

export const metadata = {
  title: "Fixed Fees | FAM Chartered Accountants",
  description:
    "Clear fixed-fee accountancy pricing agreed in advance, linked to the scope and responsibility of the work so you can plan with confidence.",
};

export default function LandlordsFamiliesPage() {
  return (
    <main className="min-h-screen bg-white">
     
      <Contact />
      <CtaExact />
      <FooterSection />
    </main>
  );
}
