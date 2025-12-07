import Image from 'next/image';
import { Container, Heading, Text } from '@/components/ui';

interface ServiceBlock {
  headline: string;
  subline?: string;
  text: string;
  image: string;
  alt: string;
}

const services: ServiceBlock[] = [
  {
    headline: "Externe Abrechnung",
    subline: "Das passende Modell für Deine Zahnarztpraxis",
    text: "Du suchst Unterstützung in der externen Abrechnung? Kein Problem. Wir bieten dir maßgeschneiderte Lösungen, die genau auf die Bedürfnisse deiner Praxis zugeschnitten sind. Von der Optimierung bestehender Prozesse bis hin zu individuellen Abrechnungspaketen – wir sorgen dafür, dass deine Abrechnung effizient, korrekt und stressfrei abläuft, damit du dich voll und ganz auf deine Patienten konzentrieren kannst.",
    image: "/assets/Leistungen/zama_business_d7f2e538d7.jpg",
    alt: "Externe Abrechnung - Business Mappe"
  },
  {
    headline: "Hygiene- und Praxismanagement",
    subline: "Wie die Zahnräder in einem Uhrwerk...",
    text: "Gefährdungsbeurteilung, Checklisten, Verfahrensanweisungen – oft klingen diese Begriffe trocken und bürokratisch. Doch wir nehmen dich an die Hand und gestalten das Qualitätsmanagement lebendig und praxisnah. Gemeinsam entwickeln wir Strukturen, die nicht nur den Vorschriften entsprechen, sondern deinem Team Sicherheit geben und den Praxisalltag spürbar erleichtern.",
    image: "/assets/Leistungen/5_Zama_Leistungen_by_Christoph_Neumann_Kopie_a437518aa8.webp",
    alt: "Hygiene Management - Herz aus Händen"
  },
  {
    headline: "Team- und Führungskräftetraining",
    text: "Jede erfolgreiche Führungskraft braucht einen Mentor, um über sich hinauszuwachsen. Wir haben für Führungskräfte aber auch für Teams ein spezielles Seminarangebot entwickelt, das Kommunikation, Zusammenhalt und Leadership stärkt. Denn ein starkes Team ist das Fundament jeder erfolgreichen Praxis.",
    image: "/assets/Leistungen/4_Zama_Leistungen_by_Christoph_Neumann_Kopie_ece67f5411 (1).webp",
    alt: "Team Training - Hände und Netz"
  },
  {
    headline: "Dein Neustart",
    subline: "Wir sind Deine Wegbegleiter zu Deiner Praxis",
    text: "Du wünschst dir gerade bei deinem beruflich wichtigsten Schritt einen Wegbegleiter? Eine Neugründung oder Übernahme ist eine spannende Reise mit vielen Herausforderungen. Wir bieten dir Beratung & Unterstützung bei der Integration, Standortanalyse und Teamfindung, damit dein Start in die Selbstständigkeit von Anfang an ein Erfolg wird.",
    image: "/assets/Leistungen/1_Zama_Leistungen_by_Christoph_Neumann_8d5772f615 (1).webp",
    alt: "Neustart - Weiße Blume"
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/assets/Leistungen/Zama_Leistungen_by_Christoph_Neumann_1_cb26fc39d0.webp"
          alt="Leistungen Hero - Fokus entsteht"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-4">
          <Heading level="h1" className="text-white text-4xl md:text-6xl lg:text-7xl font-bold italic leading-tight drop-shadow-lg">
            Fokus entsteht,<br />
            wenn Prozesse halten.
          </Heading>
        </div>
      </section>

      <div className="py-24 md:py-32 space-y-24 md:space-y-40">
        {services.map((service, index) => (
          <section key={index} className="w-full">
            <Container size="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Image Column - Always Left on Desktop */}
                <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-sm order-1 md:order-1">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Column - Always Right on Desktop */}
                <div className="flex flex-col justify-center space-y-6 order-2 md:order-2">
                  <Heading level="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {service.headline}
                  </Heading>

                  {service.subline && (
                    <Text size="xl" weight="medium" className="text-gray-500 italic">
                      {service.subline}
                    </Text>
                  )}

                  <Text size="lg" className="text-gray-700 leading-relaxed font-light">
                    {service.text}
                  </Text>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </main>
  );
}
