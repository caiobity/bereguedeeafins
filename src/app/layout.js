import { Space_Grotesk, DM_Sans, Bowlby_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EVENT } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const bowlbyOne = Bowlby_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-brand",
  display: "swap",
});

const SITE_URL = "https://www.bereguedeeafins.com.br";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bereguedê & Afins | Otto + RAULTS · 26/09/2026 em Salvador",
    template: "%s | Bereguedê & Afins",
  },
  description:
    "Bereguedê & Afins apresenta Otto + RAULTS no Clube Fantoches, Salvador. 26 de Setembro de 2026 — Uma celebração da brasilidade através da música. Ingressos disponíveis.",
  keywords: [
    "Bereguedê", "Bereguedê e Afins", "Bereguedê & Afins", "festa Salvador",
    "Otto Salvador", "RAULTS Salvador", "Clube Fantoches", "festa Bahia",
    "MPB Salvador", "Otto ao vivo", "produtora de festa Salvador",
    "evento Setembro 2026", "ingresso festa Salvador",
  ],
  authors: [{ name: "Márcia Bity" }],
  creator: "Bereguedê & Afins",
  publisher: "Bereguedê & Afins",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bereguedê & Afins apresenta Otto + RAULTS",
    description:
      "26 de Setembro de 2026 no Clube Fantoches, Salvador. Uma celebração da brasilidade através da música. Viva mais do que um show!",
    url: SITE_URL,
    siteName: "Bereguedê & Afins",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bereguedê & Afins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bereguedê & Afins apresenta Otto + RAULTS",
    description:
      "26/09/2026 no Clube Fantoches, Salvador. Uma celebração da brasilidade através da música.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "entertainment",
};

// Structured data (JSON-LD) — ajuda Google a entender que isso é um evento
// e mostrar informações ricas nas buscas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "Bereguedê & Afins apresenta Otto + RAULTS",
  startDate: EVENT.date,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: EVENT.location,
    address: {
      "@type": "PostalAddress",
      streetAddress: EVENT.locationDetail,
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
  },
  image: [`${SITE_URL}/logo.png`],
  description:
    "Bereguedê & Afins apresenta Otto + RAULTS. Uma celebração da brasilidade através da música, da cultura e da festa.",
  performer: [
    { "@type": "MusicGroup", name: "Otto" },
    { "@type": "MusicGroup", name: "RAULTS" },
  ],
  organizer: {
    "@type": "Organization",
    name: "Bereguedê & Afins",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    url: EVENT.ticketUrl || `${SITE_URL}/#ingressos`,
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "BRL",
    validFrom: new Date().toISOString(),
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${bowlbyOne.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
