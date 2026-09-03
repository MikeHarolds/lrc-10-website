"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/conference";
import Reveal from "./ui/Reveal";

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const n = useCountUp(value, run);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold text-green sm:text-5xl">
        {n.toLocaleString()}
        <span className="text-orange">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-muted sm:text-sm">
        {label}
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="impact" className="section-tight bg-cream">
      <div className="container" ref={ref}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{stats.eyebrow}</span>
          <h2 className="mt-3 text-display-sm text-green">{stats.title}</h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.items.map((s) => (
            <Stat key={s.label} {...s} run={run} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted sm:text-base">
          {stats.closing}
        </p>
      </div>
    </section>
  );
}
