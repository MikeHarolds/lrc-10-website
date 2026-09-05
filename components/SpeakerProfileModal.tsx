"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, UserRound } from "lucide-react";
import type { Speaker } from "@/data/conference";

type SpeakerProfileModalProps = {
  speaker: Speaker;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Premium, accessible profile dialog for one confirmed speaker. Portaled to
 *  <body>, traps focus, closes on Escape / backdrop click, and restores
 *  focus to the trigger on close. Reusable for any Speaker with a bio. */
export default function SpeakerProfileModal({
  speaker,
  onClose,
}: SpeakerProfileModalProps) {
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = `speaker-profile-${speaker.id}`;

  const requestClose = () => {
    if (prefersReducedMotion()) {
      onClose();
      return;
    }
    setClosing(true);
    window.setTimeout(onClose, 190);
  };

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ).filter((el) => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstName = speaker.name.split(" ")[0];
  const hasBio = speaker.bio && speaker.bio.length > 0;
  const hasExpertise = speaker.expertise && speaker.expertise.length > 0;
  const hasAchievements = speaker.achievements && speaker.achievements.length > 0;
  const social = speaker.socialLinks;
  const hasSocial = social && (social.linkedin || social.twitter || social.website);

  return createPortal(
    <div
      className={`fixed inset-0 z-[110] flex items-center justify-center bg-ink/75 p-0 backdrop-blur-sm sm:p-6 ${
        closing ? "modal-overlay-out" : "modal-overlay-in"
      }`}
      onClick={requestClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className={`relative flex h-full w-full max-w-3xl flex-col overflow-hidden bg-white shadow-panel sm:h-auto sm:max-h-[85vh] sm:flex-row sm:rounded-card ${
          closing ? "modal-panel-out" : "modal-panel-in"
        }`}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={requestClose}
          aria-label="Close speaker profile"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-colors hover:bg-ink sm:bg-white/90 sm:text-green sm:hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-[38%]">
          {speaker.photo ? (
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover"
              style={{ objectPosition: speaker.photoPosition ?? "50% 15%" }}
              priority
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-b from-green-700 to-green-900 text-white/25">
              <UserRound className="h-20 w-20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-white/0" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-9">
          {speaker.focus && <span className="eyebrow">{speaker.focus}</span>}
          <h3
            id={titleId}
            className="mt-2 font-display text-2xl font-extrabold leading-tight text-green sm:text-3xl"
          >
            {speaker.name}
          </h3>
          {(speaker.role || speaker.org) && (
            <p className="mt-1.5 text-sm font-semibold text-orange sm:text-[15px]">
              {speaker.role}
              {speaker.role && speaker.org ? " · " : ""}
              {speaker.org}
            </p>
          )}

          {hasBio && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                About {firstName}
              </p>
              <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted">
                {speaker.bio!.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {hasExpertise && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Areas of Expertise
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {speaker.expertise!.map((item) => (
                  <li
                    key={item}
                    className="rounded-pill border border-green/15 bg-cream px-3 py-1.5 text-xs font-semibold text-green"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasAchievements && (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Achievements
              </p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                {speaker.achievements!.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasSocial && (
            <div className="mt-7 flex flex-wrap gap-3 border-t border-green/10 pt-5">
              {social!.website && (
                <a
                  href={social!.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-sm font-semibold text-green"
                >
                  Website
                </a>
              )}
              {social!.linkedin && (
                <a
                  href={social!.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-sm font-semibold text-green"
                >
                  LinkedIn
                </a>
              )}
              {social!.twitter && (
                <a
                  href={social!.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-sm font-semibold text-green"
                >
                  X (Twitter)
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
