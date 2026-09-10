"use client";

import Image from "next/image";
import { ArrowRight, UserRound } from "lucide-react";
import type { Speaker } from "@/data/conference";

type SpeakerCardProps = {
  speaker: Speaker;
  onOpen?: (id: string) => void;
};

/**
 * One speaker in the grid — a placeholder for `status: "tba"`, otherwise a
 * clickable card that opens the full profile (SpeakerProfileModal). Portrait
 * on top, a royal-blue identity panel with a diagonal cut below it (echoing
 * the profile modal and the official LRC 10.0 flyer).
 */
export default function SpeakerCard({ speaker, onOpen }: SpeakerCardProps) {
  const clickable = speaker.status === "confirmed";
  const subtitle = speaker.role ?? speaker.focus;

  const media = speaker.photo ? (
    <Image
      src={speaker.photo}
      alt={`${speaker.name}${speaker.role ? `, ${speaker.role}` : ""}`}
      fill
      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 18vw"
      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      style={{ objectPosition: speaker.photoPosition ?? "50% 15%" }}
    />
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-blue-royal to-green-deep text-white/25">
      <UserRound className="h-12 w-12" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
        Photo soon
      </span>
    </div>
  );

  const panel = (
    <div
      className="relative -mt-5 flex flex-1 flex-col bg-blue bg-gradient-to-br from-blue-bright/25 via-blue to-blue-dark px-4 pb-4 pt-5 sm:px-5 sm:pb-5"
      style={{ clipPath: "polygon(0 14%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <p className="font-display text-[15px] font-extrabold leading-tight text-white sm:text-base">
        {speaker.status === "tba" ? "To Be Announced" : speaker.name}
      </p>
      {subtitle && (
        <p className="mt-1 text-xs font-semibold leading-snug text-blue-light">
          {subtitle}
        </p>
      )}
      {clickable && (
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">
          View Profile
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </span>
      )}
    </div>
  );

  const frame = "relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-blue-royal";

  if (!clickable) {
    return (
      <li className="flex h-full flex-col overflow-hidden rounded-card bg-blue-royal shadow-panel ring-1 ring-white/10">
        <div className={frame} aria-label="Speaker to be announced">
          {media}
        </div>
        {panel}
      </li>
    );
  }

  return (
    <li className="flex h-full flex-col overflow-hidden rounded-card bg-blue-royal shadow-panel ring-1 ring-white/10 transition-transform duration-200 ease-out-soft hover:-translate-y-1">
      <button
        type="button"
        onClick={(e) => {
          e.currentTarget.blur();
          onOpen?.(speaker.id);
        }}
        aria-haspopup="dialog"
        className="group flex h-full flex-col text-left focus-visible:outline-offset-[-3px]"
      >
        <div className={frame}>{media}</div>
        {panel}
      </button>
    </li>
  );
}
