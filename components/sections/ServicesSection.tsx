import Image from 'next/image';
import { services } from '@/data';
import { Container, Heading } from '@/components/ui';

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[var(--background)]">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className={`p-6 sm:p-8 md:p-10 bg-[var(--background)] flex flex-col items-center text-center ${
                index > 0
                  ? 'border-t-1 sm:border-t-0 sm:border-l-1 border-[var(--color-primary)] pt-6 sm:pt-8 md:pt-10 sm:pl-6 md:pl-8'
                  : ''
              }`}
            >
              <div className="mb-5 sm:mb-6 md:mb-7 relative w-20 h-28 sm:w-24 sm:h-32">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <Heading level="h4" className="text-[var(--color-text)] text-lg sm:text-xl">
                {service.title}
              </Heading>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
