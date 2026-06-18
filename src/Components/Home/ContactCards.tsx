"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONTACT_CARDS, CONTACT_CARDS_SECTION } from "@/data/contactCardsData";

type ContactCardsProps = {
  className?: string;
};

export default function ContactCards({ className = "" }: ContactCardsProps) {
  const handleAnchorClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      } else {
        window.location.hash = href;
      }
    };

  return (
    <section
      className={`bg-[#cbdcff] py-16 md:py-20 ${className}`.trim()}
      aria-labelledby="contact-cards-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="contact-cards-heading"
            className="mb-4 flex min-w-0 items-center justify-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl md:gap-5 md:text-4xl"
          >
            <span
              className="h-px w-10 shrink-0 bg-[#1E63B3] md:w-16"
              aria-hidden
            />
            <span className="min-w-0 shrink text-center">
              <span className="text-[#12254b]">
                {CONTACT_CARDS_SECTION.titleBefore}
              </span>
              <span className="text-red-600">
                {CONTACT_CARDS_SECTION.titleHighlight}
              </span>
              <span className="text-[#12254b]">
                {CONTACT_CARDS_SECTION.titleAfter}
              </span>
            </span>
            <span
              className="h-px w-10 shrink-0 bg-[#1E63B3] md:w-16"
              aria-hidden
            />
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            {CONTACT_CARDS_SECTION.description}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CONTACT_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div
                className={`flex flex-1 flex-col px-6 py-8 text-center md:px-7 md:py-9 ${card.theme.panelBg}`}
              >
                <h3
                  className={`text-xl font-bold md:text-[1.35rem] ${card.theme.titleColor}`}
                >
                  {card.title}
                </h3>
                <p className="mx-auto mt-4 max-w-sm flex-1 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                  {card.description}
                </p>

                <Link
                  href={card.buttonHref}
                  aria-label={card.buttonLabel}
                  onClick={handleAnchorClick(card.buttonHref)}
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border bg-white/60 text-sm font-semibold transition-colors ${card.theme.buttonBorder} ${card.theme.buttonText} ${card.theme.buttonHoverBg}`}
                >
                  {card.buttonLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
