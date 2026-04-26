import Image from "next/image";
import Link from "next/link";
import { PAST_EVENTS } from "@/lib/constants";

function EventCard({ event }) {
  return (
    <Link
      href={`/eventos/${event.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Year badge */}
      <div className="absolute top-3 right-3 z-10 rounded-full bg-purple/90 px-3 py-1 text-[0.65rem] font-bold text-white shadow-md">
        {event.year}
      </div>

      {/* Cover photo (banner if available, else first photo) */}
      <div className={`relative h-52 overflow-hidden ${event.banner ? "bg-linear-to-br from-purple to-pink" : ""}`}>
        <Image
          src={event.banner ?? event.images[0]}
          alt={event.attractions.join(", ")}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            event.banner ? "object-contain" : "object-cover object-center"
          }`}
        />
        {!event.banner && (
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        )}

        {/* Photo count badge */}
        {event.images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[0.65rem] font-semibold text-white backdrop-blur-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            {event.images.length} fotos
          </div>
        )}

        {/* "Ver mais" overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-purple/0 opacity-0 transition-all duration-300 group-hover:bg-purple/40 group-hover:opacity-100">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-purple shadow-lg">
            Ver mais →
          </span>
        </div>
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-pink">
          {event.date}
        </span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {event.attractions.map((name) => (
            <span
              key={name}
              className="rounded-full bg-purple/10 px-2.5 py-0.5 text-xs font-semibold text-purple"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function EventosAnteriores() {
  return (
    <section id="anteriores" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-purple md:text-5xl text-balance">
          Eventos Anteriores
        </h2>
        <p className="mb-10 text-center text-gray-600 text-pretty">
          Nossa história em festas — clique para ver mais
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_EVENTS.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
