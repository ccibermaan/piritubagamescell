"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Gamepad2, Instagram, ShieldCheck, Smartphone } from "lucide-react";
import { images, store } from "@/lib/site-config";
import { SafeImg } from "./safe-img";
import { Reveal } from "./reveal";

function Counter({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        <span className="tabular-nums">
          {val.toLocaleString("pt-BR")}
          {suffix}
        </span>
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

const pillars = [
  {
    icon: Smartphone,
    title: "Celulares & tablets",
    text: "Troca de tela, bateria e conectores com peças de confiança.",
  },
  {
    icon: Gamepad2,
    title: "Games & consoles",
    text: "Assistência especializada em consoles, controles e periféricos.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia & transparência",
    text: "Orçamento claro antes do serviço e garantia no reparo.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Cuidamos do seu aparelho
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  como se fosse nosso.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl leading-relaxed text-slate-600">
                Na esquina da Vila Pereira Barreto, a {store.name} nasceu para
                resolver o que trava, quebra ou simplesmente não liga. Somos uma
                assistência técnica e loja de acessórios para{" "}
                <strong className="font-semibold text-slate-800">
                  games, celulares, tablets e PC
                </strong>
                , atendendo a Pirituba com o mesmo cuidado de quem também é
                jogador e entende a pressa de ficar online de novo.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
                Cada reparo começa com um diagnóstico honesto e um orçamento sem
                surpresas. Cada venda vem com orientação de verdade: a gente
                ajuda você a escolher o acessório certo para o seu setup e para
                o seu bolso. É assim que construímos uma comunidade fiel de
                clientes que voltam — e trazem amigos.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.1}>
                  <div className="group h-full rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100">
                    <p.icon className="h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:scale-110" />
                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.15}>
              <div className="group relative mx-auto max-w-lg">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-200/60 via-transparent to-cyan-100/60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-sky-900/10">
                  <SafeImg
                    src={images.repair}
                    alt="Técnico reparando um smartphone na bancada"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-5 pt-14">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-300">
                      bancada de reparos
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Diagnóstico especializado · multimarcas
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-6 rounded-2xl border border-sky-100 bg-white/60 p-6 backdrop-blur sm:grid-cols-2">
                <Counter to={5400} suffix="+" label="Seguidores no Instagram" />
                <Counter to={912} suffix="+" label="Publicações na comunidade" />
                <div className="col-span-2 border-t border-sky-100 pt-4 text-center sm:text-left">
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Instagram className="h-4 w-4 text-sky-500" />
                    {store.instagramHandle} — o dia a dia da loja por dentro
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
