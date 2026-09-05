import { Check, Star } from "lucide-react";
import { tickets } from "@/data/conference";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Tickets() {
  return (
    <section id="tickets" className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow={tickets.eyebrow}
          title={tickets.title}
          intro="Silver is completely free. Gold and Diamond unlock premium seating, premium sessions and the full VIP experience."
        />

        <ul className="mx-auto mt-14 grid max-w-content gap-6 lg:grid-cols-3">
          {tickets.tiers.map((tier, i) => (
            <Reveal
              as="li"
              key={tier.name}
              delay={i * 80}
              className={`relative flex h-full flex-col rounded-[16px] p-7 transition-colors duration-200 ${
                tier.featured
                  ? "border-2 border-blue bg-white shadow-card-hover lg:-mt-4 lg:pb-10"
                  : "border border-green/12 bg-white shadow-card hover:border-blue/25 hover:bg-blue-light/40"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-blue px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  <Star className="h-3.5 w-3.5" /> Recommended
                </span>
              )}
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
                {tier.name}
              </span>
              <span className="mt-2 font-display text-3xl font-extrabold text-green">
                {tier.price}
              </span>
              <span className="text-xs text-muted">{tier.priceNote}</span>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex min-h-[52px] items-center justify-center rounded-pill px-5 text-sm font-bold uppercase tracking-[0.06em] transition-colors ${
                  tier.featured
                    ? "bg-blue text-white hover:bg-blue-dark"
                    : "bg-green text-white hover:bg-green-700"
                }`}
              >
                {tier.cta.label}
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          {tickets.note}
        </Reveal>
      </div>
    </section>
  );
}
