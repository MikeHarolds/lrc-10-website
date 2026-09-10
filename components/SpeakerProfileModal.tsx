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

/**
 * Premium, accessible profile dialog for one confirmed speaker. Portaled to
 * <body>, traps focus, closes on Escape / backdrop click, and restores focus
 * to the trigger on close. Reusable for any Speaker — with or without a bio.
 *
 * Visual treatment is a digital take on the official LRC 10.0 speaker flyer:
 * a royal-blue "identity band" (name/role/org) with a diagonal cut sits
 * between the portrait and the scrollable detail area, so every profile
 * reads as a poster-style card even when there's no biography to show.
 */
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

  // Drop a leading honorific (Dr., Prof., Mr., Mrs., Ms., Rev., Engr., Barr., Pst.)
  // so "About {firstName}" reads correctly for any speaker, titled or not.
  const firstName = speaker.name
    .replace(/^(dr|prof|mr|mrs|ms|miss|rev|engr|barr|pst|chief)\.?\s+/i, "")
    .split(" ")[0];
  const hasBio = speaker.bio && speaker.bio.length > 0;
  const hasExpertise = speaker.expertise && speaker.expertise.length > 0;
  const hasAchievements = speaker.achievements && speaker.achievements.length > 0;
  const social = speaker.socialLinks;
  const hasSocial = social && (social.linkedin || social.twitter || social.website);

  const hasRoleLine = speaker.role || speaker.org;

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
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-colors hover:bg-ink sm:bg-white/90 sm:text-green sm:hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Portrait — large and dominant, per the flyer's poster-style photography. */}
        <div className="relative h-72 w-full shrink-0 sm:h-auto sm:min-h-[460px] sm:w-[42%]">
          {speaker.photo ? (
            <Image
              src={speaker.photo}
              alt={speaker.name}
              fill
              sizes="(max-width: 640px) 100vw, 460px"
              className="object-cover"
              style={{ objectPosition: speaker.photoPosition ?? "50% 15%" }}
              priority
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-b from-blue-royal to-green-deep text-white/25">
              <UserRound className="h-20 w-20" />
            </div>
          )}
          {/* Royal-blue colour-grade, heaviest at the seam with the identity band. */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-royal/85 via-blue-royal/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:from-70% sm:to-blue-royal/40" />
        </div>

        {/* Content column: a fixed royal-blue identity band (poster-style, diagonal
            cut) followed by an independently scrolling detail area. */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div
            className="relative z-10 shrink-0 bg-blue-royal bg-gradient-to-br from-blue-bright/25 via-blue-royal to-blue-royal px-6 pb-7 pt-6 sm:-ml-12 sm:pl-16 sm:pr-10 sm:pb-8 sm:pt-8"
            style={{
              clipPath:
                "polygon(0 12%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            {speaker.focus && (
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                {speaker.focus}
              </span>
            )}
            <h3
              id={titleId}
              className="mt-1.5 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl"
            >
              {speaker.name}
            </h3>
            {hasRoleLine && (
              <p className="mt-1.5 text-sm font-semibold text-blue-light sm:text-[15px]">
                {speaker.role}
                {speaker.role && speaker.org ? " · " : ""}
                {speaker.org}
              </p>
            )}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-9">
            {hasBio && (
              <div>
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
              <div className={hasBio ? "mt-6" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                  Areas of Expertise
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {speaker.expertise!.map((item) => (
                    <li
                      key={item}
                      className="rounded-pill border border-blue/15 bg-blue-light px-3 py-1.5 text-xs font-semibold text-blue"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasAchievements && (
              <div className={hasBio || hasExpertise ? "mt-6" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                  Achievements
                </p>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                  {speaker.achievements!.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasSocial && (
              <div
                className={`flex flex-wrap gap-3 ${
                  hasBio || hasExpertise || hasAchievements
                    ? "mt-7 border-t border-green/10 pt-5"
                    : ""
                }`}
              >
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

            {!hasBio && !hasExpertise && !hasAchievements && !hasSocial && (
              <p className="text-sm italic text-muted/70">
                Full profile coming soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
