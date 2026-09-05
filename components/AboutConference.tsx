import { Target } from "lucide-react";
import { about, themeSection, imageAssets } from "@/data/conference";
import SectionImage from "./ui/SectionImage";
import Reveal from "./ui/Reveal";

export default function AboutConference() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-card shadow-card">
            <SectionImage
              asset={imageAssets.about}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="mt-5 flex items-start gap-4 rounded-card border border-green/10 bg-cream p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-green text-white">
              <Target className="h-6 w-6" />
            </span>
            <div>
              <span className="eyebrow">Theme</span>
              <p className="mt-1 font-display text-base font-bold uppercase leading-snug tracking-tight text-green">
                Shifting the Culture: From Mediocrity to Excellence
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="text-display-sm text-green sm:text-display-md">
              {about.title}
            </h2>
            <span className="h-1 w-14 rounded-full bg-blue" aria-hidden="true" />
          </Reveal>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 60}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 border-l-2 border-blue pl-5">
            <p className="font-display text-lg font-bold leading-snug text-green sm:text-xl">
              {themeSection.pullQuote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
