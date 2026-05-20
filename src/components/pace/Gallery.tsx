import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export function Gallery() {
  return (
    <section className="relative bg-mist py-24 md:py-32">
      <div className="container-pace">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-magenta">Lifestyle</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              O nascer do dia tem nome em Curitiba.
            </h2>
          </div>
          <p className="max-w-sm text-base text-muted-foreground">
            Suor, medalha, parque, comunidade. Fotos reais da nossa galera.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-3 md:gap-4">
          <figure className="col-span-12 md:col-span-5 row-span-2">
            <img src={g1} alt="Atleta em performance" loading="lazy" width={900} height={1200}
              className="h-full max-h-[640px] w-full rounded-2xl object-cover" />
          </figure>
          <figure className="col-span-6 md:col-span-7">
            <img src={g2} alt="Tênis de corrida no asfalto ao amanhecer" loading="lazy" width={1200} height={900}
              className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </figure>
          <figure className="col-span-6 md:col-span-4">
            <img src={g5} alt="Tecnologia no pulso do atleta" loading="lazy" width={900} height={900}
              className="aspect-square w-full rounded-2xl object-cover" />
          </figure>
          <figure className="col-span-12 md:col-span-3">
            <img src={g4} alt="Vista aérea do treino no Parque Barigui" loading="lazy" width={900} height={1200}
              className="aspect-[3/4] w-full rounded-2xl object-cover md:aspect-auto md:h-full" />
          </figure>
          <figure className="col-span-12 md:col-span-12">
            <img src={g3} alt="Comunidade Pace celebrando após prova" loading="lazy" width={1920} height={1080}
              className="aspect-[16/8] w-full rounded-2xl object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
