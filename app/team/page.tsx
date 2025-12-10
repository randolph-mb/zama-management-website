import Image from 'next/image';

interface TeamMember {
  label: string;
  name: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    label: "DER KOPF",
    name: "Anja",
    image: "/assets/Team/Zama_Management_Anja_Gutzmer_Web_4b812162b8.jpg",
    description: "Ich arbeite seit über 20 Jahren im Bereich der Zahnmedizin. Durch eine unermüdliche Wissensgier bin ich in allen Bereichen der Praxis bereits fort- und ausgebildet. Mein Schwerpunkt steht für die externer Abrechnung und Praxisorganisation sowie Praxisführung. Ich lege dabei meinen Schwerpunkt auf die ganzheitliche Unterstützung, sprich die Abdeckung aller Bereiche in einer Zahnarztpraxis.\n\nIch bin ein wertschätzender und empathischer Mensch mit einer gesunden Portion Energie. Zeitgleich liebe ich die Natur und Meditation sowie Achtsamkeit. Für mich gibt es keine klare Trennung zwischen Beruf und Privat, sodass ich meine Lebenseinstellung „Einklang im Alltag“ gern in unsere Zusammenarbeit miteinbringe."
  },
  {
    label: "BEREICH EXTERNE ABRECHNUNG | PRAXISMANAGEMENT",
    name: "Madlin",
    image: "/assets/Team/Zama_Management_Madlin_Web_9670a4fe92.jpg",
    description: "Ich bin 33 Jahre alt und arbeite bei ZAMA Management, weil es mehr als eine Firma ist: wir sind eine Unternehmensfamilie, die gemeinsam Ziele setzt und erreicht!\n\nDurch Transparenz und Kompetenz können wir dich und dein Team in praxisbezogenen Angelegenheiten unterstützen und stärken! Wir würden uns freuen, mit dir gemeinsam zu wachsen, zu optimieren und groß zu werden!"
  },
  {
    label: "BEREICH EXTERNE ABRECHNUNG",
    name: "Sabine",
    image: "/assets/Team/Zama_Management_Sabine_Web_7cf3623b8d.jpg",
    description: "Ich habe meine Ausbildung zur zahnmedizinischen Fachangestellten 2004 erfolgreich abgeschlossen. 17 Jahre arbeitete ich in einer Zahnarztpraxis im Bereich Behandlung, Abrechnung und HKP Erstellung. Meine Freude an der Abrechnung wurde durch die Weiterbildung, als Abrechnungsmanagerin um einen hohes Fachwissen erweitert.\n\nZAMA steht für ganzheitliche und freundliche Zusammenarbeit, welche mir persönlich sehr am Herzen liegt. Somit war es für mich an der Zeit in einem familiären und kompetenten Team auch weitere Praxen in der Abrechnung zu unterstützen."
  },
  {
    label: "EXTERNE ABRECHNUNG",
    name: "Luise",
    image: "/assets/Team/Zama_Management_Luisa_Web_bee5cab88d.jpg",
    description: "2018 habe ich meine Ausbildung zur Zahnmedizinischen Fachangestellten erfolgreich abgeschlossen und seit 2022 habe ich stolz die gelungene Aufstiegsfortbildung Abrechnungsmanagerin in der Tasche. Ich habe schon in vielen Bereichen der Zahnmedizin positiv mitwirken dürfen: Stuhlassistenz, Rezeption, Abrechnung und Hygienemanagement sind im besonderem hervorzuheben.\n\nZama gibt mir die Möglichkeit, die Freude an der Abrechnung vollständig zu erleben und einzusetzen sowie weiter zu entwickeln. Ich erfahre die wertvolle Tatsache niemals stehen zu bleiben sondern immer aktiv dazu zu lernen zugleich anwenden zu können.\n\nMein Vorhaben ist, Praxen zur Seite zu stehen und zu entlasten, damit der Praxisalltag so stressfrei, so vorbereitet und so harmonisch wie möglich ablaufen kann.\n\nDer Weg zu Zama war Schicksal und ich bin voller Euphorie für unser Sein. Ein unfassbar gutes Gefühl im Beruf und Team so angekommen zu sein."
  },
  {
    label: "EXTERNE ABRECHNUNG",
    name: "Stephanie",
    image: "/assets/Team/Zama_Management_Stephanie_Kruse_Web_90bb763c6a.jpg",
    description: "Meine Ausbildung zur Zahnmedizinischen Angestellten habe ich 2010 erfolgreich abgeschlossen. 2022 absolvierte ich meine Zusatzqualifikation als Abrechnungsmanagerin, in mir erwachte die Leidenschaft zur Abrechnung und nach 14 Jahren in einer Zahnarztpraxis folgte ich meinem Ruf in die externe Abrechnung.\n\nIm Team Zama habe ich die Möglichkeit gefunden, meiner Leidenschaft voll und ganz nach zu gehen. Ich freue mich Zahnarztpraxen ganzheitlich im Bereich der Abrechnung, des Qualitätsmanagements und des Hygienemanagements zu unterstützen.\n\nDas Team Zama ist meine 2. Familie mit Freundlichkeit, Herzlichkeit, sowie Teamwork wurde ich in das bestehende Team aufgenommen und freue mich auf den gemeinsamen Weg."
  },
  {
    label: "EXTERNE ABRECHNUNG",
    name: "Nicole",
    image: "/assets/Team/Zama_Management_Ild_Web_cdfdf5acf3.jpg",
    description: "Ich habe 2004 erfolgreich meine Ausbildung zur Zahnmedizinischen Fachangestellten abgeschlossen und war bis 2022 in niedergelassenen Praxen tätig. Ich habe in der Assistenz gearbeitet und spezialisierte mich später auf die Prophylaxe und dann auf den Dschungel der Abrechnung.\n\nNach vielen Fortbildungen und den erfolgreichen Abschluss zur Abrechnungsmanagerin, habe ich den Schritt in die externe Abrechnung gewählt, um mich zu 100% auf die Abrechnung zu konzentrieren und die Praxen zu unterstützen.\n\n2024 führte mein Weg zur Betriebswirtin für zahnärztliche Abrechnung und die offene Tür zu Zama. Zama bedeutet Unterstützung, Zusammenhalt, hohe fachliche Kompetenz, lösungsorientiert, Freundlichkeit, Optimierung und jede menge Spaß. Die Wertschätzung und familiäre Zusammenarbeit im Team und mit den Praxen, sind einzigartig und extrem wertvoll."
  }
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Team/Zama_Team_by_Christoph_Neumann_ff76fb917d.webp"
            alt="Team Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1
            className="text-[var(--color-text-white)] font-light italic"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.3' }}
          >
            Wir sind ganzheitlich für dich da.
          </h1>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[var(--background)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-20 md:space-y-32">
            {teamMembers.map((member, index) => {
              // Determine if this is an even or odd index (0-based)
              // Even index (0, 2, 4): Image LEFT, Text RIGHT
              // Odd index (1, 3, 5): Image RIGHT, Text LEFT
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 md:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] w-full max-w-md md:w-1/2 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center space-y-4 md:space-y-6 md:w-1/2">
                    <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase font-oswald">
                      {member.label}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)]">
                      {member.name}
                    </h2>
                    {/* Split description into paragraphs and render with spacing */}
                    <div className="space-y-5 md:space-y-6 mt-2">
                      {member.description.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base md:text-lg leading-[1.75] text-[#2a2a2a]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
