"use client";

import Image from "next/image";
import { Plus, UserRound } from "lucide-react";
import type { Speaker } from "@/data/conference";

type SpeakerCardProps = {
  speaker: Speaker;
  onOpen?: (id: string) => void;
};

/** One speaker in the horizontal rail — a placeholder for `status: "tba"`,
 *  otherwise a clickable card that opens the full profile (SpeakerProfileModal). */
export default function SpeakerCard({ speaker, onOpen }: SpeakerCardProps) {
  const clickable = speaker.status === "confirmed";
  const subtitle = clickable ? speaker.role ?? speaker.focus : speaker.focus;

  const media = speaker.photo ? (
    <Image
      src={speaker.photo}
      alt={`${speaker.name}${speaker.role ? `, ${speaker.role}` : ""}`}
      fill
      sizes="230px"
      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      style={{ objectPosition: speaker.photoPosition ?? "50% 20%" }}
    />
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-green-700 to-green-900 text-white/25">
      <UserRound className="h-14 w-14" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
        Photo soon
      </span>
    </div>
  );

  const caption = (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-deep via-green-deep/70 to-transparent p-4 pt-10">
      <p className="font-display text-sm font-bold text-white">
        {speaker.status === "tba" ? "To Be Announced" : speaker.name}
      </p>
      {subtitle && (
        <p className="line-clamp-1 text-xs font-semibold text-blue-bright">{subtitle}</p>
      )}
    </div>
  );

  const baseClasses =
    "group relative block h-full w-full overflow-hidden rounded-card bg-green-900 text-left";

  if (!clickable) {
    return (
      <li className="relative aspect-[3/4] w-[210px] shrink-0 snap-start sm:w-[230px]">
        <div className={baseClasses} aria-label="Speaker to be announced">
          {media}
          {caption}
        </div>
      </li>
    );
  }

  return (
    <li className="relative aspect-[3/4] w-[210px] shrink-0 snap-start sm:w-[230px]">
      <button
        type="button"
        onClick={(e) => {
          e.currentTarget.focus();
          onOpen?.(speaker.id);
        }}
        aria-haspopup="dialog"
        className={`${baseClasses} cursor-pointer transition-transform duration-200 ease-out-soft hover:-translate-y-1 focus-visible:-translate-y-1`}
      >
        {media}
        {caption}
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-blue group-focus-visible:bg-blue"
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
    </li>
  );
}
