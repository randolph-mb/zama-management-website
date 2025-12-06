'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimonials } from '@/data';
import { Container, Heading, Text } from '@/components/ui';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-[var(--foreground)]">
      <Container size="sm" className="text-center">
        <div className="relative transition-all duration-500">
          <div className="bg-[var(--foreground)] p-6 rounded-lg text-center transition-opacity duration-500">
            <Heading
              level="h3"
              className="text-[var(--color-text-white)] text-xl md:text-2xl font-light italic mb-6"
            >
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </Heading>
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
                <Text
                  size="base"
                  weight="semibold"
                  color="white"
                  className="text-[var(--color-text-white)]"
                >
                  {testimonials[activeIndex].name}
                </Text>
                <Text
                  size="sm"
                  weight="normal"
                  color="white"
                  className="text-[var(--color-text-white)] font-light"
                >
                  {testimonials[activeIndex].company}
                </Text>
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
              className={`h-3 w-3 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-[var(--background)] scale-125'
                  : 'bg-[var(--background)]/30'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
