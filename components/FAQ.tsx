"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/conference";
import Reveal from "./ui/Reveal";

const INITIAL = 7;

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="border-b border-green/10">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-base font-bold text-green sm:text-lg">
            {q}
          </span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-green/20 text-green transition-transform duration-200 ${
              open ? "rotate-45 bg-green text-white" : ""
            }`}
            aria-hidden="true"
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        hidden={!open}
        className="pb-5 pr-12 text-sm leading-relaxed text-muted sm:text-[15px]"
      >
        {a}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs.items : faqs.items.slice(0, INITIAL);

  return (
    <section id="faq" className="section bg-white">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">{faqs.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-green sm:text-display-md">
            {faqs.title}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-orange" aria-hidden="true" />
        </Reveal>

        <div className="mt-10 border-t border-green/10">
          {visible.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        {faqs.items.length > INITIAL && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex min-h-[48px] items-center rounded-pill border border-green/25 px-6 text-sm font-bold uppercase tracking-[0.06em] text-green transition-colors hover:bg-green hover:text-white"
            >
              {showAll ? "Show fewer" : "View more FAQs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
