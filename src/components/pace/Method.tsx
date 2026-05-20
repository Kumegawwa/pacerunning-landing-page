const STEPS = [
  { n: "01", t: "Avaliação inicial", d: "Histórico, biomecânica, condicionamento atual e contexto de vida." },
  { n: "02", t: "Definição de objetivos", d: "Construímos uma meta clara, mensurável e realista para a sua fase." },
  { n: "03", t: "Plano personalizado", d: "Periodização individual com cargas, ritmos e mesociclos sob medida." },
  { n: "04", t: "Acompanhamento semanal", d: "Ajustes em tempo real via Strava, Garmin e contato direto com a técnica." },
  { n: "05", t: "Evolução contínua", d: "Reavaliação, novas metas e a próxima prova. O pace muda, a constância fica." },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-24 md:py-32 bg-background">
      <div className="container-pace">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Método Pace</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Cinco etapas. Zero achismo.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Ciência aplicada, dados objetivos e olhar humano. Um processo que respeita o seu corpo
            e acelera o seu progresso.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="group relative bg-background p-7 transition-colors hover:bg-mist md:p-8">
              <span className="font-display text-sm font-medium text-magenta">{s.n}</span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-magenta transition-all duration-500 group-hover:w-full" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
