import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container, Heading, Text } from '@/components/ui';
import { ASSETS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <main className="bg-[#f2f0e9] min-h-screen">
      {/* Top Section: Text & Contact Details */}
      <section className="text-black pt-32 pb-16 md:pt-40 md:pb-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
            {/* Left Column: Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                Der erste Eindruck zählt<br className="hidden md:block" /> und der letzte bleibt.
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-light max-w-xl">
                Wir freuen uns sehr auf ein gemeinsames Kennenlernen, wie wir dich & deinen Praxiserfolg unterstützen können. Vereinbare doch gleich ein erstes unverbindliches Kennenlernen mit Anja.
              </p>
            </div>

            {/* Right Column: Contact Data */}
            <div className="flex flex-col space-y-6 md:pl-12">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <a href="mailto:help@zama-management.de" className="text-lg font-light hover:text-[#b0a080] transition-colors">
                  help@zama-management.de
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <a href="tel:01741729510" className="text-lg font-light hover:text-[#b0a080] transition-colors">
                  0174 - 172 9510
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <Text size="lg" className="leading-snug font-light">
                  Zama Management GmbH & Co. KG<br />
                  Kochgasse 7,<br />
                  06925 Annaburg, Germany
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Middle Section: Full-Width Image */}
      <section className="w-full relative h-[500px] md:h-[600px] bg-black">
        <Image
          src={ASSETS.IMAGES.CONTACT_HERO}
          alt="Zama Kontakt Telefon"
          fill
          className="object-cover"
          priority
        />
      </section>
    </main>
  );
}
