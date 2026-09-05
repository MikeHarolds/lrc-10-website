import { Users } from "lucide-react";
import { audience } from "@/data/conference";
import { Icon } from "@/lib/icons";
import Reveal from "./ui/Reveal";

export default function Audience() {
  return (
    <section
      id="audience"
      className="section relative overflow-hidden bg-green text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_100%,rgba(62,123,250,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-blue-bright">{audience.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-white sm:text-display-md">
            {audience.title}
          </h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-blue-bright" aria-hidden="true" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {audience.groups.map((g, i) => (
            <Reveal
              as="li"
              key={g.label}
              delay={(i % 4) * 50}
              className="flex items-center gap-3 rounded-card border border-white/12 bg-white/[0.04] p-4 transition-colors hover:border-blue-bright/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-blue-bright/40 text-blue-bright">
                <Icon name={g.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight text-white/90">
                {g.label}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col gap-3 rounded-card border border-blue-bright/30 bg-blue-bright/10 p-6 sm:flex-row sm:items-center sm:gap-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue text-white">
            <Users className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-white">
              {audience.closing.lead}
            </p>
            <p className="mt-1 text-sm text-white/75">{audience.closing.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
