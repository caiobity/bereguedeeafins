import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PAST_EVENTS } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventGallery from "@/components/sections/EventGallery";

export function generateStaticParams() {
  return PAST_EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = PAST_EVENTS.find((e) => e.slug === slug);
  if (!event) return {};

  const title = `${event.attractions.join(" + ")} (${event.date}) | Bereguedê e Afins`;
  return {
    title,
    description:
      event.summary ||
      `Confira como foi a festa Bereguedê e Afins em ${event.date} com ${event.attractions.join(", ")}.`,
    openGraph: {
      title,
      images: event.images?.[0] ? [event.images[0]] : [],
      type: "article",
    },
  };
}

export default async function EventoPage({ params }) {
  const { slug } = await params;
  const event = PAST_EVENTS.find((e) => e.slug === slug);

  if (!event) notFound();

  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">
        {/* Hero — banner if available, else first image cover */}
        {event.banner ? (
          <div className="relative w-full overflow-hidden bg-linear-to-br from-purple via-purple to-pink">
            <div className="mx-auto w-full max-w-[1100px] px-6 pt-6 pb-4">
              <Link
                href="/#anteriores"
                className="mb-5 flex w-fit items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-yellow"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Voltar aos eventos
              </Link>
            </div>

            <div className="relative mx-auto flex h-[55vh] max-h-[520px] min-h-[320px] w-full max-w-[1100px] items-center justify-center px-6 pb-8">
              <Image
                src={event.banner}
                alt={event.attractions.join(", ")}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-contain"
                priority
              />
            </div>

            <div className="mx-auto w-full max-w-[1100px] px-6 pb-10 text-center">
              <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {event.date}
              </span>
              <h1 className="mt-3 font-heading text-3xl font-bold text-white text-balance md:text-5xl">
                {event.attractions.join(" + ")}
              </h1>
            </div>
          </div>
        ) : (
          <div className={`relative w-full overflow-hidden ${event.images?.[0] ? "h-[40vh] min-h-[280px] bg-gray-900 md:h-[55vh]" : "bg-linear-to-br from-purple via-purple to-pink py-16 md:py-24"}`}>
            {event.images?.[0] && (
              <>
                <Image
                  src={event.images[0]}
                  alt={event.attractions.join(", ")}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/30" />
              </>
            )}

            <div className={event.images?.[0] ? "absolute inset-0 flex items-end" : "relative"}>
              <div className="mx-auto w-full max-w-[1100px] px-6 pb-10">
                <Link
                  href="/#anteriores"
                  className="mb-5 flex w-fit items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-yellow"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Voltar aos eventos
                </Link>

                <span className="inline-block w-fit rounded-full bg-pink/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {event.date}
                </span>
                <h1 className="mt-3 font-heading text-3xl font-bold text-white text-balance md:text-5xl">
                  {event.attractions.join(" + ")}
                </h1>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mx-auto max-w-[1100px] px-6 py-12">
          {/* Attractions chips */}
          <div className="mb-10 flex flex-wrap gap-2">
            {event.attractions.map((name) => (
              <span
                key={name}
                className="rounded-full bg-purple/10 px-4 py-1.5 text-sm font-semibold text-purple"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Location */}
          {event.location && (
            <div className="mb-8 flex items-start gap-3 rounded-2xl bg-gray-100 p-5">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-pink">
                  Local
                </p>
                <p className="text-base font-semibold text-gray-800">
                  {event.location}
                </p>
              </div>
            </div>
          )}

          {/* Summary card */}
          {event.summary && (
            <section className="mb-12">
              <div className="relative overflow-hidden rounded-3xl border border-yellow/50 bg-yellow/[0.08] p-7 shadow-sm md:p-10">
                {/* Pequeno detalhe decorativo no canto */}
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-pink/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-pink" />
                    <span className="text-xs font-bold uppercase tracking-wider text-pink">
                      Sobre o evento
                    </span>
                  </div>
                  <div className="space-y-4 leading-relaxed text-gray-700 text-pretty md:text-[1.05rem]">
                    {event.summary.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Photos */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-purple md:text-3xl">
              Fotos
            </h2>
            <EventGallery images={event.images} alt={event.attractions.join(", ")} />
          </section>

          {/* Videos */}
          {event.videos?.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-purple md:text-3xl">
                Vídeos
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {event.videos.map((src) => (
                  <video
                    key={src}
                    src={src}
                    controls
                    className="aspect-video w-full rounded-xl bg-black shadow-md"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Back to events */}
          <div className="mt-16 border-t border-gray-200 pt-8 text-center">
            <Link
              href="/#anteriores"
              className="inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple/90 hover:shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Ver todos os eventos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
