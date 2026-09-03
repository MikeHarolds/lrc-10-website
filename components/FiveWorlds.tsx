import { fiveWorlds } from "@/data/conference";
import { Icon } from "@/lib/icons";
import Reveal from "./ui/Reveal";

/**
 * The one section that carries the LRC conference-green accent — a deliberate
 * counterpoint to the ImpactField ink used everywhere else.
 */
export default function FiveWorlds() {
  return (
    <section
      id="worlds"
      className="section relative overflow-hidden bg-forest text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_0%,rgba(255,109,0,0.14),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="eyebrow">{fiveWorlds.eyebrow}</span>
          <h2 className="text-display-sm text-white sm:text-display-md">
            {fiveWorlds.title}
          </h2>
          <span className="h-1 w-12 rounded-full bg-orange" aria-hidden="true" />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fiveWorlds.worlds.map((world, i) => (
            <Reveal
              as="li"
              key={world.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-card border border-white/12 bg-white/[0.05] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-white/25"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/25 text-gold">
                <Icon name={world.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-gold">
                {world.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {world.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          className="mx-auto mt-12 max-w-xl text-center font-display text-lg font-bold text-white/90"
        >
          {fiveWorlds.closing}
        </Reveal>
      </div>
    </section>
  );
}
