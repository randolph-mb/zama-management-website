import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VideoSection() {
    const services = [
        { title: 'Externe Abrechnung', href: '/leistungen' },
        { title: 'Team- und Führungskräftetraining', href: '/leistungen' },
        { title: 'Hygiene- und Praxismanagement', href: '/leistungen' }
    ];

    return (
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--background) 0% 40%, var(--foreground) 40% 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden shadow-xl">
                    {/* Background Video */}
                    <video
                        src="/assets/videos/seminare_video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-800/15"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center md:justify-start p-2 md:p-8">
                        <div className="rounded-lg p-2 md:p-6 max-w-lg text-center md:text-left">
                            <h2 className="text-[var(--color-text-white)] mb-4 font-bold" style={{ fontSize: 'clamp(2rem, 4.8vw, 2.4rem)' }}>
                                Mehr als Beratung – Dein Praxisbegleiter
                            </h2>
                            <p className="text-[var(--color-text-white)] mb-3">
                                Erfahre mehr über unser Leistungsangebot:
                            </p>

                            {/* Desktop: List with arrows */}
                            <ul className="space-y-4 text-[var(--color-text-white)] list-none pl-0 hidden md:block">
                                {services.map((service, index) => (
                                    <li key={index} className="leading-relaxed flex items-center">
                                        <Link href={service.href} className="font-bold hover:text-[var(--color-accent)] transition">
                                            {service.title}
                                        </Link>
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile: Button */}
                            <div className="md:hidden flex justify-center">
                                <Link
                                    href="/leistungen"
                                    className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Leistungen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
