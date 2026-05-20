const ITEMS = [
  "Todo pace importa",
  "Parque Barigui",
  "Treino baseado em ciência",
  "Parque São José",
  "Iniciantes & atletas",
  "Comunidade Pace",
  "Curitiba corre junto",
];

export function Marquee() {
  return (
    <section aria-hidden className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="flex w-max marquee gap-12 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-xl font-medium text-foreground/80 md:text-2xl">
            {t}
            <span className="text-magenta">●</span>
          </span>
        ))}
      </div>
    </section>
  );
}
