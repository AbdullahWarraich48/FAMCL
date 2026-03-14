import Image from "next/image";

export default function LimitedCompaniesChooseService() {
  return (
    <section className="w-full bg-[#edf1f6]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-8 py-10 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-12">
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
            Designed For Directors Who Value Responsibility And Control
          </h2>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            This service recognises that directors carry personal accountability for their company&apos;s
            actions and compliance. Our support focuses on protecting both the business and its
            officers through structured financial oversight.
          </p>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            The approach prioritises accuracy, regulatory discipline, and informed decision-making,
            ensuring directors understand the consequences of financial and compliance decisions
            before they are made.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
            alt="Directors celebrating a successful business decision in an office"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

