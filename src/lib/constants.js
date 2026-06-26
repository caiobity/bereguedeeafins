export const EVENT = {
  name: "Bereguedê e Afins",
  date: "2026-09-12T18:00:00-03:00",
  dateDisplay: "12 de Setembro de 2026",
  dayOfWeek: "Sábado",
  time: "16h às 22h",
  gateOpen: "15h",
  startTime: "16h",
  location: "Clube Fantoches",
  locationDetail: "Rua Democrata, 10 - Dois de Julho, Salvador - BA",
  dressCode: "Venha como quiser! A vibe é liberdade.",
  description:
    "Uma celebração da brasilidade através da música, da cultura e da festa. Viva mais do que um show!",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Clube+Fantoches+Rua+Democrata+10+Dois+de+Julho+Salvador+BA&output=embed",
  contact: {
    email: "bereguedessa@gmail.com",
    whatsapp: "5571996215265",
    whatsappDisplay: "(71) 99621-5265",
  },
  instagram: "bereguedeeafins",
  producao: "Produção independente por @marcia_bity",
  ticketUrl: "https://shotgun.live/events/bereguede-afins-apresenta-otto-raults",
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

export const TICKETS = [];

export const ATTRACTIONS = [
  {
    name: "Otto",
    role: "Show ao vivo",
    description: "",
    headliner: true,
    instagrams: ["ottomatopeia"],
    image: "/eventos/Foto Atração Otto.png",
  },
  {
    name: "RAULTS",
    role: "Show ao vivo",
    description: "",
    headliner: false,
    instagrams: ["prince.addamo", "irmaocarlospsicofunk", "sindei.rasta"],
    image: "/eventos/Foto Atração Raults.png",
  },
];

export const PAST_EVENTS = [
  {
    slug: "curumin-cabuloso-gil-2026-05",
    attractions: ["Curumin", "Cabuloso Gil", "DJ Roger N Roll"],
    date: "16/05/2026",
    year: "2026",
    location: "Casa de Castro Alves",
    summary: "",
    banner: "/eventos/Banner Curumin, Cabuloso Gil e DJ Roger n Roll 1.png",
    images: [
      "/eventos/Curumin, Cabuloso Gil e DJ Roger n Roll 2.jpeg",
      "/eventos/Curumin, Cabuloso Gil e DJ Roger n Roll 3.jpeg",
    ],
    videos: [
      "/eventos/Curumin, Cabuloso Gil e DJ Roger n Roll 4.mp4",
      "/eventos/Curumin, Cabuloso Gil e DJ Roger n Roll 5.mp4",
      "/eventos/Curumin, Cabuloso Gil e DJ Roger n Roll 6.mp4",
    ],
  },
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
    banner: "/eventos/Banner Cabuloso Gil e JP Castelhano 12.12.2025.jpeg",
    images: [
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 1.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 2.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 3.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 4.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 5.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 6.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 7.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 8.JPG",
      "/eventos/Cabuloso Gil e JP Castelhano 12.12.2025 9.JPG",
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
