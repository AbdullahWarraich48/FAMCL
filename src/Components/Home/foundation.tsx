import Image from "next/image";

export type FoundationSectionData = {
  pillLabel: string;
  heading: string;
  intro: string;
  bulletIntro?: string;
  bullets?: string[];
  outro: string;
  primaryImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
};

const DEFAULT_FOUNDATION_DATA: FoundationSectionData = {
  pillLabel: "Our Process",
  heading: "Understanding Before Action",
  intro:
    "Our work begins by understanding the full context of a client's financial situation before taking action. This helps identify potential risks, compliance requirements, and areas where careful judgement is required.",
  bulletIntro: "Our approach prioritises:",
  bullets: [
    "understanding the full financial context",
    "identifying areas of exposure and uncertainty",
    "applying regulation carefully and consistently",
  ],
  outro:
    "Deadlines are treated as control points rather than targets, ensuring accuracy is never compromised for speed. Communication remains factual and transparent so clients can make informed decisions.",
  primaryImage: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern office buildings",
  },
  secondaryImage: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team working together in an office",
  },
};

type FoundationProps = {
  data?: FoundationSectionData;
};

export default function Foundation({ data }: FoundationProps) {
  const section = data ?? DEFAULT_FOUNDATION_DATA;

  return (
    <section className="w-full bg-[#f4f6fb]">
      <div className="content-padding-x mx-auto max-w-[1440px] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[560px]">
            <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
              {section.pillLabel}
            </span>

            <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
              {section.heading}
            </h2>

            <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
              {section.intro}
            </p>

            {section.bulletIntro && (
              <p className="mt-6 text-[18px] leading-[1.7] text-[#606b7a]">
                {section.bulletIntro}
              </p>
            )}

            {section.bullets && section.bullets.length > 0 && (
              <div className="mt-3 text-[18px] leading-[1.7] text-[#606b7a]">
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-6 text-[18px] leading-[1.7] text-[#606b7a]">
              {section.outro}
            </p>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[620px] lg:h-[520px]">
            {/* back soft blue block */}
            <div className="absolute right-[70px] top-[78px] h-[260px] w-[360px] rounded-[20px] bg-[#d9e6fb]" />

            {/* back main image */}
            <div className="absolute right-0 top-[55px] h-[260px] w-[360px] overflow-hidden rounded-[28px]">
              <Image
                src={section.primaryImage.src}
                alt={section.primaryImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* front green block */}
            <div className="absolute left-[78px] top-[245px] h-[230px] w-[285px] rounded-[20px] bg-[#b8efbe]" />

            {/* front overlapping image */}
            <div className="absolute left-0 top-[260px] h-[230px] w-[285px] overflow-hidden rounded-[28px]">
              <Image
                src={section.secondaryImage.src}
                alt={section.secondaryImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}