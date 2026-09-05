import { experience } from "@/data/conference";
import { Icon } from "@/lib/icons";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          intro="More than a conference — a transformation experience. Here is what is waiting for you at LRC 10.0."
        />

        <ul className="mx-auto mt-14 grid max-w-content gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experience.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 70}
              className="group flex h-full flex-col rounded-card border border-green/10 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-green text-white transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-green">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
