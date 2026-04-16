"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { EVENT } from "@/lib/constants";

const UNITS = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
];

export default function Countdown() {
  const timeLeft = useCountdown(EVENT.date);

  return (
    <div className="rounded-3xl bg-linear-to-br from-purple to-purple-dark px-8 py-12 text-center text-white">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest opacity-90">
        Contagem Regressiva
      </h3>
      <div className="flex items-center justify-center gap-3 max-sm:gap-1">
        {UNITS.map((unit, i) => (
          <div key={unit.key} className="flex items-center gap-3 max-sm:gap-1">
            {i > 0 && (
              <span className="pb-5 text-3xl font-bold opacity-40 max-sm:text-xl">:</span>
            )}
            <div className="flex min-w-[60px] flex-col items-center md:min-w-[80px]">
              <span className="bg-linear-to-br from-yellow to-pink bg-clip-text text-5xl font-bold text-transparent tabular-nums md:text-7xl">
                {String(timeLeft[unit.key]).padStart(2, "0")}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wider opacity-70">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
