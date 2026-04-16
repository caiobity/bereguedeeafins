import { EVENT } from "@/lib/constants";

const DETAILS = [
  {
    icon: "📍",
    title: "Endereco",
    lines: [EVENT.location, EVENT.locationDetail],
  },
  {
    icon: "📅",
    title: "Data",
    lines: [`${EVENT.dateDisplay} (${EVENT.dayOfWeek})`],
  },
  {
    icon: "🕐",
    title: "Horario",
    lines: [`Abertura dos portoes: ${EVENT.gateOpen}`, `Inicio: ${EVENT.startTime}`],
  },
  {
    icon: "👔",
    title: "Dress Code",
    lines: [EVENT.dressCode],
  },
];

export default function Local() {
  return (
    <section id="local" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-10 text-center text-4xl text-purple md:text-5xl text-balance">
          Local do Evento
        </h2>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {DETAILS.map((detail) => (
              <div key={detail.title} className="flex gap-4">
                <span className="shrink-0 text-3xl">{detail.icon}</span>
                <div>
                  <h4 className="mb-1 font-bold text-purple">{detail.title}</h4>
                  {detail.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={EVENT.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do local do evento"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
