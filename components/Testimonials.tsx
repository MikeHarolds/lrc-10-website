"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, UserRound } from "lucide-react";
import { testimonials } from "@/data/conference";
import Reveal from "./ui/Reveal";

export default function Testimonials() {
  const list = testimonials.list;
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + list.length) % list.length);
  const current = list[index];

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden bg-green text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_90%_10%,rgba(62,123,250,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow text-blue-bright">{testimonials.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-white sm:text-display-md">
            {testimonials.title}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-blue-bright" aria-hidden="true" />
        </Reveal>

        <Reveal className="mt-10">
          <Quote className="mx-auto h-9 w-9 text-blue-bright" aria-hidden="true" />
          <blockquote
            className="mx-auto mt-5 min-h-[140px] max-w-2xl font-display text-xl font-semibold leading-snug text-white sm:text-2xl"
            aria-live="polite"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            {current.photo ? (
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={current.photo}
                  alt={current.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                  style={{ objectPosition: current.photoPosition ?? "50% 30%" }}
                />
              </span>
            ) : (
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white/40">
                <UserRound className="h-6 w-6" />
              </span>
            )}
            <div className="text-left">
              <p className="text-sm font-bold text-white">{current.name}</p>
              <p className="text-xs text-blue-bright">{current.role}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-blue-bright" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {testimonials.note && (
          <p className="mt-6 text-xs text-white/40">{testimonials.note}</p>
        )}
      </div>
    </section>
  );
}
