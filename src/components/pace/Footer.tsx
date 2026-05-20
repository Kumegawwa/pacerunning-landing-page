import { SITE } from "@/lib/site";

const SCHEDULE = [
  {
    park: "Parque Barigui",
    slots: ["Terça · 07h e 18h30", "Quinta · 07h e 18h30", "Sábado · 07h"],
  },
  {
    park: "Parque São José",
    slots: ["Segunda · 18h30", "Quarta · 18h30"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-gradient text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_0%,color-mix(in_oklab,var(--magenta)_22%,transparent),transparent_70%)]" />

      <div className="container-pace relative py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-magenta font-display text-lg font-bold">P</span>
              <span className="font-display text-xl font-semibold">Pace Running Curitiba</span>
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
              Assessoria esportiva premium em Curitiba. Treino baseado em ciência, acompanhamento humano
              e a maior comunidade de corredores da cidade.
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Falar no WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Treinos presenciais</p>
            <div className="mt-5 space-y-6">
              {SCHEDULE.map((s) => (
                <div key={s.park}>
                  <p className="font-display text-base font-semibold">{s.park}</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/75">
                    {s.slots.map((slot) => <li key={slot}>{slot}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <a className="hover:text-magenta transition-colors" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram @pacerunningcuritiba
                </a>
              </li>
              <li>
                <a className="hover:text-magenta transition-colors" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li>Curitiba · Paraná</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Pace Running Curitiba. Todo pace importa.</p>
          <p>Assessoria de corrida em Curitiba — Parque Barigui & Parque São José</p>
        </div>
      </div>
    </footer>
  );
}
