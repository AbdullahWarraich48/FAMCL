import Image from "next/image";

export default function ContractsFreelancersChooseService() {
  return (
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
            Contractor taxation is often subject to regulatory review. This service is designed with
            the understanding that contractor arrangements are frequently examined by HMRC and other
            regulators.
          </p>

          <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
            Our support focuses on defensible compliance rather than aggressive optimisation,
            ensuring that decisions are based on regulatory interpretation and practical risk
            management rather than assumptions.
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[485px]">
          <Image
            src="https://images.unsplash.com/photo-1517817748494-1d4d7eaf5ac4?auto=format&fit=crop&w=1200&q=80"
            alt="Contractor signing paperwork under review"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

