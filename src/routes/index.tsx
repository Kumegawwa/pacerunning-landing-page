import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/pace/Header";
import { Hero } from "@/components/pace/Hero";
import { Marquee } from "@/components/pace/Marquee";
import { About } from "@/components/pace/About";
import { Services } from "@/components/pace/Services";
import { Method } from "@/components/pace/Method";
import { Differentials } from "@/components/pace/Differentials";
import { SocialProof } from "@/components/pace/SocialProof";
import { Gallery } from "@/components/pace/Gallery";
import { FinalCTA } from "@/components/pace/FinalCTA";
import { Faq } from "@/components/pace/Faq";
import { Footer } from "@/components/pace/Footer";
import { WhatsAppFloat } from "@/components/pace/WhatsAppFloat";

const SITE_DESC =
  "Assessoria de corrida em Curitiba para iniciantes e atletas. Treino personalizado, baseado em ciência, no Parque Barigui e Parque São José.";

const LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pace Running Curitiba",
  description: SITE_DESC,
  image: "/og-pace.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: "Curitiba",
  url: "/",
  sameAs: ["https://instagram.com/pacerunningcuritiba"],
  priceRange: "$$",
  makesOffer: [
    { "@type": "Offer", name: "Corrida para iniciantes" },
    { "@type": "Offer", name: "Treino de performance" },
    { "@type": "Offer", name: "Preparação para meia maratona" },
    { "@type": "Offer", name: "Preparação para maratona" },
    { "@type": "Offer", name: "Planilhas online de corrida" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pace Running Curitiba — Assessoria de corrida premium" },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "assessoria de corrida em Curitiba, treino Parque Barigui, corrida Parque São José, planilhas de corrida, corrida para emagrecimento, meia maratona, maratona Curitiba" },
      { property: "og:title", content: "Pace Running Curitiba — Assessoria de corrida premium" },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FF0660" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Method />
      <Differentials />
      <SocialProof />
      <Gallery />
      <FinalCTA />
      <Faq />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}