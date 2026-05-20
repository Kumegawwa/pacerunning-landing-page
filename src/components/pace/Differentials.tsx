const DIFFS = [
  { t: "Biomecânica aplicada", d: "Análise de pisada, postura e padrão de corrida para reduzir lesões." },
  { t: "Treino baseado em ciência", d: "Cargas, zonas e periodização fundamentadas em literatura atual." },
  { t: "Acompanhamento individual", d: "Você não é um número. Cada planilha é desenhada para o seu corpo." },
  { t: "Integração Strava & Garmin", d: "Seus dados, em tempo real, conversando com a sua técnica." },
  { t: "Suporte próximo", d: "Contato direto sempre que precisar. Antes, durante e depois do treino." },
  { t: "Comunidade forte", d: "Mais de uma década correndo junto. Aqui ninguém atravessa sozinho." },
];

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-deep-gradient py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_30%,color-mix(in_oklab,var(--magenta)_28%,transparent),transparent_70%)]" />
      <div className="container-pace relative">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Diferenciais</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Tecnologia que serve o atleta — não o contrário.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DIFFS.map((d, i) => (
            <div
              key={d.t}
              className="glass rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <span className="font-display text-xs font-medium text-magenta/90">
                {String(i + 1).padStart(2, "0")} / 06
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{d.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
