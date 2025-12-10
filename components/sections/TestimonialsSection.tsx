'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimonials } from '@/data';
import { Container, Heading, Text } from '@/components/ui';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[var(--foreground)]">
      <Container size="sm" className="text-center px-4 sm:px-6">
        <div className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center">
          <div
            className={`w-full transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
          >
            <div className="bg-[var(--foreground)] p-4 sm:p-6 rounded-lg text-center">
              <Heading
                level="h3"
                className="text-[var(--color-text-white)] text-lg sm:text-xl md:text-2xl font-light italic mb-6 sm:mb-8 leading-relaxed"
              >
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </Heading>
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-110">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <Text
                    size="base"
                    weight="semibold"
                    color="white"
                    className="text-[var(--color-text-white)] text-sm sm:text-base"
                  >
                    {testimonials[activeIndex].name}
                  </Text>
                  <Text
                    size="sm"
                    weight="normal"
                    color="white"
                    className="text-[var(--color-text-white)] font-light text-xs sm:text-sm"
                  >
                    {testimonials[activeIndex].company}
                  </Text>
                </div>
              </div>

              {/* Navigation Dots - positioned below name/company */}
              <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                    className={`h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full transition-all duration-300 ease-in-out min-h-[44px] min-w-[44px] flex items-center justify-center ${index === activeIndex
                        ? 'bg-[var(--background)] scale-125'
                        : 'bg-[var(--background)]/30 hover:bg-[var(--background)]/50 hover:scale-110'
                      } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`Testimonial ${index + 1}`}
                  >
                    <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-current"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
