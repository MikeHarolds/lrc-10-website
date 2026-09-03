"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import Image from "next/image";
import { speakers, links } from "@/data/conference";
import Reveal from "./ui/Reveal";

export default function Speakers() {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.8, 320);
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="speakers" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
        <Reveal>
          <span className="eyebrow">{speakers.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-green sm:text-display-md">
            World-Class Speakers. Real Conversations.
          </h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-orange" aria-hidden="true" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {speakers.body}
          </p>
          <p className="mt-4 text-sm font-semibold text-green">{speakers.note}</p>

          <div className="mt-7 flex items-center gap-3">
            <a
              href={links.register}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-pill bg-orange px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-orange-dark"
            >
              Reserve Your Seat
            </a>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous speakers"
                className="grid h-11 w-11 place-items-center rounded-full border border-green/15 text-green transition-colors hover:bg-green hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="More speakers"
                className="grid h-11 w-11 place-items-center rounded-full border border-green/15 text-green transition-colors hover:bg-green hover:text-white"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <ul
            ref={railRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {speakers.list.map((s, i) => (
              <li
                key={i}
                className="relative aspect-[3/4] w-[210px] shrink-0 snap-start overflow-hidden rounded-card bg-green-900 sm:w-[230px]"
              >
                {s.photo && !s.placeholder ? (
                  <Image
                    src={s.photo}
                    alt={`${s.name}${s.role ? `, ${s.role}` : ""}`}
                    fill
                    sizes="230px"
                    className="object-cover"
                    style={{ objectPosition: s.photoPosition ?? "50% 25%" }}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-green-700 to-green-900 text-white/25">
                    <UserRound className="h-14 w-14" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                      Photo soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-deep via-green-deep/70 to-transparent p-4 pt-10">
                  <p className="font-display text-sm font-bold text-white">
                    {s.placeholder ? "To Be Announced" : s.name}
                  </p>
                  {s.focus && (
                    <p className="text-xs font-semibold text-orange">{s.focus}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
