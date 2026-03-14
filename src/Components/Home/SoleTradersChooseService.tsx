import Image from "next/image";

export default function SoleTradersChooseService() {
  return (
    <section className="w-full bg-[#edf1f6]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-8 py-10 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-12">
        <div className="max-w-[560px]">
          <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
            Why Choose This Service
          </span>

          <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
            Designed For Independent Professionals
          </h2>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            This service is designed specifically for Sole Traders who often manage their work alone
            and cannot afford avoidable financial mistakes.
          </p>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            Our approach focuses on predictability, compliance, and practical financial structure,
            helping self-employed individuals manage tax obligations confidently while maintaining
            full visibility of their business performance.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Independent professionals collaborating in a meeting"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

