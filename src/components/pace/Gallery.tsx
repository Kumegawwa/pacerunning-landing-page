import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export function Gallery() {
  const IMAGES = [
    { src: gallery1, alt: "Atletas da Pace Running no Parque Barigui" },
    { src: gallery2, alt: "Aquecimento matinal e preparação" },
    { src: gallery3, alt: "Equipe reunida e senso de comunidade" },
    { src: gallery4, alt: "Foco e performance na pista" },
    { src: gallery5, alt: "Lifestyle de corrida urbana" },
  ];

  return (
    <section id="lifestyle" className="relative bg-background py-24 md:py-32">
      <div className="container-pace">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Lifestyle</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            O nascer do dia tem nome em Curitiba.
          </h2>
        </div>

        {/* Grid rígido com aspect-[4/5] para forçar alinhamento perfeito de todas as fotos */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {IMAGES.map((img, idx) => (
            <figure 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/5]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}