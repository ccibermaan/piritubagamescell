import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { ProductsCarousel } from "@/components/site/products-carousel";
import { Reviews } from "@/components/site/reviews";
import { FooterCta } from "@/components/site/footer-cta";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F6FBFF] text-slate-900">
      <Navbar />
      <main>
        {/* 01 · Topo — nome, introdução, vitrine e contato */}
        <Hero />
        <Marquee />
        {/* 02 · Introdução da loja com texto */}
        <About />
        {/* 03 · Produtos em leque (carrossel) */}
        <ProductsCarousel />
        {/* 04 · Avaliações de clientes */}
        <Reviews />
        {/* 05 · Copy final + CTA + logo TAUFF. */}
        <FooterCta />
      </main>
    </div>
  );
}
