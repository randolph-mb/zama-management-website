import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function LeistungenPage() {
  const services = [
    {
      title: 'Externe Abrechnung',
      subtitle: 'Das passende Modell für Deine Zahnarztpraxis',
      description: 'Wir übernehmen die komplette Abrechnung für deine Praxis. Von der Rechnungsstellung bis zur Zahlungsüberwachung – alles aus einer Hand. So hast du mehr Zeit für deine Patienten.',
      image: '/assets/img/service_abrechnung.jpg',
      alt: 'Person im weißen Kittel mit Mappe'
    },
    {
      title: 'Hygiene- und Praxismanagement',
      subtitle: 'Wie die Zahnräder in einem Uhrwerk',
      description: 'Effiziente Prozesse sind das Herzstück einer erfolgreichen Praxis. Wir optimieren dein Hygiene- und Praxismanagement für reibungslose Abläufe und höchste Qualität.',
      image: '/assets/img/service_hygiene.jpg',
      alt: 'Hände in Handschuhen formen ein Herz'
    },
    {
      title: 'Team- und Führungskräftetraining',
      subtitle: 'Gemeinsam stark',
      description: 'Ein motiviertes Team ist der Schlüssel zum Erfolg. Unsere Trainings stärken die Zusammenarbeit, verbessern die Kommunikation und entwickeln Führungskompetenzen.',
      image: '/assets/img/service_training.jpg',
      alt: 'Hände halten ein Netzwerk aus Fäden'
    },
    {
      title: 'Dein Neustart',
      subtitle: 'Frischer Wind für deine Praxis',
      description: 'Manchmal braucht es einen Neuanfang. Wir begleiten dich bei der Neuausrichtung deiner Praxis – von der Strategie bis zur Umsetzung.',
      image: '/assets/img/service_neustart.jpg',
      alt: 'Weiße Blume in Glasvase'
    }
  ];

  return (
    <main className="pt-20">
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image - Always Left */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content - Always Right */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
                    {service.title}
                  </h2>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">
                    {service.subtitle}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center text-[var(--color-accent)] font-semibold hover:underline"
                  >
                    Wann starten wir? →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f5f5f5]">
        {/* Text & Contact Info */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                Der erste Eindruck zählt und der letzte bleibt.
              </h2>
              <p className="text-lg text-gray-700">
                Wir freuen uns sehr auf ein gemeinsames Kennenlernen und darauf, deine Praxis auf dem Weg zum Erfolg zu begleiten.
              </p>
            </div>

            {/* Right: Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                <Link
                  href="mailto:help@zama-management.de"
                  className="text-lg hover:text-[var(--color-accent)] transition"
                >
                  help@zama-management.de
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                <Link
                  href="tel:0174-1729510"
                  className="text-lg hover:text-[var(--color-accent)] transition"
                >
                  0174 - 172 9510
                </Link>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[var(--color-accent)] mt-1" />
                <div>
                  <p className="text-lg">Zama Management GmbH & Co. KG</p>
                  <p className="text-lg">Kochgasse 7</p>
                  <p className="text-lg">06925 Annaburg, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Golden Phone Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/assets/img/golden_phone.jpg"
            alt="Goldenes Wählscheiben-Telefon"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
