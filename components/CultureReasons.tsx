import { cultureReasons } from "@/data/conference";
import { Icon } from "@/lib/icons";
import Reveal from "./ui/Reveal";

export default function CultureReasons() {
  return (
    <section id="why-culture" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="eyebrow">Why It Matters</span>
          <h2 className="text-display-sm text-green sm:text-display-md">
            Why &ldquo;Shifting the Culture&rdquo;?
          </h2>
          <span className="h-1 w-14 rounded-full bg-blue" aria-hidden="true" />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cultureReasons.map((reason, i) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={(i % 3) * 70}
              className="flex h-full flex-col rounded-card border border-green/10 bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  i % 2 === 0 ? "bg-green text-white" : "bg-blue text-white"
                }`}
              >
                <Icon name={reason.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-green">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{reason.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
