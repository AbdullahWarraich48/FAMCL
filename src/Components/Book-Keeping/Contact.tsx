"use client";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import SectionIntroHeader from "@/Components/SectionIntroHeader";
import { BOOKKEEPING_CONTACT_DATA } from "@/data/bookkeeping";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  const data = BOOKKEEPING_CONTACT_DATA;

  return (
    <section
      id="contact"
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      {/* Hero “Get Started Today” links to #get-started; #contact kept for existing anchors */}
      <div
        id="get-started"
        className="pointer-events-none h-0 scroll-mt-24 md:scroll-mt-28"
        aria-hidden
      />
      <div className="content-padding-x mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <SectionIntroHeader
            headingId="contact-heading"
            sectionLabel={data.sectionLabel}
            heading={data.heading}
            headingBgClassName="bg-white"
          />

          <p className="mt-6 max-w-2xl text-[18px] leading-[27.8px] text-slate-600">
            {data.description}
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="overflow-hidden rounded-2xl border-0 border-slate-100 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-name">
                    {data.form.fields.name.label} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder={data.form.fields.name.placeholder}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-email">
                    {data.form.fields.email.label} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={data.form.fields.email.placeholder}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-phone">
                    {data.form.fields.phone.label} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder={data.form.fields.phone.placeholder}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-help">
                    {data.form.fields.help.label} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="contact-help"
                    name="message"
                    placeholder={data.form.fields.help.placeholder}
                    required
                    aria-required="true"
                    rows={4}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-hear">
                    {data.form.fields.hear.label}
                  </Label>
                  <Textarea
                    id="contact-hear"
                    name="hear"
                    placeholder={data.form.fields.hear.placeholder}
                    rows={3}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="contact-updates"
                    name="updates"
                    className="mt-0.5"
                    aria-describedby="contact-updates-label"
                  />
                  <Label
                    id="contact-updates-label"
                    htmlFor="contact-updates"
                    className="cursor-pointer font-normal text-slate-700"
                  >
                    {data.form.checkboxLabel}
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-[#12254b] py-6 text-base font-semibold text-white "
                >
                  {data.form.submitLabel}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
