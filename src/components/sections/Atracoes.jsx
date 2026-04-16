import Image from "next/image";
import { ATTRACTIONS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const GRADIENTS = [
  "from-purple to-pink",
  "from-pink to-yellow",
  "from-cyan to-purple",
];

export default function Atracoes() {
  return (
    <section id="atracoes" className="bg-linear-to-b from-gray-100 to-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-purple md:text-5xl text-balance">
          Atrações
        </h2>
        <p className="mb-10 text-center text-gray-600 text-pretty">
          Line-up que vai fazer você não parar de dançar
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {ATTRACTIONS.map((attraction, i) => (
            <div
              key={attraction.name}
              className={cn(
                "group relative overflow-hidden rounded-3xl border-2 bg-white transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-xl",
                attraction.headliner
                  ? "border-pink"
                  : "border-gray-200 hover:border-cyan"
              )}
            >
              {attraction.headliner && (
                <div className="absolute top-4 right-4 z-10 rounded-full bg-linear-to-r from-pink to-purple px-4 py-1 text-[0.65rem] font-bold uppercase text-white shadow-md">
                  Headliner
                </div>
              )}

              {/* Photo area */}
              <div className="relative h-64 overflow-hidden">
                {attraction.image ? (
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={cn(
                    "flex h-full items-center justify-center bg-linear-to-br",
                    GRADIENTS[i % GRADIENTS.length]
                  )}>
                    <span className="text-6xl font-bold text-white/40">
                      {attraction.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-purple">{attraction.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600 text-pretty">
                  {attraction.description}
                </p>
                {attraction.instagram && (
                  <a
                    href={`https://instagram.com/${attraction.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-purple/70 transition-colors hover:text-pink"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    @{attraction.instagram}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
