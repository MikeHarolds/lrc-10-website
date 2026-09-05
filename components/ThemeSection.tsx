import { themeSection } from "@/data/conference";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const PILLARS = ["Family", "Faith", "Business", "Leadership", "Technology"];

export default function ThemeSection() {
  return (
    <section id="theme" className="section bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow={themeSection.eyebrow}
          title={themeSection.title}
          align="left"
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {themeSection.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 60}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col gap-6">
            <div className="rounded-card border border-green/10 bg-white p-6 shadow-card">
              <span className="eyebrow">Five Pillars</span>
              <ul className="mt-4 space-y-3">
                {PILLARS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm font-semibold text-green"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-green p-6 text-white">
              <p className="font-display text-lg font-bold leading-snug">
                {themeSection.pullQuote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
