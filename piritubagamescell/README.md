# Pirituba Games Cell — Site Oficial 🎮📱

Site de apresentação da **Pirituba Games Cell** — assistência técnica e venda de
acessórios para games, celulares, tablets e PC na Pirituba, São Paulo/SP.

**Av. Benedito Andrade, 70 — Vila Pereira Barreto, Pirituba — São Paulo/SP**
Instagram: [@piritubagames](https://www.instagram.com/piritubagames)

---

## ✨ Seções (seguindo o esqueleto aprovado)

1. **Topo (Hero)** — nome da loja + introdução à esquerda; vitrine de produtos
   em destaque com cartões flutuantes + bloco de contato à direita.
2. **Sobre** — introdução da loja com texto, pilares e números reais
   (seguidores/publicações do Instagram).
3. **Produtos em leque** — carrossel em leque com card central em destaque,
   laterais inclinados, setas de navegação e 5 pontos indicadores
   (setas ← → do teclado também funcionam; autoplay pausa no hover).
4. **Avaliações** — 4 cartões de clientes com avatar, estrelas e comentário.
5. **CTA final + Rodapé** — copy de impacto, botões de WhatsApp e rota no
   Google Maps; logo da **TAUFF.** (anexo 3) no rodapé.

A logo da **TAUFF** (anexo 1) fica **fixa no canto inferior direito em todas
as partes do site** durante toda a navegação.

## 🎨 Design

- Paleta azul claro serena (calma + luxo + tecnologia): céu `#38BDF8`/`#0EA5E9`
  sobre branco gelo `#F6FBFF`, com azul-marinho profundo no rodapé.
- Interações no estilo [rafaelrossetti.com.br](https://rafaelrossetti.com.br/):
  revelações suaves no scroll (blur + fade), parallax de mouse no hero,
  contadores animados, marquee de serviços, hover states com glow e uma linha
  de código no rodapé (`diag() → repara() → joga() → repeat()`).

## 🚀 Como rodar

```bash
bun install
bun run dev   # http://localhost:3000
```

## 🔧 Personalização rápida

Todos os dados editáveis estão centralizados em
**`src/lib/site-config.ts`**:

| O quê                    | Onde                              |
| ------------------------ | --------------------------------- |
| WhatsApp / telefone      | `store.whatsappNumber` (+`Label`) |
| Horários                 | `store.hours`                     |
| Endereço / Maps          | `store.address` / `store.mapsUrl` |
| Instagram                | `store.instagramUrl`              |
| Produtos do leque        | `products[]`                      |
| Avaliações dos clientes  | `reviews[]`                       |
| Serviços do marquee      | `services[]`                      |

> ⚠️ **Importante**: os horários ainda são estimativa — confirme os dados
> reais da loja. As avaliações são representativas (edite `reviews[]` com as
> avaliações reais do Google quando quiser, mantendo o formato).

**Contato real**: WhatsApp (11) 95415-8409.

## 🖼 Fotos reais da loja

- `public/loja-interior.png` — interior da loja (aparece no destaque do título
  principal, no topo).
- `public/bancada-reparos.png` — bancada de reparos real (seção Sobre).

## 🛠 Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion ·
Lucide Icons. Site 100% responsivo (mobile-first) com `prefers-reduced-motion`
respeitado.

---
Desenvolvido por **TAUFF.** — Create sights, building web sites.
