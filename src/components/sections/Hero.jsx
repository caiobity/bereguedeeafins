import Image from "next/image";
import { EVENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-yellow px-6 pt-20 pb-12"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-1/2 -right-1/5 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(230,38,122,0.15)_0%,transparent_70%)] animate-float" />
      <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(58,33,120,0.1)_0%,transparent_70%)] animate-float-reverse" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center md:gap-5">
        <Image
          src="/logo.png"
          alt="Bereguedê e Afins"
          width={350}
          height={350}
          priority
          className="w-[min(240px,55vw)] h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)] animate-logo-entry md:w-[min(320px,60vw)]"
        />

        <div className="animate-fade-up-delay">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-purple shadow-md md:px-6 md:py-2.5 md:text-base">
            <span>📅</span>
            <span>{EVENT.dateDisplay} &bull; {EVENT.dayOfWeek}</span>
          </div>

          <p className="mx-auto mb-3 max-w-[500px] text-base font-medium text-purple-dark text-pretty md:mb-5 md:text-xl">
            {EVENT.description}
          </p>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-purple max-sm:flex-col max-sm:gap-1.5 md:mb-7 md:gap-6 md:text-base">
            <span>📍 {EVENT.location}</span>
            <span>🕐 {EVENT.time}</span>
          </div>

          <a
            href="#ingressos"
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-pink to-purple px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(230,38,122,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(230,38,122,0.5)] animate-pulse-glow md:px-10 md:py-4.5 md:text-lg"
          >
            Garanta seu Ingresso
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
