export const EVENT = {
  name: "Bereguedê e Afins",
  date: "2026-05-16T18:00:00-03:00",
  dateDisplay: "16 de Maio de 2026",
  dayOfWeek: "Sábado",
  time: "18h às 01h",
  gateOpen: "17h",
  startTime: "18h",
  location: "Casa de Castro Alves",
  locationDetail: "Rua do Passo, 52 - Centro Histórico, Salvador - BA, 40301-408",
  dressCode: "Venha como quiser! A vibe é liberdade.",
  description:
    "Uma celebração da brasilidade através da música, da cultura e da festa. Viva mais do que um show!",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d-38.5108!3d-12.9736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b030e1edb4d%3A0x4f4f4f4f4f4f4f4f!2sCasa%20de%20Castro%20Alves!5e0!3m2!1spt-BR!2sbr",
  contact: {
    email: "bereguedessa@gmail.com",
    whatsapp: "5571996215265",
    whatsappDisplay: "(71) 99621-5265",
  },
  instagram: "bereguedeeafins",
  producao: "Produção independente por @marcia_bity",
};

export const TICKET_CATEGORIES = [
  {
    id: "meia",
    label: "Meia",
    description: "Ingresso meia-entrada",
  },
  {
    id: "meia-solidaria",
    label: "Meia Solidária",
    description: "Meia-entrada + 1kg de alimento",
  },
  {
    id: "inteira",
    label: "Inteira",
    description: "Ingresso inteira",
  },
];

export const TICKETS = [
  {
    id: "2lote-meia",
    name: "2\u00BA Lote Meia",
    price: 90,
    lote: "2\u00BA Lote",
    category: "meia",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "2lote-meia-solidaria",
    name: "2\u00BA Lote Meia Solidária",
    price: 95,
    lote: "2\u00BA Lote",
    category: "meia-solidaria",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
      "Levar 1kg de alimento",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "3lote-meia",
    name: "3\u00BA Lote Meia",
    price: 105,
    lote: "3\u00BA Lote",
    category: "meia",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "3lote-meia-solidaria",
    name: "3\u00BA Lote Meia Solidária",
    price: 110,
    lote: "3\u00BA Lote",
    category: "meia-solidaria",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
      "Levar 1kg de alimento",
    ],
    featured: true,
    tag: "Solidário",
  },
  {
    id: "final-meia",
    name: "Lote Final Meia",
    price: 120,
    lote: "Lote Final",
    category: "meia",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "final-meia-solidaria",
    name: "Lote Final Meia Solidária",
    price: 125,
    lote: "Lote Final",
    category: "meia-solidaria",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
      "Levar 1kg de alimento",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "1lote-inteira",
    name: "1\u00BA Lote Inteira",
    price: 150,
    lote: "1\u00BA Lote",
    category: "inteira",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: true,
    tag: "Disponível",
  },
  {
    id: "2lote-inteira",
    name: "2\u00BA Lote Inteira",
    price: 180,
    lote: "2\u00BA Lote",
    category: "inteira",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: false,
    tag: null,
  },
  {
    id: "3lote-inteira",
    name: "3\u00BA Lote Inteira",
    price: 210,
    lote: "3\u00BA Lote",
    category: "inteira",
    benefits: [
      "Acesso à área do evento",
      "Shows de todas as atrações",
    ],
    featured: false,
    tag: null,
  },
];

export const ATTRACTIONS = [
  {
    name: "Curumin",
    role: "Show ao vivo",
    description: "Luciano Nakata Albuquerque, o Curumin, é multi-instrumentista paulistano que mistura samba, funk, jazz, hip hop e eletrônico numa sonoridade única da MPB contemporânea.",
    headliner: true,
    instagram: "curumineosaipins",
    image: "/curumin.jpeg",
  },
  {
    name: "Cabuloso Gil",
    role: "Cabuloso Trio",
    description: "O Cabuloso Trio apresenta o projeto Cabuloso Gil — um tributo vibrante ao legado de Gilberto Gil, revisitando e homenageando o vasto repertório de um dos maiores mestres da música brasileira.",
    headliner: true,
    instagram: "cabulosotrio",
    image: "/cabuloso trio.jpeg",
  },
  {
    name: "DJ Roger N Roll",
    role: "DJ Set",
    description: "DJ residente da cena alternativa de Salvador, Roger N Roll transita entre o brasileiro e o universal, de Pixinguinha a Nirvana, criando sets ecléticos e dançantes.",
    headliner: false,
    instagram: "rogernroll",
    image: "/roger n roll.jpeg",
  },
];

