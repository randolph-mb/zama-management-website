import Image from 'next/image';

interface Service {
    icon: string;
    title: string;
    color: string;
}

export default function ServicesSection() {
    const services: Service[] = [
        {
            icon: '/assets/img/icon_yellow.png',
            title: 'Externe Abrechnung',
            color: 'border-[var(--color-primary)]'
        },
        {
            icon: '/assets/img/icon_lavender.png',
            title: 'Hygiene- und Praxismanagement',
            color: 'border-[var(--color-primary)]'
        },
        {
            icon: '/assets/img/icon_green.png',
            title: 'Team- und Führungskräftetraining',
            color: 'border-[var(--color-primary)]'
        }
    ];

    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-10 bg-[var(--background)] flex flex-col items-center text-center ${index > 0 ? 'border-t-1 sm:border-t-0 sm:border-l-1 ' + service.color + ' pt-8 sm:pt-10 sm:pl-8' : ''
                            }`}
                    >
                        <div className="mb-7 relative w-24 h-32">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h4 className="text-[var(--color-text)] text-xl font-semibold">
                            {service.title}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
