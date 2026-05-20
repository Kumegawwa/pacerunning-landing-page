import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-running.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-white">
      <img
        src={heroImg}
        alt="Atletas correndo ao amanhecer em Curitiba"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-2/60 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_85%_15%,color-mix(in_oklab,var(--magenta)_35%,transparent),transparent_70%)]" />

      <div className="container-pace relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
            Assessoria de corrida · Curitiba
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[1.02] tracking-tight text-balance">
            Cada passo tem um pace.
            <span className="block text-magenta">O seu pode mudar tudo.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
            Treinamento de corrida personalizado para iniciantes e atletas em Curitiba.
            Método baseado em ciência, acompanhamento humano e uma comunidade que corre com você
            do primeiro quilômetro à sua próxima maratona.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02] hover:brightness-110"
            >
              Agendar treino experimental
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Conhecer o método
            </a>
          </div>

          <dl className="reveal reveal-delay-4 mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {[
              { k: "+12", v: "anos de comunidade" },
              { k: "+13,5K", v: "seguidores ativos" },
              { k: "2", v: "parques em Curitiba" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold text-white md:text-4xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-white/65 md:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/55">
          Role
          <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
