import { Check } from "lucide-react";
import { whyAttend } from "@/data/conference";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function WhyAttend() {
  return (
    <section id="why-attend" className="section bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow={whyAttend.eyebrow}
          title={whyAttend.title}
          intro="At Leadership Rebirth Conference 10.0, you will have the opportunity to:"
        />

        <ul className="mx-auto mt-14 grid max-w-content gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyAttend.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 70}
              className="flex h-full gap-4 rounded-card border border-green/10 bg-white p-6 shadow-card"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange text-white">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
