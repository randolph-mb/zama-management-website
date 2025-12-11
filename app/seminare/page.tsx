'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Heading, Text, Button } from '@/components/ui';
import { ROUTES } from '@/lib/constants';
import { seminars, currentEvent, Seminar } from '@/data/seminars';



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
    <main className="min-h-screen">

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
                      src="/assets/seminare/Zama-Management Seminare. Jetzt informieren..mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
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
              src={currentEvent.video}
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content - Left Aligned in Container */}
            <Container size="xl" className="relative z-10 w-full">
              <div className="text-left text-white max-w-4xl">
                <p className="text-lg md:text-xl font-bold uppercase tracking-widest mb-3">
                  {currentEvent.badge}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {currentEvent.title}
                </h2>
                <p className="text-xl md:text-2xl font-light mb-8">
                  {currentEvent.dateLocation}
                </p>
                <Button
                  size="lg"
                  className="bg-[#1a1a1a] text-white hover:bg-black border-none px-8 py-4 text-lg rounded-full"
                >
                  {currentEvent.buttonText}
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
                  autoPlay
                  muted
                  loop
                  playsInline
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
                      {seminar.shortDescription}
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
                  {selectedSeminar.fullDescription}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Dauer:</span>
                    <span>{selectedSeminar.details.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Preis:</span>
                    <span>{selectedSeminar.details.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-20">Format:</span>
                    <span>{selectedSeminar.details.format}</span>
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
                />
              </div>
            </div>
          </Container>
        </section>
      )}

    </main>
  );
}
