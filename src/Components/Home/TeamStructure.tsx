import Image from "next/image";

type TeamStructureProps = {
  badgeLabel: string;
  title: string;
  paragraphs: string[];
  bulletItems?: string[];
  mainImage: {
    src: string;
    alt: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
  };
};

export default function TeamStructure({
  badgeLabel,
  title,
  paragraphs,
  bulletItems,
  mainImage,
  secondaryImage,
}: TeamStructureProps) {
  const [firstParagraph, ...restParagraphs] = paragraphs;

  return (
    <section className="w-full bg-[#f4f6fb]">
      <div className="content-padding-x mx-auto max-w-[1440px] py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[640px]">
            <span className="inline-block rounded-full bg-[#b8efbe] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#198f3f] sm:px-4 sm:py-2 sm:text-[12px]">
              {badgeLabel}
            </span>

            <h2 className="mt-6 text-[26px] font-semibold leading-[1.18] text-[#1f5ca8] sm:mt-8 sm:text-[30px] md:text-[36px] lg:text-[42px]">
              {title}
            </h2>

            {firstParagraph && (
              <p className="mt-5 text-[15px] leading-[1.75] text-[#606b7a] sm:mt-7 sm:text-[17px] md:text-[18px]">
                {firstParagraph}
              </p>
            )}

            {restParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-[15px] leading-[1.75] text-[#606b7a] sm:mt-5 sm:text-[17px] md:mt-6 md:text-[18px]"
              >
                {paragraph}
              </p>
            ))}

            {bulletItems && bulletItems.length > 0 && (
              <div className="mt-3 text-[15px] leading-[1.7] text-[#606b7a] sm:text-[17px] md:text-[18px]">
                <ul className="list-disc space-y-1 pl-5">
                  {bulletItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-[420px] sm:h-[420px] sm:max-w-[520px] lg:h-[520px] lg:max-w-[620px]">
            <div className="absolute right-[24px] top-[52px] h-[210px] w-[260px] rounded-[18px] bg-[#d9e6fb] sm:right-[50px] sm:top-[70px] sm:h-[240px] sm:w-[330px] lg:right-[70px] lg:top-[78px] lg:h-[260px] lg:w-[360px]" />

            <div className="absolute right-0 top-[40px] h-[210px] w-[260px] overflow-hidden rounded-[24px] sm:top-[55px] sm:h-[240px] sm:w-[330px] lg:top-[55px] lg:h-[260px] lg:w-[360px] lg:rounded-[28px]">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute left-[52px] top-[210px] h-[180px] w-[210px] rounded-[18px] bg-[#b8efbe] sm:left-[70px] sm:top-[240px] sm:h-[210px] sm:w-[250px] lg:left-[78px] lg:top-[245px] lg:h-[230px] lg:w-[285px]" />

            <div className="absolute left-0 top-[224px] h-[180px] w-[210px] overflow-hidden rounded-[24px] sm:top-[260px] sm:h-[210px] sm:w-[250px] lg:top-[260px] lg:h-[230px] lg:w-[285px] lg:rounded-[28px]">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
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

