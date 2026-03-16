"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  NAV_LINKS,
  BUSINESS_SERVICES_COL1,
  BUSINESS_SERVICES_COL2,
  BUSINESS_SERVICES_COL3,
  BUSINESS_FORMATION_COL1,
  BUSINESS_FORMATION_COL2,
  BUSINESS_FORMATION_COL3,
  PERSONAL_SERVICES_COL1,
  PERSONAL_SERVICES_COL2,
  PERSONAL_SERVICES_COL3,
  WHO_WE_HELP_COL1,
  WHO_WE_HELP_COL2,
  WHO_WE_HELP_COL3,
  ABOUT_US_COL1,
  ABOUT_US_COL2,
  ABOUT_US_COL3,
  RESOURCES_COL1,
  RESOURCES_COL2,
  RESOURCES_COL3,
} from "@/data/navbarData";
import { NAVBAR_TOP_BAR_DATA } from "@/data/navbarTopBarData";

type OpenDropdown =
  | "business"
  | "business-formation"
  | "personal"
  | "who-we-help"
  | "about-us"
  | "resources"
  | null;

const getDropdownKey = (label: string): OpenDropdown => {
  if (label === "For You") return "personal";
  if (label === "Business Formation") return "business-formation";
  if (label === "Industries") return "who-we-help";
  if (label === "Company") return "about-us";
  if (label === "Who We Help") return "who-we-help";
  if (label === "About Us") return "about-us";
  return label.toLowerCase() as OpenDropdown;
};

type SimpleLink = { label: string; href: string };

