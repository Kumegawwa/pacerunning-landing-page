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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1s0x94dce38d011f0c59:0x87fb880cbfa3c35b!2sParque+Barigui!5m2!1spt-BR!2sbr" 
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
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-center md:text-left">
          
          {/* Coluna Esquerda: Informações de Direitos */}
          <div className="flex-1">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Pace Running Curitiba. Todos os direitos reservados. CNPJ: 23.770.147/0001-66.
            </p>
          </div>
          
          {/* Coluna Central: Bloco de Assinatura Padrão */}
          <div className="flex-1 flex justify-center">
            <div className="text-[11px] font-sans tracking-wider text-muted-foreground flex items-center justify-center gap-1 select-none">
              <span>Designed by</span>
              <a 
                href="https://www.linkedin.com/in/lucas-kumegawa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                <span className="font-oleo text-[16px] text-primary tracking-normal normal-case transition-all duration-300 group-hover:scale-105 block origin-center">
                  Kumegawa
                </span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Balanceamento de Layout (Desktop Only) */}
          <div className="flex-1 hidden md:block">
            {/* Mantido em branco para garantir a centralização perfeita da coluna do meio */}
          </div>

        </div>
      </div>
    </footer>
  );
}