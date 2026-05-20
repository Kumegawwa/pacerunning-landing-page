import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#prova", label: "Atletas" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 text-white ${
        scrolled
          ? "backdrop-blur-xl bg-ink/90 border-b border-white/10 shadow-lg"
          : "bg-ink/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-pace flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5 transition-transform hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Pace Running Curitiba" 
            className="h-10 w-auto object-contain" 
          />
          <span className="font-display text-base font-semibold tracking-tight md:text-lg">
            Pace Running<span className="text-magenta">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-magenta"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-magenta hover:text-white hover:scale-[1.02]"
          >
            Treino experimental
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl">
          <div className="container-pace flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-magenta px-5 py-3 text-sm font-semibold text-white"
            >
              Agendar treino experimental
            </a>
          </div>
        </div>
      )}
    </header>
  );
}