'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
    id: string;
    name: string;
    quote: string;
    company: string;
    image: string;
}

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Jena',
            quote: 'Wir arbeiten seit einiger Zeit mit Anja und Ihrem Team zusammen. Zama unterstützt uns im Bereich der externen Abrechnung und Praxisschulungen hinsichtlich Optimierung. Das gesamte Team von ZAMA arbeitet lösungsorientiert, Anja ist ein absoluter Herzmensch, hat immer gute Laune und ein sehr gutes Netzwerk wovon alle profitieren.',
            company: 'Praxis Mundwerk',
            image: '/assets/img/testimonial_avatar.jpg'
        },
        {
            id: '2',
            name: 'Rosenheim',
            quote: 'Als Neugründer hatte ich von Anja Unterstützung im Bereich Mentoring. Sie hat mich bei der Einführung und Umsetzung des Personalmanagements unterstützt und betreut mich und das gesamte Team weiterhin bei Anstehenden Veränderungen. Man merkt wie sehr Anja Ihre Arbeit liebt und mit Ihrer empathischen Art schnell und guten Anschluss zum Gesamten Team herstellt. Ich danke Ihr für die vielen Stolpersteine, die wir schon gemeinsam aus dem Weg geschafft haben.',
            company: 'Die Feilnbacher Zahnärzte',
            image: '/assets/img/testimonial_avatar.jpg'
        }
    ];

    return (
        <section className="py-20 bg-[var(--foreground)]">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <div className="relative transition-all duration-500">
                    <div className="bg-[var(--foreground)] p-6 rounded-lg text-center transition-opacity duration-500">
                        <h3 className="text-[var(--color-text-white)] text-xl md:text-2xl font-light italic mb-6">
                            "{testimonials[activeIndex].quote}"
                        </h3>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--color-text-white)]">
                                    {testimonials[activeIndex].name}
                                </p>
                                <p className="text-sm text-[var(--color-text-white)] font-light">
                                    {testimonials[activeIndex].company}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="mt-6 flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-3 w-3 rounded-full transition-all ${index === activeIndex
                                    ? 'bg-[var(--background)] scale-125'
                                    : 'bg-[var(--background)]/30'
                                }`}
                            aria-label={`Testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