export const PAST_EVENTS = [
  {
    slug: "banda-eddie-cabuloso-trio-2023-09",
    attractions: ["Banda Eddie", "Cabuloso Trio", "DJ Secretinho", "DJ Niti Seletor"],
    date: "23/09/2023",
    year: "2023",
    location: "",
    summary: "",
    banner: "/eventos/Banner Banda Eddie e Cabuloso Trio 23.09.2025.png",
    images: [
      "/eventos/Banda Eddie e Cabuloso Trio 23.09.2023.jpeg",
      "/eventos/Banda Eddie e Cabuloso Trio 23.09.2023 2.jpeg",
      "/eventos/Banda Eddie e Cabuloso Trio 23.09.2023 3.jpeg",
      "/eventos/Banda Eddie e Cabuloso Trio 23.09.2023 4.jpeg",
    ],
    videos: [],
  },
  {
    slug: "mundo-livre-cabuloso-trio-2023-11",
    attractions: ["Mundo Livre S/A", "Cabuloso Trio", "DJ Katy Apino", "Mu.Sica DJ"],
    date: "25/11/2023",
    year: "2023",
    location: "",
    summary: "",
    banner: "/eventos/Banner Mundo Livre SA e Cabuloso Trio 25.11.2023.jpeg",
    images: [
      "/eventos/Mundo Livre SA e Cabuloso Trio 25.11.2023 1.jpeg",
      "/eventos/Mundo Livre SA e Cabuloso Trio 25.11.2023 2.jpeg",
    ],
    videos: [],
  },
  {
    slug: "di-melo-miss-sueter-2025-05",
    attractions: ["Di Melo", "Miss Sueter", "DJ Secretinho"],
    date: "24/05/2025",
    year: "2025",
    location: "",
    summary: "",
    banner: "/eventos/Banner Di Melo e Miss Sueter 24.05.2025 .png",
    images: [
      "/eventos/Di Melo e Miss Sueter 24.05.2025.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 1.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 3.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 4.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 5.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 6.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 7.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 8.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 9.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 10.jpeg",
      "/eventos/Di Melo e Miss Sueter 24.05.2025 11.jpeg",
    ],
    videos: [
      "/eventos/Di Melo e Miss Sueter 24.05.2025 video 1.mp4",
    ],
  },
  {
    slug: "banda-eddie-banda-caja-2025-09",
    attractions: ["Banda Eddie", "Banda Cajá", "DJ Pureza"],
    date: "06/09/2025",
    year: "2025",
    location: "",
    summary: "",
    banner: "/eventos/Banner Banda Eddie e Banda Cajá 06.09.2025.jpg",
    images: [
      "/eventos/Banda Eddie e Banda Cajá 06.09.2025 1.jpeg",
      "/eventos/Banda Eddie e Banda Cajá 06.09.2025 2.jpeg",
      "/eventos/Banda Eddie e Banda Cajá 06.09.2025 3.jpeg",
    ],
    videos: [],
  },
  {
    slug: "cabuloso-gil-jp-castelhano-2025-12",
    attractions: ["Cabuloso Gil", "JP Castelhano", "DJ Rafa Xavier"],
    date: "12/12/2025",
    year: "2025",
    location: "",
    summary: "",
    images: [
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 1.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 2.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 3.JPG",
    ],
    videos: [],
  },
];

export const FAQ_ITEMS = [
  {
    question: "O ingresso é individual?",
    answer:
      "Sim, cada ingresso dá direito a 1 (uma) entrada. O ingresso é pessoal e intransferível, vinculado ao CPF do comprador.",
  },
  {
    question: "O que é a meia solidária?",
    answer:
      "A meia solidária é um ingresso com valor próximo à meia-entrada, mas que inclui a doação de 1kg de alimento não perecível no dia do evento.",
  },
  {
    question: "Posso parcelar o ingresso?",
    answer:
      "Sim! Via cartão de crédito, é possível parcelar em até 3x sem juros pelo Mercado Pago.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer:
      "Cancelamentos podem ser feitos em até 7 dias após a compra, respeitando o Código de Defesa do Consumidor. Após esse prazo, não haverá reembolso.",
  },
  {
    question: "Menores de idade podem entrar?",
    answer:
      "O evento é para maiores de 18 anos. É obrigatória a apresentação de documento com foto na entrada.",
  },
  {
    question: "O pagamento via PIX é seguro?",
    answer:
      "Sim! Todos os pagamentos são processados pelo Mercado Pago, uma das maiores plataformas de pagamento do Brasil, com criptografia de ponta a ponta.",
  },
];
