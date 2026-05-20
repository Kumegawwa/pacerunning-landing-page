import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pt-24 pb-12 text-white">
      <div className="container-pace grid gap-16 md:grid-cols-12 md:gap-8">
        
        <div className="md:col-span-5">
          <h3 className="font-display text-2xl font-semibold text-magenta">Pace Running Curitiba</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Muito mais do que uma assessoria esportiva. Uma comunidade forjada nos parques de Curitiba, unindo ciência, performance e acolhimento.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-magenta">
              WhatsApp: +55 41 99978-2886
            </a>
            <a href="https://instagram.com/pacerunningcuritiba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-magenta">
              Instagram: @pacerunningcuritiba
            </a>
            <a href="mailto:contato@pacerunning.com.br" className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-magenta">
              contato@pacerunning.com.br
            </a>
          </div>
        </div>

        <div className="md:col-span-7 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Horários de Operação</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="border-b border-white/10 pb-3">
                <span className="block font-semibold text-magenta">Parque Barigui</span>
                Terças e Quintas: 07:00 e 18:30<br/>
                Sábados: 07:00
              </li>
              <li className="pt-1">
                <span className="block font-semibold text-magenta">Parque São José</span>
                Segundas e Quartas: 18:30
              </li>
            </ul>
          </div>

          <div className="h-48 w-full overflow-hidden rounded-xl bg-white/5 sm:h-full">
            {/* Embedded Map do Parque Barigui / São José - Ajustar SRC final via Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14413.435749214346!2d-49.3175409!3d-25.4262846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f605cb49f3%3A0x671f6a1d4b68eeb4!2sParque%20Barigui!5e0!3m2!1spt-BR!2sbr!4v1698765432101!5m2!1spt-BR!2sbr" 
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
      
      <div className="container-pace mt-20 border-t border-white/15 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Pace Running Curitiba. Todos os direitos reservados. CNPJ: 23.770.147/0001-66.
          </p>
          <div className="text-center text-xs tracking-wider text-white/40 uppercase">
            designed by kumegawa
          </div>
        </div>
      </div>
    </footer>
  );
}