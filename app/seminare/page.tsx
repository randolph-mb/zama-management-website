'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Heading, Text, Button } from '@/components/ui';
import { ROUTES } from '@/lib/constants';

interface Seminar {
  title: string;
  text: string;
  image: string;
}

const seminars: Seminar[] = [
  {
    title: "Praxischeck - Potentialfindung",
    text: "Durchschnittlich 25-30% der Honorare geht durch fehlende Dokumentation verloren...",
    image: "/assets/seminare/Praxischeck/Zama_Seminare_1_by_Christoph_Neumann_Hochformat_ffb4932a68.webp"
  },
  {
    title: "Alles Endo oder was?",
    text: "Ein großer Stellenwert in der Praxis hat oftmals die Endodontische Behandlung.",
    image: "/assets/seminare/alles endo/3_Zama_Seminare_by_Christoph_Neumann_Kopie_2214f0ff0b.webp"
  },
  {
    title: "ZE Richtlinien: Nach der Krone ist vor der Krone!",
    text: "Gesamtplanung vs. Vorbehandlung. Worauf kommt es bei einer ZE Planung an...",
    image: "/assets/seminare/ze richtlinien/7_Zama_Seminare_by_Christoph_Neumann_Kopie_ae07299d73.webp"
  },
  {
    title: "Die Zeit danach: 2 Jahre PA! Und dann?",
    text: "Was passiert wenn die 2 Jahresfrist der PAR Therapie vorbei ist...",
    image: "/assets/seminare/die zeit danach/4_Zama_Seminare_by_Christoph_Neumann_Kopie_1645c5c1e4.webp"
  },
  {
    title: "Von der Katze zum Löwen",
    text: "Die Führungskraft ist der Fluglotse in der Zahnarztpraxis.",
    image: "/assets/seminare/von der katze zu Löwen/Zama_Workshops_Neu_Sanduhr_Christoph_neumann_70ee7c038b.webp"
  },
  {
    title: "Vom Hamsterrad zum Yogafrosch",
    text: "Ein Unternehmen zu führen ist fast so wie 'Eltern' werden...",
    image: "/assets/seminare/vom Hamsterrad/1_Zama_Seminare_by_Christoph_Neumann_Kopie_a700eb8b50.webp"
  },
  {
    title: "Die Macht der Worte",
    text: "Kommunikationstraining für dich und dein Team...",
    image: "/assets/seminare/die Macht der Worte/6_Zama_Seminare_by_Christoph_Neumann_Kopie_a055d1443a.webp"
  },
  {
    title: "Ein bunt gewürfelter Haufen",
    text: "Eine Veränderung des Teams kann ganz unterschiedliche Ursachen haben...",
    image: "/assets/seminare/ein bunt gewürfter/Zama_Seminare_8_by_Christoph_Neumann_09c4b222fb.webp"
  },
  {
    title: "Fit für die Praxisbegehung",
    text: "Dir steht eine Praxisbegehung bevor oder du möchtest dein Hygienemanagement optimal gestalten?",
    image: "/assets/seminare/fit für die Praxisbegegnung/9_Zama_Seminare_by_Christoph_Neumann_Hochformat_Neu_1_6a7e2a6c55.webp"
  },
  {
    title: "Hygieneschulung für das Praxisteam",
    text: "Wir bringen die Fortbildung in Deine Praxis...",
    image: "/assets/seminare/hygiene Schulung/2_Zama_Seminare_by_Christoph_Neumann_Kopie_d1bbbe2c69.webp"
  }
];

