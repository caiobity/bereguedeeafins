import { Space_Grotesk, DM_Sans, Bowlby_One } from "next/font/google";
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

export const metadata = {
  metadataBase: new URL("https://www.bereguedeeafins.com.br"),
  title: "Bereguedê & Afins | Festa em Salvador",
  description:
    "Bereguedê & Afins - Uma celebração da brasilidade através da música, da cultura e da festa. 26 de Setembro de 2026 em Salvador.",
  keywords: "festa, Salvador, Bahia, ingresso, evento, musica, MPB, Otto, RAULTS, bereguede, afins",
  openGraph: {
    title: "Bereguedê & Afins | Festa em Salvador",
    description:
      "Otto + RAULTS — 26 de Setembro de 2026 no Clube Fantoches. Viva mais do que um show!",
    locale: "pt_BR",
    type: "website",
    siteName: "Bereguedê & Afins",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${bowlbyOne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
