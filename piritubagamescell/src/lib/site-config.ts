// ============================================================
// PIRITUBA GAMES CELL — Configuração central do site
// Edite os valores abaixo para atualizar contatos, produtos,
// avaliações e imagens sem precisar mexer nos componentes.
// ============================================================

export const store = {
  name: "Pirituba Games Cell",
  shortName: "PGC",
  tagline: "Tecnologia, games e confiança no coração da Pirituba.",
  // Número real da loja: (11) 95415-8409
  whatsappNumber: "5511954158409",
  whatsappLabel: "(11) 95415-8409",
  // TODO: confirme os horários reais da loja
  hours: "Seg a Sex · 9h às 18h   |   Sáb · 9h às 17h",
  address: "Av. Benedito Andrade, 70 — Vila Pereira Barreto, Pirituba",
  city: "São Paulo/SP",
  instagramHandle: "@piritubagames",
  instagramUrl: "https://www.instagram.com/piritubagames",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pirituba+Games+Cell+Av.+Benedito+Andrade+70+S%C3%A3o+Paulo",
} as const;

export const whatsappLink = `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Pirituba Games Cell e quero um orçamento."
)}`;

// ---- Imagens (hospedadas em OSS, estáveis para embutir) ----
export const images = {
  loja: "/loja-interior.png",
  ps5:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/181de699cf3c.png",
  iphone:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/614901271c02.png",
  controles:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8fe128b23758.jpg",
  headset:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8040e0bc43bb.jpeg",
  pcSetup:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c2f3a01e5916.jpg",
  ps5Alt:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c45216aee95b.jpg",
  repair: "/bancada-reparos.png",
  repairWide:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/27bb93f23aba.jpg",
  gamingWide:
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f9daeed32dd5.jpg",
} as const;

// ---- Carrossel de produtos (seção 03) ----
export type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Consoles",
    category: "Games",
    description: "PlayStation, Xbox e Nintendo com acessórios originais.",
    image: images.ps5,
  },
  {
    name: "Smartphones",
    category: "Celulares",
    description: "Venda e troca de aparelhos com garantia da loja.",
    image: images.iphone,
  },
  {
    name: "Controles",
    category: "Acessórios",
    description: "Controles e periféricos para todas as gerações.",
    image: images.controles,
  },
  {
    name: "Headsets",
    category: "Áudio Gamer",
    description: "Som imersivo para jogar, trabalhar e ouvir música.",
    image: images.headset,
  },
  {
    name: "Setup PC",
    category: "Informática",
    description: "Peças, periféricos e montagem de setups completos.",
    image: images.pcSetup,
  },
];

// ---- Avaliações de clientes (seção 04) ----
// Avaliações reais de clientes no Google (5 estrelas).
export type Review = {
  name: string;
  initials: string;
  meta: string;
  time: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Tatiane Santos Osti",
    initials: "TS",
    meta: "4 avaliações",
    time: "há 7 meses",
    text: "Indicada por uma amiga, levei meu Nintendo Switch para o conserto e o resultado me surpreendeu. O reparo ficou perfeito e o aparelho funciona como novo. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Edson Guilherme da Silva",
    initials: "EG",
    meta: "Local Guide · 57 avaliações",
    time: "há 7 meses",
    text: "Experiência muito boa, atendimento cheio de atenção. Fui resolver um problema no meu videogame e, pela qualidade do serviço, acabei levando mais coisas. Nota 10!",
    rating: 5,
  },
  {
    name: "Antonino",
    initials: "AN",
    meta: "3 avaliações · 1 foto",
    time: "há 7 meses",
    text: "Assistência técnica profissional, cliente em primeiro lugar, preços justos e atendimento nota mil. Sou cliente há mais de 20 anos e nunca me decepcionaram.",
    rating: 5,
  },
  {
    name: "Willians Firmiano",
    initials: "WF",
    meta: "5 avaliações",
    time: "há 7 meses",
    text: "Frequento a loja há 25 anos. Equipe honesta e justa, trabalhadora, que sempre indica a solução mais econômica. Recomendo sem reservas!",
    rating: 5,
  },
  {
    name: "Sandra Montano",
    initials: "SM",
    meta: "6 avaliações",
    time: "há 7 meses",
    text: "O atendimento é diferente de tudo. A Dani nos recebe super bem — conheço a loja desde que meu filho tinha 8 anos; hoje ele tem 18. Recomendo demais!",
    rating: 5,
  },
];

// ---- Marquee de serviços (faixa deslizante) ----
export const services = [
  "Troca de telas",
  "Baterias novas",
  "Conectores de carga",
  "Assistência de consoles",
  "Controles e periféricos",
  "Tablets e PCs",
  "Desoxidação",
  "Acessórios originais",
];
