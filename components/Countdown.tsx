"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  target: string;
  tone?: "onDark" | "onLight";
  heading?: string;
  className?: string;
};

const UNITS: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  return {
    total,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown({
  target,
  tone = "onDark",
  heading = "The Countdown Is On",
  className = "",
}: CountdownProps) {
  const targetMs = new Date(target).getTime();
  const [time, setTime] = useState(() => diff(targetMs));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff(targetMs));
    const id = setInterval(() => setTime(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const onDark = tone === "onDark";
  const shell = onDark
    ? "border-white/15 bg-white/[0.04]"
    : "border-green/12 bg-cream";
  const headingColor = "text-orange";
  const numColor = onDark ? "text-white" : "text-green";
  const labelColor = onDark ? "text-white/55" : "text-muted";
  const divideColor = onDark ? "divide-white/10" : "divide-green/10";

  const done = mounted && time.total <= 0;

  return (
    <div
      className={`rounded-2xl border ${shell} px-5 py-6 sm:px-8 ${className}`}
      role="timer"
      aria-live="off"
    >
      <p
        className={`mb-4 text-center text-xs font-bold uppercase tracking-[0.24em] ${headingColor}`}
      >
        {done ? "The Culture Shift Has Begun" : heading}
      </p>
      <div className={`grid grid-cols-4 divide-x ${divideColor}`}>
        {UNITS.map((u) => (
          <div key={u.key} className="flex flex-col items-center px-1">
            <span
              className={`font-display text-3xl font-extrabold tabular-nums sm:text-4xl lg:text-[2.75rem] ${numColor}`}
              suppressHydrationWarning
            >
              {mounted ? String(time[u.key]).padStart(2, "0") : "--"}
            </span>
            <span
              className={`mt-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${labelColor}`}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
