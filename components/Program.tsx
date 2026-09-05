import { Check } from "lucide-react";
import { program, imageAssets } from "@/data/conference";
import SectionImage from "./ui/SectionImage";
import Reveal from "./ui/Reveal";

export default function Program() {
  return (
    <section id="program" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <Reveal>
          <span className="eyebrow">{program.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-green sm:text-display-md">
            {program.title}
          </h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-blue" aria-hidden="true" />

          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {program.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green/10 text-green">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-ink/85">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm italic text-muted">{program.note}</p>
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-card shadow-card">
          <SectionImage
            asset={imageAssets.program}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-deep/90 to-transparent p-6">
            <p className="font-display text-lg font-bold text-white">
              A Spirit-filled, content-packed, life-shaping experience.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
