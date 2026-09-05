import { finalCta, ctas, event, imageAssets } from "@/data/conference";
import CTAButton from "./ui/CTAButton";
import SectionImage from "./ui/SectionImage";
import Countdown from "./Countdown";
import Reveal from "./ui/Reveal";

export default function FinalCTA() {
  return (
    <section
      id="register"
      className="relative isolate overflow-hidden bg-green-deep py-20 text-white sm:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <SectionImage
          asset={imageAssets.finalCta}
          sizes="100vw"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-deep via-green-deep/85 to-green-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(62,123,250,0.18),transparent_65%)]" />
      </div>

      <div className="container relative max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/45">
            ImpactField <span className="text-blue-bright">presents</span>
          </p>
          <span className="eyebrow text-blue-bright">{finalCta.kicker}</span>
          <h2 id="final-cta-heading" className="mt-4 text-white">
            <span className="block font-display text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
              {finalCta.titleLines[0]}
            </span>
            <span className="block font-display text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
              {finalCta.titleLines[1].replace(" 10.0", "")}{" "}
              <span className="text-blue-bright">10.0</span>
            </span>
          </h2>
          <p className="mt-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-blue-bright sm:text-2xl">
            {finalCta.themeLine}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80">
            {finalCta.lead}
          </p>
        </Reveal>

        <Reveal className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          {ctas.map((c) => (
            <CTAButton
              key={c.label}
              href={c.href}
              label={c.label}
              sublabel={c.sublabel}
              variant={c.variant}
              icon={c.icon}
              fullWidth
            />
          ))}
        </Reveal>

        <Countdown
          target={event.startsAt}
          tone="onDark"
          heading="The Countdown Is On"
          className="mx-auto mt-12 max-w-2xl"
        />

        <p className="mt-6 text-sm text-white/60">{finalCta.closing}</p>
      </div>
    </section>
  );
}
