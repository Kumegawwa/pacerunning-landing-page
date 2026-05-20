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
              <img src="/logo.png" alt="Pace Running Curitiba" className="h-10 w-auto object-contain" />
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
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Contato & Localização</p>
            <div className="mt-5 flex items-center gap-4">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-magenta hover:scale-110" aria-label="WhatsApp">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-magenta hover:scale-110" aria-label="Instagram">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a className="hover:text-magenta text-sm text-white/80 transition-colors" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>

            <div className="mt-4 h-40 w-full overflow-hidden rounded-xl bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2372274719234!2d-49.311394123719945!3d-25.430331732810842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38a49df56d3%3A0x6b7774d0ef7b46bb!2sParque%20Barigui!5e0!3m2!1spt-BR!2sbr!4v1716215000000!3m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização dos treinos no Parque Barigui"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/15 pt-8 text-white/55 w-full">
          <div className="flex flex-col gap-1 items-center justify-center text-center w-full">
            <div>© {new Date().getFullYear()} Pace Running Curitiba · CNPJ 23.770.147/0001-66</div>
            {/* Assinatura do Desenvolvedor Centralizada */}
            <div className="text-[11px] font-sans tracking-wider text-white/40 flex items-center justify-center gap-1.5 mt-1 select-none">
              <span>Designed by</span>
              <a 
                href="https://www.linkedin.com/in/lucas-kumegawa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center text-white/40 transition-all duration-300 hover:text-white"
              >
                <span className="font-oleo text-[16px] text-magenta tracking-normal normal-case ml-1 transition-all duration-300 group-hover:scale-105 block origin-left">
                  Kumegawa
                </span>
              </a>
            </div> 
          </div>
        </div>
      </div>
    </footer>
  );
}