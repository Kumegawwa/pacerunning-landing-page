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
    r: "Aluna desde 2021 · 2 maratonas",
  },
  {
    q: "Já corria há anos sozinha. Em 6 meses na Pace, quebrei meu PR dos 10K. O treino é técnico, sério e desenhado para mim.",
    n: "Rafael A.",
    r: "Performance · PR 10K: 42min",
  },
  {
    q: "Mais do que treino, é pertencer. Os parques de Curitiba viraram minha segunda casa, e a galera da Pace, minha família.",
    n: "Camila T.",
    r: "Iniciante · 1ª meia maratona",
  },
];

export function SocialProof() {
  return (
    <section id="prova" className="relative bg-background py-24 md:py-32">
      <div className="container-pace">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Atletas Pace</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Uma comunidade que transforma quem entra.
            </h2>
          </div>
          
          {/* Validação de Autoridade Externa - Google Reviews */}
          <div className="flex items-center gap-4 rounded-xl border border-border bg-mist px-6 py-4">
            <div className="flex -space-x-2">
               {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
               ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold">5.0</span>/5.0 no <span className="font-semibold text-foreground">Google</span>
            </div>
          </div>
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
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.n}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-mist p-7 md:p-8"
            >
              {/* Espaço reservado para implementação de Miniatura de Vídeo nativo ou Widget */}
              <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta text-white shadow-lg backdrop-blur-md">
                  <svg className="h-5 w-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white drop-shadow-md">Ver relato</span>
              </div>

              <blockquote className="text-[15px] leading-relaxed text-foreground/85">
                "{t.q}"
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