import { SITE } from "@/lib/site";

const SERVICES = [
  {
    n: "01",
    title: "Corrida para iniciantes",
    desc: "Do sofá ao primeiro 5K com segurança, progressão e prazer. Sem queimar etapas, sem se machucar.",
  },
  {
    n: "02",
    title: "Emagrecimento",
    desc: "Periodização inteligente combinando aeróbico, força e estratégia nutricional para resultado real.",
  },
  {
    n: "03",
    title: "Performance",
    desc: "Quebra de PR, limiar, VO₂ máx. Treinos baseados em dados, monitoramento contínuo e ajuste fino.",
  },
  {
    n: "04",
    title: "Planilhas online",
    desc: "Plano 100% personalizado para quem corre fora de Curitiba. Acompanhamento técnico semanal.",
  },
  {
    n: "05",
    title: "Meia maratona",
    desc: "Ciclos de 12 a 16 semanas. Estratégia de prova, ritmo, hidratação e cabeça preparada para 21K.",
  },
  {
    n: "06",
    title: "Maratona",
    desc: "Preparação completa para 42K com base científica. Volume, recuperação e mental coaching.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-mist py-24 md:py-32">
      <div className="container-pace">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Serviços</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Um treino. Um corpo. Um pace.
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            Programas individuais, baseados em ciência e desenhados em torno do seu objetivo — não do contrário.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-magenta/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--magenta)_45%,transparent)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-medium text-magenta">{s.n}</span>
                  <span className="h-px w-12 bg-border transition-all group-hover:w-20 group-hover:bg-magenta" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-magenta"
              >
                Quero esse programa
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
