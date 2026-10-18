"use client";

import { Quote, Star } from "lucide-react";
import { reviews } from "@/lib/site-config";
import { Reveal } from "./reveal";

function Stars({ n }: { n: number }) {
  return (
    <span
      className="flex gap-0.5 text-amber-400"
      aria-label={`${n} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < n ? "fill-current" : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Quem passa pela bancada,
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                volta — e indica.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Pedaços de feedback de quem confiou o aparelho à nossa bancada.
              Avaliações do público da loja e do Google.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.08 * i} className="h-full">
              <figure className="group relative flex h-full flex-col rounded-3xl border border-sky-100 bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-200/60">
                <Quote className="absolute right-5 top-5 h-6 w-6 text-sky-100 transition-colors duration-500 group-hover:text-sky-200" />
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 text-sm font-bold text-white shadow-md shadow-sky-300/50 transition-transform duration-500 group-hover:scale-110"
                  >
                    {r.initials}
                  </span>
                  <div>
                    <figcaption className="text-sm font-semibold text-slate-800">
                      {r.name}
                    </figcaption>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-sky-500/90">
                      {r.meta}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  “{r.text}”
                </blockquote>
                <div className="mt-5 flex items-center justify-between border-t border-sky-100/80 pt-4">
                  <Stars n={r.rating} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Google · {r.time}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
