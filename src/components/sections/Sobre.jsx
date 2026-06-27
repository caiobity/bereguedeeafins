import Image from "next/image";

const CARDS = [
  {
    gradient: "from-pink to-purple",
    title: "Curadoria Musical",
    description:
      "A curadoria musical é um dos pilares do projeto, com atenção especial à qualidade, coerência e identidade de cada lineup.",
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" fill="currentColor" />
        <circle cx="18" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    gradient: "from-cyan to-purple",
    title: "Independente",
    description:
      "Desde 2025 sob direção independente de Márcia Bity, com curadoria e produção assinadas integralmente por sua fundadora.",
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.25" />
        <path d="M19 3v4M21 5h-4M5 17v4M7 19H3" />
      </svg>
    ),
  },
  {
    gradient: "from-pink to-yellow",
    title: "Experiência",
    description:
      "Mais do que eventos, a Bereguedê e Afins cria encontros. Espaços onde música, estética e público se conectam de forma genuína.",
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.25" />
        <circle cx="19" cy="19" r="1.5" fill="currentColor" />
        <circle cx="4" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative bg-white py-20">
      {/* Laço pink ondulado na transição com o Hero — wavy top + wavy bottom, sem barra branca */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute -top-[40px] left-0 z-10 h-[80px] w-full"
      >
        <path
          d="
            M0,22
            C200,4 400,38 640,20 C880,2 1080,38 1280,22 C1360,14 1408,20 1440,18
            L1440,56
            C1400,60 1340,52 1240,60 C1040,78 820,42 600,58 C380,78 180,44 0,64
            Z
          "
          fill="#e6267a"
        />
      </svg>

      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-center text-4xl text-purple md:text-5xl text-balance">
          Sobre a Bereguedê e Afins
        </h2>

        <div className="mx-auto mt-6 mb-12 max-w-[780px] text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-pink">
            Produção independente &bull; Salvador | Bahia &bull; Por{" "}
            <a
              href="https://instagram.com/marcia_bity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @marcia_bity
            </a>
          </p>

          <p className="text-lg leading-relaxed text-gray-800 text-pretty">
            A Bereguedê e Afins nasceu em 2023 a partir de um desejo simples: criar experiências autênticas, fora do óbvio, para um público que busca mais do que apenas festas — busca conexão, música de qualidade e ambientes com identidade.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 text-pretty">
            Inicialmente concebida como um projeto coletivo, a produtora passou por uma transição natural e, desde 2025, segue sob direção independente de Márcia Bity, com curadoria e produção assinadas integralmente por sua fundadora.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 text-pretty">
            Cada evento é pensado de forma única. A escolha dos artistas, dos espaços e da atmosfera não segue tendências — segue propósito. A Bereguedê e Afins se posiciona como uma produtora de festas alternativas, voltadas especialmente para um público mais maduro, que valoriza experiências bem construídas, diversidade musical e ambientes acolhedores.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 text-pretty">
            A curadoria musical é um dos pilares do projeto, com atenção especial à qualidade, coerência e identidade de cada lineup. Da mesma forma, os locais são escolhidos estrategicamente, buscando sempre potencializar a experiência do público.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 text-pretty">
            Atualmente, a produtora conta com a parceria de Saint Clair, responsável pela operação de bar, equipe de apoio e estrutura de som. Embora não componha a sociedade da produtora, sua colaboração é parte fundamental na realização dos eventos, contribuindo diretamente para a consistência e qualidade das entregas.
          </p>

          <p className="mt-6 text-lg font-semibold text-purple italic">
            "Bereguedê e Afins é sobre sentir, pertencer e viver a experiência."
          </p>

          {/* Márcia Bity */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="relative size-28 overflow-hidden rounded-full border-4 border-pink shadow-lg">
              <Image
                src="/marcia bity.jpeg"
                alt="Márcia Bity"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-purple">Márcia Bity</p>
              <p className="text-xs text-gray-500">Fundadora & Produtora</p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border-2 border-transparent bg-gray-100 p-10 text-center transition-all duration-200 hover:-translate-y-1 hover:border-purple hover:shadow-lg"
            >
              <div className={`mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-md ${card.gradient}`}>
                {card.svg}
              </div>
              <h3 className="mb-3 text-xl text-purple">{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 text-pretty">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
