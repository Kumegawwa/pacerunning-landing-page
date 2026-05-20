const STATS = [
  { n: "+13.500", l: "seguidores ativos" },
  { n: "+12 anos", l: "de comunidade" },
  { n: "+1.000", l: "atletas treinados" },
  { n: "+200", l: "provas concluídas" },
];

const TESTIMONIALS = [
  {
    q: "Saí do zero. Hoje sou maratonista. A Pace me ensinou que o meu pace era o suficiente para começar — e o bastante para chegar longe.",
    n: "Marina S.",
    r: "Aluna desde 2021 · 2 maratonas concluídas",
  },
  {
    q: "Já corria há anos sozinha. Em 6 meses na Pace, quebrei meu PR dos 10K. O treino é técnico, sério e desenhado para mim.",
    n: "Rafael A.",
    r: "Performance · PR 10K: 42min",
  },
  {
    q: "Mais do que treino, é pertencer. Os parques de Curitiba viraram minha segunda casa, e a galera da Pace, minha família.",
    n: "Camila T.",
    r: "Iniciante · 1ª meia maratona concluída",
  },
];

export function SocialProof() {
  return (
    <section id="prova" className="relative bg-background py-24 md:py-32">
      <div className="container-pace">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Atletas Pace</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Uma comunidade que transforma quem entra.
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="bg-background p-7 md:p-9">
              <dt className="font-display text-4xl font-semibold tracking-tight text-magenta md:text-5xl">{s.n}</dt>
              <dd className="mt-3 text-sm text-muted-foreground">{s.l}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.n}
              className="flex flex-col justify-between rounded-2xl border border-border bg-mist p-7 md:p-8"
            >
              <svg className="h-7 w-7 text-magenta" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z"/>
              </svg>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/85">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-base font-semibold">{t.n}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
