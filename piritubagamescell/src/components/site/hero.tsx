"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { images, store, whatsappLink } from "@/lib/site-config";
import { SafeImg } from "./safe-img";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // camadas de profundidade para o parallax
  const xA = useTransform(sx, [-1, 1], [14, -14]);
  const yA = useTransform(sy, [-1, 1], [10, -10]);
  const xB = useTransform(sx, [-1, 1], [-20, 20]);
  const yB = useTransform(sy, [-1, 1], [-14, 14]);
  const xC = useTransform(sx, [-1, 1], [8, -8]);
  const yC = useTransform(sy, [-1, 1], [6, -6]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambiente: blobs suaves e grade serena */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* -------- Coluna esquerda: nome + introdução -------- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium text-sky-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            Assistência técnica &amp; games · Pirituba, São Paulo/SP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.2rem]"
          >
            Tecnologia e games
            <br />
            em{" "}
            <span className="relative inline-block bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              harmonia
              <svg
                aria-hidden
                viewBox="0 0 120 12"
                className="absolute -bottom-2 left-0 w-full text-sky-300"
                fill="none"
              >
                <path
                  d="M2 9C30 3 60 3 118 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            e confiança.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            A <strong className="font-semibold text-slate-800">{store.name}</strong>{" "}
            é o ponto de encontro da Pirituba para conserto de celulares,
            tablets, consoles e PCs — além de acessórios selecionados para quem
            vive o universo gamer. Atendimento humano, orçamento claro e
            serviço com garantia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-sky-500/40 active:scale-95"
            >
              <MessageCircle className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-rotate-12" />
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-sky-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-sky-100"
            >
              Ver produtos
            </a>
          </motion.div>

          {/* selo de confiança */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              Avaliações reais na loja
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-sky-500" />
              {store.address.split("—")[0]} · {store.city}
            </span>
          </motion.div>
        </div>

        {/* -------- Coluna direita: vitrine + contato -------- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* card principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            style={{ x: xA, y: yA }}
            className="relative z-20 mx-auto w-[78%] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-2xl shadow-sky-900/15 backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-[1.5rem]">
              <SafeImg
                src={images.loja}
                alt="Interior da loja Pirituba Games Cell — prateleiras de games, celulares e acessórios"
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
            <div className="flex items-center justify-between px-3 py-3.5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-sky-500">
                  Interior da loja
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Venha conhecer de perto
                </p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-200">
                Pirituba
              </span>
            </div>
          </motion.div>

          {/* cartão flutuante: celular */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            style={{ x: xB, y: yB }}
            className="absolute -left-2 top-6 z-30 w-32 overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-xl shadow-sky-900/10 backdrop-blur-md sm:w-40 lg:-left-8"
          >
            <SafeImg
              src={images.iphone}
              alt="Smartphone em destaque"
              className="aspect-square w-full object-cover"
            />
            <p className="px-3 py-2 text-[11px] font-semibold text-slate-700">
              Celulares &amp; tablets
            </p>
          </motion.div>

          {/* cartão flutuante: controles */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            style={{ x: xC, y: yC }}
            className="absolute -bottom-10 -right-1 z-30 w-36 overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-xl shadow-sky-900/10 backdrop-blur-md sm:w-44 lg:-right-6"
          >
            <SafeImg
              src={images.controles}
              alt="Controles de videogame"
              className="aspect-square w-full object-cover"
            />
            <p className="px-3 py-2 text-[11px] font-semibold text-slate-700">
              Controles &amp; periféricos
            </p>
          </motion.div>

          {/* cartão de contato em vidro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease }}
            style={{ x: xC, y: yB }}
            className="absolute -bottom-16 left-2 z-40 w-64 rounded-2xl border border-sky-100 bg-white/85 p-4 shadow-xl shadow-sky-900/10 backdrop-blur-xl sm:left-6"
          >
            <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-sky-500">
              Contato
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-500" />
                <span>
                  {store.address}, {store.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href={store.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-sky-600"
                >
                  <Instagram className="h-3.5 w-3.5 shrink-0 text-sky-500" />
                  {store.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-sky-600"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0 text-sky-500" />
                  {store.whatsappLabel}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* indicador de scroll */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition-colors hover:text-sky-500"
        aria-label="Rolar para a seção sobre"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            continue o scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
