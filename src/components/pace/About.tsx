import coach from "@/assets/coach-portrait.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container-pace grid gap-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
            <img
              src={coach}
              alt="Giseli Cristina de Oliveira - Fundadora e técnica da Pace Running Curitiba"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-background/90 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-magenta">Fundadora & Técnica</p>
              <p className="mt-1 font-display text-lg font-semibold">Giseli Cristina de Oliveira</p>
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
              A nossa história começou em 2013, com mulheres que queriam mais do que correr — queriam pertencer. 
              Durante mais de uma década transformando vidas como Divas Running, crescemos de forma orgânica em torno de uma ideia simples:
              <span className="font-medium text-foreground"> ninguém corre sozinho</span>.
            </p>
            <p>
              Em setembro de 2025, vivenciamos a evolução da nossa paixão pelo esporte e renascemos como <strong>Pace Running Curitiba</strong>. 
              Foi um novo fôlego para alcançarmos novos P.A.C.E.s: <span className="italic font-medium text-foreground">Propósito, Ação, Conexão e Evolução</span>. 
              Mantivemos nossa metodologia leve, prazerosa e inclusiva, somando a isso a ciência esportiva e biomecânica para entregar treinos sob medida para cada atleta, do iniciante ao avançado.
            </p>
            <p>
              Nossa fundadora, Giseli Cristina de Oliveira, carrega 25 anos de formação acadêmica em Educação Física pela Universidade Federal do Paraná (UFPR). É uma trajetória dedicada a transformar corredores de qualquer nível em versões mais fortes de si mesmos, aliando o acolhimento e a energia de sempre à extrema credibilidade científica.
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