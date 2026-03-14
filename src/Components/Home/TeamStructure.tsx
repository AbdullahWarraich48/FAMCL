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
      <div className="content-padding-x mx-auto max-w-[1440px] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-[560px]">
            <span className="inline-block rounded-full bg-[#b8efbe] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#198f3f]">
              {badgeLabel}
            </span>

            <h2 className="mt-8 text-[34px] font-semibold leading-[1.12] text-[#1f5ca8] md:text-[42px]">
              {title}
            </h2>

            {firstParagraph && (
              <p className="mt-8 text-[18px] leading-[1.7] text-[#606b7a]">
                {firstParagraph}
              </p>
            )}

            {restParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 text-[18px] leading-[1.7] text-[#606b7a]"
              >
                {paragraph}
              </p>
            ))}

            {bulletItems && bulletItems.length > 0 && (
              <div className="mt-3 text-[18px] leading-[1.7] text-[#606b7a]">
                <ul className="list-disc space-y-1 pl-5">
                  {bulletItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[620px] lg:h-[520px]">
            <div className="absolute right-[70px] top-[78px] h-[260px] w-[360px] rounded-[20px] bg-[#d9e6fb]" />

            <div className="absolute right-0 top-[55px] h-[260px] w-[360px] overflow-hidden rounded-[28px]">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute left-[78px] top-[245px] h-[230px] w-[285px] rounded-[20px] bg-[#b8efbe]" />

            <div className="absolute left-0 top-[260px] h-[230px] w-[285px] overflow-hidden rounded-[28px]">
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

