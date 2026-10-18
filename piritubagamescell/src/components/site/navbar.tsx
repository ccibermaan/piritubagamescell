"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { store, whatsappLink } from "@/lib/site-config";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-sky-100/70 bg-white/75 shadow-[0_8px_40px_-18px_rgba(14,165,233,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="group flex items-baseline gap-1 font-semibold tracking-tight text-slate-900"
        >
          <span className="text-sm sm:text-base">
            PIRITUBA<span className="text-sky-500">&nbsp;GAMES</span>
          </span>
          <span className="text-sm sm:text-base text-slate-400">CELL</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 transition-transform duration-300 group-hover:scale-150" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-slate-600 transition-colors duration-300 hover:text-sky-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/40 hover:brightness-105 active:scale-95"
          aria-label={`Falar no WhatsApp com a ${store.name}`}
        >
          <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
          <span className="hidden sm:inline">Orçamento</span>
        </a>
      </nav>
    </motion.header>
  );
}
