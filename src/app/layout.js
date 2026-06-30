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
  title: "Bereguedê & Afins | Festa em Salvador",
  description:
    "Bereguedê & Afins - A maior festa de Salvador! Compre seu ingresso online com seguranca.",
  keywords: "festa, Salvador, Bahia, ingresso, evento, musica, axe, pagode",
  openGraph: {
    title: "Bereguedê & Afins | Festa em Salvador",
    description:
      "A festa que mistura todos os ritmos de Salvador num so lugar!",
    locale: "pt_BR",
    type: "website",
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
