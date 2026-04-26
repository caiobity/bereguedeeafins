import Image from "next/image";
import { EVENT } from "@/lib/constants";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-20 pb-12"
      style={{ background: "linear-gradient(to bottom, #f2d620 0%, #f2d620 78%, #e6267a 95%, #c0185f 100%)" }}
    >
      {/* Orbs grandes de fundo */}
      <div className="pointer-events-none absolute -top-1/2 -right-1/5 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(230,38,122,0.18)_0%,transparent_70%)] animate-float" />
      <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(58,33,120,0.12)_0%,transparent_70%)] animate-float-reverse" />
      <div className="pointer-events-none absolute top-[20%] left-[5%] size-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] animate-float-reverse" />
      <div className="pointer-events-none absolute bottom-[15%] right-[5%] size-[220px] rounded-full bg-[radial-gradient(circle,rgba(230,38,122,0.12)_0%,transparent_70%)] animate-float" style={{ animationDelay: '3s' }} />

      {/* Bolinhas flutuantes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[12%] left-[8%]   size-3 rounded-full bg-pink/30   animate-float"         style={{ animationDelay: '0s',   animationDuration: '7s'  }} />
        <div className="absolute top-[22%] left-[16%]  size-2 rounded-full bg-white/40  animate-float-reverse" style={{ animationDelay: '1.2s', animationDuration: '5s'  }} />
        <div className="absolute top-[8%]  left-[28%]  size-4 rounded-full bg-purple/20 animate-float"         style={{ animationDelay: '2s',   animationDuration: '9s'  }} />
        <div className="absolute top-[10%] right-[9%]  size-3 rounded-full bg-pink/25   animate-float-reverse" style={{ animationDelay: '0.5s', animationDuration: '6s'  }} />
        <div className="absolute top-[20%] right-[20%] size-2 rounded-full bg-white/35  animate-float"         style={{ animationDelay: '1.8s', animationDuration: '8s'  }} />
        <div className="absolute top-[6%]  right-[32%] size-5 rounded-full bg-purple/15 animate-float-reverse" style={{ animationDelay: '3s',   animationDuration: '10s' }} />
        <div className="absolute top-[48%] left-[4%]   size-2 rounded-full bg-pink/20   animate-float"         style={{ animationDelay: '2.5s', animationDuration: '7s'  }} />
        <div className="absolute top-[58%] left-[11%]  size-3 rounded-full bg-white/25  animate-float-reverse" style={{ animationDelay: '0.8s', animationDuration: '9s'  }} />
        <div className="absolute top-[42%] right-[5%]  size-4 rounded-full bg-purple/15 animate-float"         style={{ animationDelay: '1.2s', animationDuration: '6s'  }} />
        <div className="absolute top-[60%] right-[13%] size-2 rounded-full bg-pink/30   animate-float-reverse" style={{ animationDelay: '3.5s', animationDuration: '8s'  }} />
        <div className="absolute top-[75%] left-[25%]  size-3 rounded-full bg-white/20  animate-float"         style={{ animationDelay: '1s',   animationDuration: '7s'  }} />
        <div className="absolute top-[78%] right-[28%] size-2 rounded-full bg-purple/25 animate-float-reverse" style={{ animationDelay: '2.2s', animationDuration: '5s'  }} />
      </div>

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
          width={350}
          height={350}
          priority
          className="w-[min(180px,42vw)] h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)] animate-logo-entry md:w-[min(280px,28vw)]"
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
            href="https://shotgun.live/pt-br/events/curumin-cabuloso-gil-dj-roger-n-roll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-pink to-purple px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(230,38,122,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(230,38,122,0.5)] animate-pulse-glow md:px-10 md:py-4.5 md:text-lg"
          >
            Garanta seu Ingresso
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 animate-arrow-bounce">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-dark/60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

    </section>
  );
}
