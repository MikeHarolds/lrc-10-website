import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { event, ctas, imageAssets } from "@/data/conference";
import CTAButton from "./ui/CTAButton";
import SectionImage from "./ui/SectionImage";
import Reveal from "./ui/Reveal";

const rows = [
  {
    icon: CalendarDays,
    label: "Date",
    value: event.dateLabel,
    detail: "Two days",
  },
  {
    icon: Clock,
    label: "Time",
    value: "Day 1 — from 10:00 AM",
    detail: "Day 2 — from 2:00 PM",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: event.venue,
    detail: event.address,
  },
];

export default function EventDetails() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.mapQuery,
  )}`;

  return (
    <section id="event" className="section bg-cream">
      <div className="container">
        <Reveal className="overflow-hidden rounded-[20px] bg-green-900 text-white shadow-panel">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-10">
              <span className="eyebrow">Event Details</span>
              <h2 className="mt-3 text-display-sm text-white">Plan Your Experience</h2>
              <span className="mt-4 block h-1 w-14 rounded-full bg-orange" aria-hidden="true" />

              <dl className="mt-8 space-y-6">
                {rows.map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-orange">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-base font-semibold text-white">
                        {row.value}
                      </dd>
                      <dd className="text-sm text-white/60">{row.detail}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white link-quiet"
              >
                View on Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative min-h-[300px] lg:min-h-[480px]">
              <SectionImage
                asset={imageAssets.venue}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-green-900/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/55 to-green-900/35 lg:bg-gradient-to-l lg:from-green-900/80 lg:via-green-900/45 lg:to-green-900/25" />
              <div className="absolute inset-x-5 bottom-5 rounded-card bg-orange p-5 text-white sm:inset-x-auto sm:right-6 sm:max-w-xs">
                <p className="font-display text-lg font-extrabold">Don&rsquo;t Miss This</p>
                <p className="mt-1 text-sm font-medium text-white/85">
                  Two days that will shift your mindset, expand your network and
                  accelerate your impact.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {ctas.map((c) => (
            <CTAButton
              key={c.label}
              href={c.href}
              label={c.label}
              sublabel={c.sublabel}
              variant={c.variant}
              surface="light"
              icon={c.icon}
              fullWidth
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