export default function SeminarsPage() {
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);

  const openSeminar = (seminar: Seminar) => {
    setSelectedSeminar(seminar);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeSeminar = () => {
    setSelectedSeminar(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pb-16 min-h-screen">

      {/* Show Overview if no seminar selected */}
      {!selectedSeminar ? (
        <>
          {/* Hero Section - New 3-Column Layout */}
          <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#f2f0e9]">
            <Container size="xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">

                {/* Left Column: Text */}
                <div className="flex-1 text-center md:text-right order-1">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
                    Gemeinsam<br />erfolgreich!
                  </h1>
                </div>

                {/* Middle Column: Video */}
                <div className="flex-none order-2 py-8 md:py-0">
                  <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mx-auto">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="/assets/seminare/Zama-Management Seminare. Jetzt informieren._2.mp4"
                      poster="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>

                {/* Right Column: Text */}
                <div className="flex-1 text-center md:text-left order-3">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
                    Von Z bis A<br />mit ZAMA.
                  </h1>
                </div>

              </div>

              {/* Subline below the 3 columns */}
              <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4">
                <p className="text-xl md:text-3xl font-medium text-black leading-relaxed">
                  Du willst nicht einfach nur gut sein, sondern das Beste aus deiner Praxis herausholen?
                </p>
              </div>
            </Container>
          </section>

          {/* NEW: Netzwerktreffen Video Banner */}
          <section className="relative w-full h-[500px] flex items-center overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/assets/seminare/Zama-Management Seminare. Jetzt informieren._2.mp4"
              poster="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content - Left Aligned in Container */}
            <Container size="xl" className="relative z-10 w-full">
              <div className="text-left text-white max-w-4xl">
                <p className="text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
                  Demnächst!
                </p>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  ZAMA Netzwerktreffen 2025
                </h2>
                <p className="text-xl md:text-2xl font-light mb-8">
                  Am 7. und 8. November im Westin Leipzig
                </p>
                <Button
                  size="lg"
                  className="bg-[#1a1a1a] text-white hover:bg-black border-none px-8 py-4 text-lg rounded-full"
                >
                  SEI DABEI!
                </Button>
              </div>
            </Container>
          </section>

          {/* "Overlap" Video Section (Replacing Banner) */}
          <section className="relative z-20 -mb-32 md:-mb-64 px-4 bg-[#f2f0e9] pb-0 pt-40">
            {/* Added bg-[#f2f0e9] and pt-40 to create distinct beige spacing between sections */}
            {/* Increased negative margin to -mb-64 to center video on boundary */}
            <Container size="xl">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/seminare/Zama-Management Seminare. Jetzt informieren._3.mp4"
                  poster="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
                    Entdecke unser gesamtes<br />Seminarangebot.
                  </h2>
                </div>
              </div>
            </Container>
          </section>

          {/* Seminar Grid (Monochromatic Lilac) */}
          <section className="pt-48 md:pt-80 pb-24 bg-[#C9B6D6] relative z-10">
            <Container size="lg">
              {/* Heading */}
              <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                Auf der Suche nach dem passenden Seminar?
              </Heading>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seminars.map((seminar, index) => (
                  <div
                    key={index}
                    onClick={() => openSeminar(seminar)}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col h-full min-h-[300px] group hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                      {seminar.title}
                    </h3>
                    <p className="text-white/90 font-medium mb-8 flex-grow leading-relaxed">
                      {seminar.text}
                    </p>
                    <div className="mt-auto text-right">
                      <span className="text-white font-bold hover:underline flex items-center justify-end gap-2">
                        Details ansehen
                        <span className="text-xl">→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Bottom CTA */}
          <section className="pb-24 text-center bg-[#f2f0e9] pt-24">
            {/* pt-24 added to separate from lilac grid visually or allow seamless transition if needed, 
                 but lilac to beige is a hard cut usually. 
                 Wait, user wanted "seamless" for footer. 
                 If Grid is Lilac, and Footer is Beige. 
                 This CTA is between Grid and Footer. 
                 So CTA should be Beige to match Footer (seamless). 
                 Transition from Lilac Grid to Beige CTA is standard block.
              */}
            <Container size="sm">
              <Heading level="h3" className="mb-6">
                Dein gewünschtes Thema ist nicht dabei oder du möchtest gerne mehr Seminare buchen?
              </Heading>
              <p className="text-xl text-gray-600 mb-8 font-light">
                Dann sprich uns an!
              </p>
              <Link href={ROUTES.CONTACT}>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">KONTAKT</Button>
              </Link>
            </Container>
          </section>
        </>
      ) : (
        /* Detail View */
        <section className="bg-white min-h-[80vh] pt-32">
          {/* Added pt-32 to ensure content not hidden by fixed header in detail view */}
          <Container size="lg">
            <button
              onClick={closeSeminar}
              className="mb-8 text-black hover:text-[#b0a080] font-medium flex items-center gap-2 transition-colors"
            >
              ← Zurück zur Übersicht
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column: Info */}
              <div className="space-y-8">
                <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {selectedSeminar.title}
                </Heading>

                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  {selectedSeminar.text}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Dauer:</span>
                    <span>1 Tag (9:00 - 17:00 Uhr)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Preis:</span>
                    <span>Auf Anfrage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Format:</span>
                    <span>Präsenz-Seminar</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={ROUTES.CONTACT}>
                    <Button size="lg">SEMINAR ANFRAGEN</Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedSeminar.image}
                  alt={selectedSeminar.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={85}
                />
              </div>
            </div>
          </Container>
        </section>
      )}

    </main>
  );
}
