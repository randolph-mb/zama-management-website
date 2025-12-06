import Image from 'next/image';
import Link from 'next/link';

export default function LeistungenPage() {
  return (
    <main className="pt-20 bg-[#ebe8e1]">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Video */}
        <video
          src="/assets/videos/seminare_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-light italic leading-tight">
            Fokus entsteht,<br />
            wenn Prozesse halten.
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">

            {/* Service 1: Externe Abrechnung */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/service_abrechnung.jpg"
                  alt="Person im weißen Kittel mit Mappe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  Externe Abrechnung
                </h2>
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  Das passende Modell für Deine Zahnarztpraxis
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Du suchst Unterstützung in der externen Abrechnung? Kein Problem. Wir unterstützen dich im Bereich der zahnärztlichen Abrechnung. Über Softwareanwender-Tipps zu Themen, Rabatt-Charts, ZE-Therapieplan sowie 2-Jahres-Ziel, lassen wir dich nie mit der Deine Praxis zu erstellen sondern, dein Programm auch nachhaltig aufzubauen. Wir begleiten dich bei Optimierungen der Abrechnungsabläufe und Deiner Zusammenarbeit weiter. Nach einem gemeinsamen Mentoring und einer Bedarfsanalyse schaffen wir dir das individuelle Abrechnungskonzept. Du findest das 4-Wochenplan und wir die Abrechnung.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center text-[#4a90e2] font-semibold hover:underline"
                >
                  Wann starten wir? →
                </Link>
              </div>
            </div>

            {/* Service 2: Hygiene- und Praxismanagement */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/service_hygiene.jpg"
                  alt="Hände in Handschuhen formen ein Herz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  Hygiene- und Praxismanagement
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Wie die Zahnräder in einem Uhrwerk sind Sauberkeit, Gefährdungsbeurteilung, Checklisten und Behandlungsabläufe nur ein Teil des Hygiene- und Praxismanagements. Wir nehmen dich an die Hand und gestalten das QM-Handbuch, umsetzbar und praxisnah. Bildung im QM kann Ordner auf dem Desktop sondern darf gelebt werden.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center text-[#4a90e2] font-semibold hover:underline"
                >
                  Wann starten wir? →
                </Link>
              </div>
            </div>

            {/* Service 3: Team- und Führungskräftetraining */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/service_training.jpg"
                  alt="Hände halten ein Netzwerk aus Fäden"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  Team- und Führungskräfte-training
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Jede erfolgreiche Zahnarztpraxis braucht einen Mentor. In einer immer schwerer werdenden Welt heben wir den Fokus auf das wesentliche: Teamarbeit auf der Praxis. Wir heben die Führungsqualitäten auch aus dir. Teamentwicklung ist ein Schwerpunkt entwickelt, welches auch Führung auf das Gesamt-Blicken kann. Unser Führungskräfte-Coaching richtet sich an Führungskräfte für deine PM oder dich. Wir entwickeln den individuellen Fahrplan speziell auf Schritt-Praxiskonzept.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center text-[#4a90e2] font-semibold hover:underline"
                >
                  Wann starten wir? →
                </Link>
              </div>
            </div>

            {/* Service 4: Dein Neustart */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img/service_neustart.jpg"
                  alt="Weiße Blume in Glasvase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  Dein Neustart
                </h2>
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  Wir sind Deine Wegbegleiter zu Deiner Praxis
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Du wünschst dir gerade bei deinem beruflich wichtigen Schritt als Niederlassungsinhaber, alles an die Dinge zu denken? Kauf anstehen und keine Unterstützung? Wir begleiten dich bei der Umsetzung deiner Praxisideen. Unsere Praxisberater begleiten auf sich bei deinem Weg zur Neugründung, Praxisübernahme oder in deinem Veränderungsprozess (Relocation). Unsere Zusammenarbeit dauer mehr als Monate. In regelmäßigen Terminen besprechen wir Quelle Aufgaben und gehen gemeinsam die die Umsetzung seiner Themen.
                </p>
                <div className="space-y-2">
                  <p className="text-base text-gray-700">
                    <span className="text-[#4a90e2] font-semibold">Beratung & Unterstützung</span> bei der Integration, Nutzung & Optimierung deiner Praxissoftware
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="text-[#4a90e2] font-semibold">Ausarbeitung</span> deiner Therapiekonzepte
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="text-[#4a90e2] font-semibold">Anwendungsstrategien</span>
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="text-[#4a90e2] font-semibold">Personalkonzepte</span>
                  </p>
                  <p className="text-base text-gray-700">
                    <span className="text-[#4a90e2] font-semibold">Start-up und Betriebs-Controlling</span>
                  </p>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Im ersten Gespräch finden wir heraus, was du wirklich brauchst für deine individuelle Situation. Darauf aufbauend erstellen wir den Praxisfahrplan für unsere Zusammenarbeit, welches deinen Praxisalltag sicher mehr im Wege steht.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center text-[#4a90e2] font-semibold hover:underline"
                >
                  Wann starten wir? →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light italic text-[var(--color-text)] mb-8">
            Denn Erfolg bedeutet für uns,<br />
            andere erfolgreich zu machen.
          </h2>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-3 rounded bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] transition font-semibold"
          >
            KONTAKT
          </Link>
        </div>
      </section>
    </main>
  );
}
