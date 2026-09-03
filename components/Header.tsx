"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, parentNav, links, site } from "@/data/conference";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ImpactField parent-brand utility strip */}
      <div className="hidden bg-green-deep text-white/70 lg:block">
        <div className="container flex h-9 items-center justify-between text-[12px]">
          <nav className="flex items-center gap-5" aria-label="ImpactField">
            {parentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={links.impactfieldEvents}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-white/80 transition-colors hover:text-white"
          >
            Our Events <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`bg-green transition-shadow duration-300 ${
          scrolled || open
            ? "shadow-[0_1px_0_rgba(255,255,255,0.08),0_16px_40px_-24px_rgba(0,0,0,0.9)]"
            : ""
        }`}
      >
        <div className="container flex h-[68px] items-center justify-between gap-4">
          <a href="#top" aria-label="ImpactField — LRC 10.0 home" className="shrink-0">
            <Logo tone="light" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Conference sections">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.contactPhoneHref}
              className="hidden items-center gap-2 rounded-pill border border-white/20 px-4 py-2.5 text-[13px] font-semibold text-white/85 transition-colors hover:border-white/40 hover:text-white xl:inline-flex"
            >
              <Phone className="h-4 w-4 text-orange" />
              Need help?
            </a>
            <a
              href={links.register}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-pill bg-orange px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-orange-dark sm:inline-flex"
            >
              Register Now
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`bg-green transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="container flex flex-col py-3" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 py-3.5 text-base font-semibold text-white/90"
            >
              {item.label}
            </a>
          ))}

          <p className="pb-2 pt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
            ImpactField
          </p>
          {parentNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-b border-white/8 py-3 text-sm font-medium text-white/70"
            >
              {item.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}

          <a
            href={links.register}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 rounded-pill bg-orange px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.06em] text-white"
          >
            Register Now
          </a>
          <a
            href={site.contactPhoneHref}
            className="mb-3 mt-2 inline-flex items-center justify-center gap-2 rounded-pill border border-white/20 px-5 py-3 text-sm font-semibold text-white/85"
          >
            <Phone className="h-4 w-4 text-orange" /> Need help? {site.contactPhone}
          </a>
        </nav>
      </div>
    </header>
  );
}
