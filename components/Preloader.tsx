"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight branded preloader in the ImpactField style: ink background,
 * wordmark lockup, LRC 10.0 blue spinner. Shows once per browser session,
 * clears on window load (max ~900ms), and is skipped entirely for
 * reduced-motion users.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("lrc-preloaded") === "1";
    } catch {
      /* storage unavailable */
    }

    if (reduce || seen) {
      setMounted(false);
      return;
    }

    try {
      sessionStorage.setItem("lrc-preloaded", "1");
    } catch {
      /* ignore */
    }

    const finish = () => setHidden(true);
    const onLoad = () => window.setTimeout(finish, 200);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
    const safety = window.setTimeout(finish, 900);
    const unmount = window.setTimeout(() => setMounted(false), 1500);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(safety);
      window.clearTimeout(unmount);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="preloader" data-hidden={hidden} aria-hidden="true" role="presentation">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center leading-none">
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">
            Impact<span className="text-ifOrange">Field</span>
          </span>
          <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.32em] text-white/45">
            Leadership Rebirth Conference
          </span>
        </div>
        <div className="preloader__ring" />
      </div>
    </div>
  );
}
