import { ctas, hero, event, imageAssets } from "@/data/conference";
import CTAButton from "./ui/CTAButton";
import SectionImage from "./ui/SectionImage";
import Countdown from "./Countdown";
import AnniversarySeal from "./AnniversarySeal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-green-deep text-white"
      aria-labelledby="hero-heading"
    >
      {/* Imagery */}
      <div className="absolute inset-0 -z-10">
        <SectionImage
          asset={imageAssets.hero}
          sizes="100vw"
          className="opacity-40 lg:opacity-100"
        />
        {/* Ink wash — full on mobile, left-to-right fade on desktop */}
        <div className="absolute inset-0 bg-green-deep/75 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block lg:bg-green-deep/35" />
        <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-green-deep lg:from-28% lg:via-green-deep/85 lg:via-58% lg:to-green-deep/45" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_12%,rgba(255,109,0,0.14),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-deep to-transparent" />
      </div>

      <div className="container relative pb-16 pt-[124px] sm:pt-[140px] lg:pb-24 lg:pt-[184px]">
        <div className="max-w-[46rem]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
            ImpactField <span className="text-orange">presents</span>
          </p>
          <div className="flex items-center gap-3">
            <AnniversarySeal className="h-12 w-12 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange">
              {hero.kicker}
            </span>
          </div>

          <h1 id="hero-heading" className="mt-6 text-white">
            <span className="block font-display text-[clamp(2.25rem,6.4vw,4.75rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
              {hero.titleLines[0]}
            </span>
            <span className="block font-display text-[clamp(2.25rem,6.4vw,4.75rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
              {hero.titleLines[1].replace(" 10.0", "")}{" "}
              <span className="text-gold">10.0</span>
            </span>
            <span className="mt-3 flex items-center gap-3 font-display text-[clamp(1.25rem,3.4vw,2rem)] font-bold uppercase tracking-[0.02em] text-gold">
              <span className="hidden h-px w-10 bg-gold sm:block" aria-hidden="true" />
              {hero.themeLine}
            </span>
          </h1>

          <p className="mt-6 text-lg font-semibold text-white sm:text-xl">
            {hero.lead}
          </p>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/80 sm:text-base">
            {hero.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ctas.map((c, i) => (
              <CTAButton
                key={c.label}
                href={c.href}
                label={c.label}
                sublabel={c.sublabel}
                variant={c.variant}
                icon={c.icon}
                className={`w-full justify-start ${i === 2 ? "sm:col-span-2" : ""}`}
              />
            ))}
          </div>

          <Countdown
            target={event.startsAt}
            className="mt-10 max-w-xl"
            tone="onDark"
          />
        </div>
      </div>
    </section>
  );
}
