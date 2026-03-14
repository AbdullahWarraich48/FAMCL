import BookKeepingHerosection from "@/Components/Book-Keeping/Herosection";
import ServiceScope from "@/Components/Book-Keeping/Service-scope";

export const metadata = {
  title: "Accounts & Bookkeeping | FAM Chartered Accountants",
  description:
    "Accurate, structured financial records for your business. From day-to-day bookkeeping to year-end reporting.",
};

    export default function AccountsAndBookkeepingPage() {
  return (
    <>
      <BookKeepingHerosection />
      <ServiceScope />
    </>
  );
}
