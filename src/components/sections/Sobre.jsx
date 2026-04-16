const CARDS = [
  {
    icon: "🎵",
    title: "Curadoria Musical",
    description:
      "A curadoria musical é um dos pilares do projeto, com atenção especial à qualidade, coerência e identidade de cada lineup.",
  },
  {
    icon: "🔥",
    title: "Independente",
    description:
      "Desde 2025 sob direção independente de Márcia Bity, com curadoria e produção assinadas integralmente por sua fundadora.",
  },
  {
    icon: "🤝",
    title: "Experiência",
    description:
      "Mais do que eventos, a Bereguedê e Afins cria encontros. Espaços onde música, estética e público se conectam de forma genuína.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20">
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
        </div>

        <div className="mt-10 mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border-2 border-transparent bg-gray-100 p-10 text-center transition-all duration-200 hover:-translate-y-1 hover:border-purple hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{card.icon}</div>
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
