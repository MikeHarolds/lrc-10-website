import { ArrowUpRight } from "lucide-react";
import { legacy } from "@/data/conference";
import AnniversarySeal from "./AnniversarySeal";
import Reveal from "./ui/Reveal";

export default function Legacy() {
  return (
    <section id="legacy" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <AnniversarySeal className="mx-auto h-16 w-16" />
          <span className="mt-5 block eyebrow">ImpactField @10</span>
          <h2 className="mt-3 text-display-sm text-green sm:text-display-md">
            {legacy.title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-muted sm:text-base">
          {legacy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {legacy.milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m}
              delay={(i % 2) * 60}
              className="rounded-card border border-green/10 bg-cream px-5 py-4 text-center font-display text-base font-bold text-green"
            >
              {m}
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-10 max-w-2xl rounded-card bg-green p-7 text-center text-white">
          <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
            {legacy.turn}
          </p>
          <a
            href={legacy.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.06em] text-white link-quiet"
          >
            {legacy.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
