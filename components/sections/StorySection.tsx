import Image from 'next/image';

export default function StorySection() {
    return (
        <section className="bg-[var(--foreground)] py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="w-full h-auto relative aspect-[3/4]">
                    <Image
                        src="/assets/img/Zama_Brueckenbauer_by_Christoph_Neumann_Kopie_be1bb1a863.webp"
                        alt="Brückenbauer"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="bg-[var(--foreground)] p-8 md:p-12">
                    <h2 className="text-[var(--color-text-white)] text-4xl md:text-5xl mb-8 font-bold">
                        Brückenbauer
                    </h2>
                    <div className="text-[var(--color-text-white)] text-base md:text-lg leading-relaxed space-y-4">
                        <p>
                            Wie der Aufbau eines defekten Zahns, liegt die Struktur für aufbauende Prozesse im Bereich der Abrechnung, betriebswirtschaftlichen Kalkulationen, Personalführung, Optimierung einzelner Arbeitsabläufe, Neugestaltung und dessen Implementierung in deinen Händen. Doch ist neben den Behandlungszeiten und der Patientenbetreuung noch Platz dafür?
                        </p>
                        <p>
                            Lass uns die Brücke gemeinsam bauen: Wir unterstützen dich beim Voranbringen deiner Praxisziele. Wir betrachten Deine Praxis nicht durch ein Schlüsselloch, unser Betrachtungswinkel ist umfassend und bezieht Patient, Mitarbeiter und Praxisinhaber mit ein. Dadurch gelingt ein dauerhafter und langfristiger Erfolg zu unserem gemeinsamen Ziel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
