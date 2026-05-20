import { useState } from "react";

const FAQS = [
  {
    q: "Serve para quem nunca correu?",
    a: "Serve, e é onde a gente mais se especializa. O programa para iniciantes te leva do zero ao primeiro 5K com segurança, sem dor desnecessária e com prazer pelo processo.",
  },
  {
    q: "Preciso ter condicionamento prévio?",
    a: "Não. A avaliação inicial define exatamente o seu ponto de partida. A partir dali, a periodização é construída no seu ritmo — literalmente, no seu pace.",
  },
  {
    q: "O treino online funciona de verdade?",
    a: "Funciona. Planilha individualizada, ajustes semanais, integração com Strava e Garmin e contato direto com a técnica. Atendemos atletas em todo o Brasil.",
  },
  {
    q: "Quais são os horários de treino presencial?",
    a: "Parque Barigui: terça e quinta às 7h e 18h30, sábado às 7h. Parque São José: segunda e quarta às 18h30.",
  },
  {
    q: "Como funciona o treino experimental?",
    a: "É gratuito e sem compromisso. Você participa de uma sessão presencial com a turma, conhece o método, a galera e tira todas as suas dúvidas. Agende pelo WhatsApp.",
  },
  {
    q: "Quais são os valores?",
    a: "Os planos variam por modalidade (presencial, online, personalizado). Compartilhamos a tabela completa direto no WhatsApp, após entender o seu objetivo.",
  },
  {
    q: "Onde acontecem os treinos presenciais?",
    a: "Em dois dos parques mais bonitos de Curitiba: Parque Barigui e Parque São José.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-background py-24 md:py-32">
      <div className="container-pace grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Respostas diretas para começar leve.
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Não achou o que procurava? Chama no WhatsApp — a gente responde rapidinho.
          </p>
        </div>

        <ul className="md:col-span-8 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-magenta"
                >
                  <span className="font-display text-lg font-semibold md:text-xl">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all ${
                      isOpen ? "rotate-45 border-magenta bg-magenta text-white" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