const collectMobileLinks = (key: OpenDropdown): SimpleLink[] => {
  switch (key) {
    case "business":
      return [
        ...BUSINESS_SERVICES_COL1,
        ...BUSINESS_SERVICES_COL2,
        ...BUSINESS_SERVICES_COL3,
      ].map(({ label, href }) => ({ label, href }));
    case "business-formation":
      return [
        ...BUSINESS_FORMATION_COL1,
        ...BUSINESS_FORMATION_COL2,
        ...BUSINESS_FORMATION_COL3,
      ].map(({ label, href }) => ({ label, href }));
    case "personal":
      return [
        ...PERSONAL_SERVICES_COL1,
        ...PERSONAL_SERVICES_COL2,
        ...PERSONAL_SERVICES_COL3,
      ].map((item: { label: string; href: string }) => ({
        label: item.label,
        href: item.href,
      }));
    case "who-we-help":
      return [
        ...WHO_WE_HELP_COL1,
        ...WHO_WE_HELP_COL2,
        ...WHO_WE_HELP_COL3,
      ].map((item: { label: string; href: string }) => ({
        label: item.label,
        href: item.href,
      }));
    case "about-us":
      return [
        ...ABOUT_US_COL1.links,
        ...ABOUT_US_COL2.links,
        ...ABOUT_US_COL3.links,
      ].map((item: { label: string; href: string }) => ({
        label: item.label,
        href: item.href,
      }));
    case "resources":
      return [
        ...RESOURCES_COL1,
        ...RESOURCES_COL2,
        ...RESOURCES_COL3,
      ].map(({ label, href }) => ({ label, href }));
    default:
      return [];
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);
  const [openMobileSection, setOpenMobileSection] = useState<OpenDropdown>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileSection(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="relative w-full bg-white"
      role="banner"
      aria-label="Main navigation"
    >
      {/* Top information bar */}
      <div className="content-padding-x mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 bg-white py-2.5 text-xs sm:text-sm">
       <div className="flex items-center">
         
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <p className="hidden text-xs font-medium text-blue-600 sm:block sm:text-sm">
            {NAVBAR_TOP_BAR_DATA.trustText}
          </p>
          <a
            href={`tel:${NAVBAR_TOP_BAR_DATA.phoneNumber.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-red-600 transition-colors hover:text-red-700 rounded sm:text-sm"
            aria-label={NAVBAR_TOP_BAR_DATA.phoneLabel}
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {NAVBAR_TOP_BAR_DATA.phoneLabel}
          </a>
        </div>
      </div>

      {/* Wrapper so dropdown stays open when moving from trigger to panel */}
      <div
        className="relative"
        ref={navRef}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        {/* Navbar row - always on top of dropdown, solid bg so dropdown never shows through */}
        <div
          className={`content-padding-x mx-auto relative z-[60] flex h-20 w-full max-w-[1440px] shrink-0 items-center justify-between bg-white py-4 md:h-24 md:py-4 ${!openDropdown ? "border-b border-slate-200/80" : ""}`}
        >
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center rounded"
          aria-label="FAM - Financial & Management Consultants Limited, go to homepage"
          onClick={handleCloseMenu}
        >
          {/* Larger logo so 'Chartered Accountants' is clearly readable */}
          <div className="relative h-16 w-44 md:h-28 md:w-56">
            <Image
              src="/assets/images/FAM Approved Logo 4-Feb-2026.png"
              alt="FAM Approved logo"
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">
            Financial &amp; Management Consultants Limited
          </span>
        </Link>

        {/* Center: Nav links */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex xl:gap-5"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(getDropdownKey(item.label))}
              >
                  <button
                  type="button"
                  className="group flex items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 rounded"
                  aria-expanded={openDropdown === getDropdownKey(item.label)}
                  aria-haspopup="true"
                  aria-label={`${item.label} menu`}
                  onClick={() => setOpenDropdown((prev) => (prev === getDropdownKey(item.label) ? null : getDropdownKey(item.label)))}
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 text-slate-500 transition-colors group-hover:text-slate-700 ${openDropdown === getDropdownKey(item.label) ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 rounded"
              >
                {item.label}
                <svg
                  className="h-4 w-4 text-slate-500 transition-colors group-hover:text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            )
          )}
        </nav>

        {/* Right: Search + Contact Us */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 xl:flex"
            aria-label="Search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <Link
            href="#contact"
            className="rounded-lg bg-[#12254b] px-4 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-[#0f1f3d] xl:px-5"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="#contact"
            className="rounded-lg bg-[#12254b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0f1f3d]"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded text-slate-700 hover:bg-slate-100"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        </div>

        {/* Business Formation dropdown */}
        {openDropdown === "business-formation" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="Business formation"
            onMouseEnter={() => setOpenDropdown("business-formation")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">Business Formation</h3>
                      </div>

                      <div className="hidden h-10 w-px bg-white/25 sm:block" />

                      <p className="text-sm leading-relaxed text-white/90">
                        Whether you&apos;re just starting out or looking to restructure, we provide
                        expert guidance on business setup, legal status, and compliance
                        requirements.
                      </p>
                    </div>
                  </div>

                  {/* Links area */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {BUSINESS_FORMATION_COL1.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-2">
                        {BUSINESS_FORMATION_COL2.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-2">
                        {BUSINESS_FORMATION_COL3.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search business formation services"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business dropdown */}
        {openDropdown === "business" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="Business services"
            onMouseEnter={() => setOpenDropdown("business")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                {/* Content (same width as before: 8/12 of 980px) */}
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">Business</h3>
                      </div>

                      {/* divider */}
                      <div className="hidden h-10 w-px bg-white/25 sm:block" />

                      <p className="text-sm leading-relaxed text-white/90">
                        If you run a business and need help with accounting, tax, or
                        financial management whether simple or complex, our experienced
                        team is here to support you at every stage.
                      </p>
                    </div>
                  </div>

                  {/* Links area */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {BUSINESS_SERVICES_COL1.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-2">
                        {BUSINESS_SERVICES_COL2.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-2">
                        {BUSINESS_SERVICES_COL3.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search business services"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* For You (personal) dropdown */}
        {openDropdown === "personal" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="For you services"
            onMouseEnter={() => setOpenDropdown("personal")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">For You</h3>
                      </div>

                      <div className="hidden h-10 w-px bg-white/25 sm:block" />

                      <p className="text-sm leading-relaxed text-white/90">
                        Our dedicated personal tax and financial planning services help you manage
                        self-assessment, capital gains, pensions, and modern income planning with
                        confidence.
                      </p>
                    </div>
                  </div>

                  {/* Links area */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {PERSONAL_SERVICES_COL1.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {PERSONAL_SERVICES_COL2.map(({ label, href }) => {
                          const isInheritanceRetirement =
                            label === "Inheritance Tax, Retirement Strategy & Estate Planning";
                          return (
                            <li key={label}>
                              <Link
                                href={href}
                                onClick={() => setOpenDropdown(null)}
                                className={`text-sm font-medium text-slate-700 hover:text-blue-700 ${
                                  isInheritanceRetirement ? "whitespace-normal" : "whitespace-nowrap"
                                }`}
                              >
                                {isInheritanceRetirement ? (
                                  <>
                                    Inheritance Tax, Retirement
                                    <br />
                                    Strategy &amp; Estate Planning
                                  </>
                                ) : (
                                  label
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="space-y-2">
                        {PERSONAL_SERVICES_COL3.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search personal services"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industries dropdown */}
        {openDropdown === "who-we-help" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="Industries"
            onMouseEnter={() => setOpenDropdown("who-we-help")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">Industries</h3>
                      </div>

                      <div className="hidden h-10 w-px bg-white/25 sm:block" />

                      <p className="text-sm leading-relaxed text-white/90">
                        We serve a diverse range of sectors with tailored accounting and tax
                        solutions designed to meet the unique challenges of your industry.
                      </p>
                    </div>
                  </div>

                  {/* Links area */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {WHO_WE_HELP_COL1.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {WHO_WE_HELP_COL2.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {WHO_WE_HELP_COL3.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search who we help"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Company (About Us) dropdown */}
        {openDropdown === "about-us" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="Company"
            onMouseEnter={() => setOpenDropdown("about-us")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">Company</h3>
                      </div>
                      <div className="hidden h-10 w-px bg-white/25 sm:block" />
                      <p className="text-sm leading-relaxed text-white/90">
                        Learn more about who we are, how we work, and why businesses and individuals
                        across the UK choose us as their trusted accountants.
                      </p>
                    </div>
                  </div>

                  {/* Links area - simple three columns */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {ABOUT_US_COL1.links.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {ABOUT_US_COL2.links.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {ABOUT_US_COL3.links.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search about us"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources dropdown */}
        {openDropdown === "resources" && (
          <div
            className="absolute left-1/2 top-full z-40 mt-2 w-[min(653px,calc(100vw-2rem))] -translate-x-1/2"
            role="dialog"
            aria-label="Resources"
            onMouseEnter={() => setOpenDropdown("resources")}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div>
                <div>
                  {/* Top blue header */}
                  <div className="bg-blue-700 px-6 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <div className="shrink-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                          Find out more about
                        </p>
                        <h3 className="text-2xl font-bold text-white">Resources</h3>
                      </div>
                      <div className="hidden h-10 w-px bg-white/25 sm:block" />
                      <p className="text-sm leading-relaxed text-white/90">
                        Stay informed with the latest updates, answers to common questions, and
                        helpful tools to manage your finances effectively.
                      </p>
                    </div>
                  </div>

                  {/* Links area */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                      <ul className="space-y-2">
                        {RESOURCES_COL1.map(({ label, href, withArrow }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                                withArrow ? "text-red-600" : "text-slate-700"
                              } hover:text-red-700`}
                            >
                              {label}
                              {withArrow && (
                                <span className="transition-transform group-hover:translate-x-0.5">
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {RESOURCES_COL2.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {RESOURCES_COL3.map(({ label, href }) => (
                          <li key={label}>
                            <Link
                              href={href}
                              onClick={() => setOpenDropdown(null)}
                              className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-blue-700"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Search row */}
                  <div className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
                          <input
                            type="search"
                            placeholder="How can we help you today?"
                            className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            aria-label="Search resources"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
                        aria-label="Search"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile / tablet dropdown menu */}
      {isMenuOpen && (
        <nav
          className="content-padding-x border-t border-slate-200 bg-white py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, hasDropdown }) => {
              const key = getDropdownKey(label);
              const isSectionOpen = openMobileSection === key;
              const mobileLinks = hasDropdown ? collectMobileLinks(key) : [];

              if (!hasDropdown) {
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center justify-between py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                      onClick={handleCloseMenu}
                    >
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-slate-800"
                    onClick={() =>
                      setOpenMobileSection((prev) => (prev === key ? null : key))
                    }
                    aria-expanded={isSectionOpen}
                    aria-controls={`mobile-section-${key}`}
                  >
                    <span>{label}</span>
                    <svg
                      className={`h-4 w-4 text-slate-500 transition-transform ${
                        isSectionOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isSectionOpen && mobileLinks.length > 0 && (
                    <ul
                      id={`mobile-section-${key}`}
                      className="mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3"
                    >
                      {mobileLinks.map(({ label: childLabel, href: childHref }) => (
                        <li key={childLabel}>
                          <Link
                            href={childHref}
                            className="block py-1 text-sm text-slate-600 hover:text-slate-900"
                            onClick={handleCloseMenu}
                          >
                            {childLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
