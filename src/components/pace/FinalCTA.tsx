import { SITE } from "@/lib/site";
import bg from "@/assets/cta-background.jpg";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-white md:py-36">
      <img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-deep/70 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_50%,color-mix(in_oklab,var(--magenta)_30%,transparent),transparent_75%)]" />

      <div className="container-pace text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-magenta">A sua próxima largada</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-balance">
          Comece hoje a construir
          <span className="block text-magenta">a sua melhor versão.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base text-white/80 md:text-lg">
          Um treino experimental. Zero compromisso. Tudo o que você precisa para entender
          por que mais de mil atletas escolheram correr com a Pace.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-9 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Falar no WhatsApp
            <span aria-hidden>→</span>
          </a>
          <a
            href="#faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Tirar dúvidas
          </a>
        </div>
      </div>
    </section>
  );
}
