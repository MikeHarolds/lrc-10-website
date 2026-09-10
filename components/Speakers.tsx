"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Ticket } from "lucide-react";
import { speakers, links } from "@/data/conference";
import SpeakerCard from "./SpeakerCard";
import SpeakerProfileModal from "./SpeakerProfileModal";
import Reveal from "./ui/Reveal";

/**
 * Royal-blue speaker grid inspired by the official LRC 10.0 flyer. Fully
 * data-driven — every card comes from `speakers.list`; adding a speaker there
 * is the only change needed. The action tile is the one static grid cell.
 * Clicking a confirmed card opens the existing SpeakerProfileModal — the
 * modal itself is untouched by this component.
 */
export default function Speakers() {
  const [openId, setOpenId] = useState<string | null>(null);

  const activeSpeaker = useMemo(
    () => speakers.list.find((s) => s.id === openId) ?? null,
    [openId],
  );

  return (
    <>
      <section
        id="speakers"
        className="section relative overflow-hidden bg-blue-royal"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_88%_0%,rgba(62,123,250,0.2),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_40%_at_8%_100%,rgba(62,123,250,0.14),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="container relative">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="eyebrow text-blue-bright">{speakers.eyebrow}</span>
            <h2 className="text-display-sm text-white sm:text-display-md">
              World-Class Speakers. Real Conversations.
            </h2>
            <span className="h-1 w-14 rounded-full bg-blue-bright" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed text-white/75 sm:text-base">
              {speakers.body}
            </p>
            {speakers.note && (
              <p className="text-sm font-semibold text-blue-light">{speakers.note}</p>
            )}
          </Reveal>

          <Reveal className="mt-12 sm:mt-14">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
              {speakers.list.map((s) => (
                <SpeakerCard key={s.id} speaker={s} onOpen={setOpenId} />
              ))}

              <li className="flex h-full flex-col items-center justify-center gap-3 rounded-card bg-white p-5 text-center shadow-panel ring-1 ring-white/10 sm:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-light text-blue">
                  <Ticket className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[15px] font-extrabold leading-tight text-green sm:text-base">
                    Register for LRC 10.0
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    Secure your place at this year&rsquo;s conference.
                  </p>
                </div>
                <a
                  href={links.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 rounded-pill bg-blue px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-blue-dark"
                >
                  Register Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {activeSpeaker && (
        <SpeakerProfileModal
          speaker={activeSpeaker}
          onClose={() => setOpenId(null)}
        />
      )}
    </>
  );
}
