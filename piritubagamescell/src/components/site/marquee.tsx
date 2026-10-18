"use client";

import { services } from "@/lib/site-config";

export function Marquee() {
  const doubled = [...services, ...services];
  return (
    <div
      aria-hidden
      className="group relative overflow-hidden border-y border-sky-100/80 bg-white/60 py-4 backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-medium tracking-wide text-slate-500"
          >
            {s}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
