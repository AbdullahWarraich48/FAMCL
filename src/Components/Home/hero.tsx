import Image from "next/image";

export default function LandingSection() {
  return (
    <section className="w-full bg-white">
      {/* HERO AREA - full viewport, background edge-to-edge */}
      <div className="relative z-10 min-h-screen w-full">
        {/* Background image with soft shadow */}
        <div className="absolute inset-0 shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
            alt="Professionals collaborating on financial planning"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* light overlay like figma */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="content-padding-x relative flex min-h-screen w-full items-center mx-auto max-w-6xl py-14 sm:py-20">
          {/* Frosted card - white + strong blur like Figma */}
          <div className="w-full max-w-xl rounded-2xl bg-white/70 shadow-2xl shadow-neutral-900/15 ring-1 ring-white/40 backdrop-blur-xl p-6 sm:p-10">
            <p className="text-sm text-slate-600">
              Financial &amp; Management Consultants Limited
            </p>

            <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Local expertise <br />
              that goes beyond <br />
              accounting &amp; tax
            </h1>

            <p className="mt-4 max-w-md text-slate-600 leading-relaxed">
              We support you at every stage of your financial journey from
              compliance to confident financial planning.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#12254b] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-red-700 active:bg-red-800 transition">
              {/* simple calendar icon */}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M8 3v2M16 3v2M4 7h16M6 11h4M6 15h4M14 11h4M14 15h4M6 21h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* SECOND CARD SECTION */}
     
    </section>
  );
}
