const PAST_EVENTS = [
  {
    title: "Bereguedê Vol. 1",
    date: "Em breve",
    description: "Nossa primeira edição. Detalhes em breve!",
  },
  {
    title: "Bereguedê Vol. 2",
    date: "Em breve",
    description: "A segunda edição que marcou época. Detalhes em breve!",
  },
  {
    title: "Bereguedê Vol. 3",
    date: "Em breve",
    description: "Mais uma noite inesquecível. Detalhes em breve!",
  },
];

export default function EventosAnteriores() {
  return (
    <section id="anteriores" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-purple md:text-5xl text-balance">
          Eventos Anteriores
        </h2>
        <p className="mb-10 text-center text-gray-600 text-pretty">
          Nossa história em festas
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_EVENTS.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-linear-to-br from-purple/10 to-pink/10">
                <span className="text-5xl">🎉</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-pink">
                  {event.date}
                </span>
                <h3 className="mt-1 text-lg font-bold text-purple">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
