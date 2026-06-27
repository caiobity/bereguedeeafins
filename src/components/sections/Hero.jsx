import Image from "next/image";
import { EVENT, TICKETS } from "@/lib/constants";
import AnimatedText from "@/components/ui/AnimatedText";
import FloatingLogos from "./FloatingLogos";

export default function Hero() {
  const ticketsAvailable = TICKETS.length > 0 || !!EVENT.ticketUrl;
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-20 pb-12"
      style={{ background: "#f2d620" }}
    >
      {/* Logos flutuantes com bounce estilo DVD logo */}
      <FloatingLogos />

      {/* Sparkles ✦ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <span className="absolute top-[16%] left-[32%]  text-white/50  text-xl   animate-sparkle" style={{ animationDelay: '0s'   }}>✦</span>
        <span className="absolute top-[13%] right-[27%] text-pink/55   text-sm   animate-sparkle" style={{ animationDelay: '1s'   }}>✦</span>
        <span className="absolute top-[68%] left-[18%]  text-purple/35 text-xs   animate-sparkle" style={{ animationDelay: '0.5s' }}>✦</span>
        <span className="absolute top-[63%] right-[20%] text-white/30  text-base animate-sparkle" style={{ animationDelay: '2s'   }}>✦</span>
        <span className="absolute top-[35%] left-[6%]   text-pink/40   text-xs   animate-sparkle" style={{ animationDelay: '1.5s' }}>✦</span>
        <span className="absolute top-[30%] right-[7%]  text-white/35  text-sm   animate-sparkle" style={{ animationDelay: '2.5s' }}>✦</span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 text-center md:gap-3">
        <Image
          src="/logo.png"
          alt="Bereguedê e Afins"
          width={450}
          height={450}
          priority
          className="w-[min(250px,58vw)] h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)] animate-logo-entry md:w-[min(380px,36vw)]"
        />

        {/* Badge de data */}
        <div className="animate-fade-up-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-purple shadow-md md:px-5 md:py-2 md:text-base">
            <span>📅</span>
            <span>{EVENT.dateDisplay} &bull; {EVENT.dayOfWeek}</span>
          </div>
        </div>

        {/* Descrição — palavra por palavra */}
        <p className="mx-auto max-w-[500px] text-sm font-medium text-purple-dark text-pretty md:text-lg">
          <AnimatedText text={EVENT.description} baseDelay={450} />
        </p>

        {/* Local e hora */}
        <div className="animate-fade-up-2 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-purple max-sm:flex-col max-sm:gap-1 md:gap-6 md:text-base">
          <span>📍 {EVENT.location}</span>
          <span>🕐 {EVENT.time}</span>
        </div>

        {/* Botão CTA */}
        <div className="animate-fade-up-3">
          <a
            href={EVENT.ticketUrl || "#ingressos"}
            target={EVENT.ticketUrl ? "_blank" : undefined}
            rel={EVENT.ticketUrl ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-pink to-purple px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(230,38,122,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(230,38,122,0.5)] animate-pulse-glow md:px-10 md:py-4.5 md:text-lg"
          >
            {ticketsAvailable ? "Garanta seu Ingresso" : "Anúncio em breve"}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 -translate-x-1/2 animate-arrow-bounce">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-dark/60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

    </section>
  );
}
