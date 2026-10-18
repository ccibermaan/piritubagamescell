import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pirituba Games Cell — Assistência técnica & games em São Paulo/SP",
  description:
    "Assistência técnica e venda de acessórios para games, celulares, tablets e PC na Pirituba, São Paulo/SP. Conserto com garantia, orçamento claro e atendimento de confiança.",
  keywords: [
    "Pirituba Games Cell",
    "assistência técnica celular Pirituba",
    "conserto console São Paulo",
    "acessórios games SP",
    "troca de tela iPhone Pirituba",
  ],
  icons: {
    icon: "/favicon-pg.png",
  },
  openGraph: {
    title: "Pirituba Games Cell — Tecnologia e games em harmonia e confiança",
    description:
      "Conserto de celulares, tablets, consoles e PCs, além de acessórios selecionados. Av. Benedito Andrade, 70 — Pirituba, São Paulo/SP.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
