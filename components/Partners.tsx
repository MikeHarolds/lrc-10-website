import Image from "next/image";
import { Check } from "lucide-react";
import { partners, links } from "@/data/conference";
import CTAButton from "./ui/CTAButton";
import Reveal from "./ui/Reveal";

export default function Partners() {
  return (
    <section id="partners" className="section bg-cream">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <span className="eyebrow">{partners.eyebrow}</span>
            <h2 className="mt-3 text-display-sm text-green sm:text-display-md">
              {partners.title}
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-blue" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {partners.body}
            </p>

            <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {partners.opportunities.map((o) => (
                <li key={o} className="flex items-center gap-2.5 text-sm font-medium text-ink/85">
                  <Check className="h-4 w-4 shrink-0 text-blue" />
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton
                href={links.partner}
                label="Become a Partner"
                sublabel="Let's build together"
                variant="primary"
                icon="partner"
              />
            </div>
          </Reveal>

          <Reveal className="rounded-card border border-green/10 bg-white p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Partners &amp; Sponsors
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {partners.logos.map((logo, i) =>
                logo.src ? (
                  <div
                    key={i}
                    className="flex h-20 items-center justify-center rounded-lg border border-green/10 bg-white p-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name ?? "Partner logo"}
                      width={160}
                      height={64}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="grid h-20 place-items-center rounded-lg border border-dashed border-green/15 bg-cream/60 text-[11px] font-semibold uppercase tracking-wider text-muted/60"
                  >
                    Logo
                  </div>
                ),
              )}
            </div>
            <p className="mt-4 text-xs text-muted/70">
              Partner logos will appear here once confirmed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
