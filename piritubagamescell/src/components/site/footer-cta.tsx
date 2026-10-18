"use client";

import { ArrowUpRight, Clock, MapPin, MessageCircle, Instagram } from "lucide-react";
import { store, whatsappLink } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { SafeImg } from "./safe-img";

export function FooterCta() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* ---------- CTA final ---------- */}
      <section className="relative py-24 sm:py-28">
        <div
          aria-hidden
          className="absolute inset-x-5 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(14,165,233,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Pronto para dar um{" "}
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                upgrade
              </span>{" "}
              no seu aparelho?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-slate-600">
              Manda uma mensagem com o problema ou o acessório que você procura.
              Respondemos rápido, com orçamento claro e sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-sky-500/45 active:scale-95"
              >
                <MessageCircle className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-rotate-12" />
                Chamar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-8 py-4 text-sm font-semibold text-sky-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-sky-100"
              >
                <MapPin className="h-4 w-4" />
                Como chegar até a loja
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Rodapé ---------- */}
      <section className="relative bg-slate-950 text-slate-300">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_0%,rgba(14,165,233,0.16),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
          {/* esquerda: copy + contatos */}
          <div>
            <p className="flex items-baseline gap-1 text-lg font-semibold tracking-tight text-white">
              PIRITUBA<span className="text-sky-400">&nbsp;GAMES</span>
              <span className="text-slate-400">CELL</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
            </p>
            <p className="mt-5 max-w-md text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
              Sua tecnologia nas mãos certas.
              <br />
              <span className="text-slate-400">
                Do conserto ao setup dos sonhos.
              </span>
            </p>

            <ul className="mt-9 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-sky-300"
                  >
                    {store.address} — {store.city}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  WhatsApp:{" "}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition-colors hover:text-sky-300"
                  >
                    {store.whatsappLabel}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  <a
                    href={store.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-sky-300"
                  >
                    {store.instagramHandle}
                  </a>{" "}
                  — novidades, bastidores e lançamentos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span className="text-slate-400">{store.hours}</span>
              </li>
            </ul>

            <p
              aria-hidden
              className="mt-10 font-mono text-xs text-slate-500 sm:text-sm"
            >
              <span className="text-sky-400">const</span> vida = diag(){" "}
              <span className="text-sky-400">→</span> repara(){" "}
              <span className="text-sky-400">→</span> joga(){" "}
              <span className="text-sky-400">→</span>{" "}
              <span className="text-slate-400">repeat()</span>
              <span className="ml-1 inline-block h-3.5 w-2 animate-pulse self-center bg-sky-400/80 align-middle" />
            </p>
          </div>

          {/* direita: escrita TAUFF. (anexo 3) — sem fundo */}
          <div className="flex flex-col items-start justify-between gap-8 lg:items-end">
            <SafeImg
              src="/tauff-wordmark.png"
              alt="TAUFF. — Create sights, building web sites."
              className="w-44 object-contain transition-transform duration-500 hover:scale-105"
            />
            <p className="text-right text-xs leading-relaxed text-slate-500 lg:text-right">
              Site desenvolvido por{" "}
              <span className="font-semibold text-slate-300">TAUFF.</span>
              <br />
              Create sights, building web sites.
            </p>
          </div>
        </div>

        <div className="relative border-t border-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-[11px] text-slate-500 sm:flex-row sm:px-8">
            <p>
              © {new Date().getFullYear()} {store.name} · {store.city}
            </p>
            <p>
              Feito com cuidado, luxo e tecnologia ·{" "}
              <a
                href="#inicio"
                className="transition-colors hover:text-sky-300"
              >
                voltar ao topo ↑
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
