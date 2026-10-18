"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Gamepad2 } from "lucide-react";
import { products } from "@/lib/site-config";
import { SafeImg } from "./safe-img";
import { Reveal } from "./reveal";

const AUTOPLAY_MS = 4600;

export function ProductsCarousel() {
  const count = products.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [justInteracted, setJustInteracted] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + count) % count);
      setJustInteracted(true);
    },
    [count]
  );

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setJustInteracted(true);
  }, []);

  // autoplay (pausa no hover ou após interação recente)
  useEffect(() => {
    if (paused || justInteracted) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, justInteracted, count]);

  useEffect(() => {
    if (!justInteracted) return;
    const t = setTimeout(() => setJustInteracted(false), 8000);
    return () => clearTimeout(t);
  }, [justInteracted, index]);

  // teclado ← →
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  // offset em leque: -2, -1, 0, 1, 2
  const offsetOf = (i: number) => {
    let off = (i - index + count) % count;
    if (off > count / 2) off -= count;
    return off;
  };

  return (
    <section id="produtos" className="relative overflow-hidden py-24 sm:py-32">
      {/* fundo em degradê sereno */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/80 to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Um universo de tecnologia,
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                girando ao seu alcance.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Gire o leque com as setas, os pontos ou as teclas ← →. Toque em
              qualquer card para trazê-lo ao centro.
            </p>
          </Reveal>
        </div>

        {/* palco do leque */}
        <Reveal delay={0.1}>
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Produtos em destaque"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative mt-6 h-[430px] select-none outline-none sm:h-[480px]"
          >
            <div className="absolute inset-0 origin-center scale-[0.58] sm:scale-75 lg:scale-90 xl:scale-100">
              {products.map((p, i) => {
                const off = offsetOf(i);
                const abs = Math.abs(off);
                const isCenter = off === 0;
                return (
                  <motion.button
                    key={p.name}
                    onClick={() => goTo(i)}
                    aria-label={`${p.name} — ${p.category}${
                      isCenter ? " (em destaque)" : ""
                    }`}
                    animate={{
                      x: `${off * 46}%`,
                      y: `${abs * 14}px`,
                      rotate: off * 7,
                      scale: isCenter ? 1 : 1 - abs * 0.13,
                      zIndex: 10 - abs,
                      opacity: abs > 2 ? 0 : 1 - abs * 0.28,
                      filter: isCenter
                        ? "blur(0px)"
                        : `blur(${abs * 1.1}px) saturate(${1 - abs * 0.25})`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 22,
                      mass: 0.9,
                    }}
                    whileHover={isCenter ? { scale: 1.03 } : { scale: 1 - abs * 0.13 + 0.04, rotate: off * 7 * 0.5 }}
                    whileTap={{ scale: isCenter ? 0.99 : 0.95 }}
                    className="group absolute left-1/2 top-1/2 h-[340px] w-[260px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-[1.75rem] border bg-white/85 text-left shadow-xl shadow-sky-900/10 backdrop-blur focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-4 sm:h-[380px] sm:w-[300px]"
                    style={{
                      borderColor: isCenter
                        ? "rgb(125 211 252 / 0.9)"
                        : "rgb(224 242 254 / 0.8)",
                      boxShadow: isCenter
                        ? "0 30px 60px -20px rgba(14,165,233,0.35), 0 0 0 1px rgba(125,211,252,0.4)"
                        : undefined,
                      pointerEvents: abs > 2 ? "none" : "auto",
                    }}
                  >
                    <div className="relative m-3 h-[62%] overflow-hidden rounded-[1.25rem]">
                      <SafeImg
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-sky-600 shadow-sm backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="px-5">
                      <p className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
                        <Gamepad2
                          className={`h-4 w-4 transition-colors ${
                            isCenter ? "text-sky-500" : "text-slate-300"
                          }`}
                        />
                        {p.name}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        {p.description}
                      </p>
                      <p
                        className={`mt-3 font-mono text-[10px] uppercase tracking-[0.25em] transition-opacity ${
                          isCenter
                            ? "text-sky-500 opacity-100"
                            : "text-slate-400 opacity-60"
                        }`}
                      >
                        {isCenter ? "→ em destaque" : "em segundo plano"}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* setas */}
            <button
              onClick={() => go(-1)}
              aria-label="Produto anterior"
              className="absolute left-1 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white/80 text-sky-600 shadow-lg shadow-sky-100 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-sky-300 hover:bg-white hover:shadow-xl active:scale-95 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo produto"
              className="absolute right-1 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white/80 text-sky-600 shadow-lg shadow-sky-100 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-sky-300 hover:bg-white hover:shadow-xl active:scale-95 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        {/* pontos indicadores */}
        <Reveal delay={0.2}>
          <div className="mt-4 flex items-center justify-center gap-2.5 sm:mt-8">
            {products.map((p, i) => (
              <button
                key={p.name}
                onClick={() => goTo(i)}
                aria-label={`Ir para ${p.name}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-gradient-to-r from-sky-500 to-cyan-400 shadow-md shadow-sky-300/60"
                    : "w-2.5 bg-sky-200 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
