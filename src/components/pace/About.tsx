import coach from "@/assets/coach-portrait.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container-pace grid gap-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
            <img
              src={coach}
              alt="Fundadora e técnica da Pace Running Curitiba"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-background/90 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-magenta">Fundadora & Técnica</p>
              <p className="mt-1 font-display text-lg font-semibold">25 anos formada pela UFPR</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Sobre nós</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
            Começamos como Divas Running em 2013.
            <span className="text-muted-foreground"> Hoje, somos Pace.</span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-foreground/80 md:text-[17px]">
            <p>
              Nasceu pequena, em 2013, com mulheres que queriam mais do que correr — queriam pertencer.
              Crescemos de forma orgânica, ano após ano, em torno de uma ideia simples:
              <span className="font-medium text-foreground"> ninguém corre sozinho na Pace</span>.
            </p>
            <p>
              Em 2023, abrimos as portas para todos e renascemos como <strong>Pace Running Curitiba</strong>.
              Mantivemos o que nos definia — acolhimento, comunidade, evolução individual — e somamos
              ciência esportiva, biomecânica e tecnologia para entregar treinos sob medida para cada atleta.
            </p>
            <p>
              Nossa fundadora carrega 25 anos de formação em Educação Física pela UFPR e uma trajetória
              dedicada a transformar corredores de qualquer nível em versões mais fortes de si mesmos.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { n: "25", l: "anos de experiência técnica" },
              { n: "2013", l: "início da comunidade" },
              { n: "100%", l: "treinos individualizados" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-semibold text-magenta md:text-4xl">{s.n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
