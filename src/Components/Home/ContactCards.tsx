"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { CONTACT_CARDS, CONTACT_CARDS_SECTION } from "@/data/contactCardsData";

type ContactCardsProps = {
  className?: string;
};

export default function ContactCards({ className = "" }: ContactCardsProps) {
  return (
    <section
      className={` bg-[#F6F9FF] py-16 md:py-20 ${className}`.trim()}
      aria-labelledby="contact-cards-heading"
    >
      <div className="content-padding-x mx-auto max-w-[1440px]">
        {/* Header */}
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="contact-cards-heading"
            className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-[#175dab] md:gap-4 md:text-4xl"
          >
            <span
              className="h-px w-8 shrink-0 bg-gray-400 md:w-12"
              aria-hidden
            />
            {CONTACT_CARDS_SECTION.title}
            <span
              className="h-px w-8 shrink-0 bg-gray-400 md:w-12"
              aria-hidden
            />
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-600 md:text-lg">
            {CONTACT_CARDS_SECTION.description}
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {CONTACT_CARDS.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white/70 to-[#D8EAFF] shadow-md"
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
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <p className="text-left text-sm leading-relaxed text-gray-600 md:text-base">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0 px-6 pb-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-full border-gray-800 bg-gradient font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  asChild
                >
                  <Link
                    href={card.buttonHref}
                    aria-label={`${card.buttonLabel} - opens in same page`}
                    tabIndex={0}
                  >
                    {card.buttonLabel}
                    <ArrowRight
                      className="ml-1 size-4"
                      aria-hidden
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
