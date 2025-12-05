import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function KontaktPage() {
  return (
    <main>
      {/* Contact Info Section */}
      <section className="bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 pb-30 pt-30 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-3xl font-bold text-[var(--color-text)] mb-8 pt-6 leading-tight">
                Der erste Eindruck zählt
                <br />
                und der letzte bleibt.
              </h2>
              <p className="text-lg text-[var(--color-text)] mb-8 leading-relaxed">
                Wir freuen uns sehr auf ein gemeinsames Kennenlernen, wie wir dich &amp; deinen
                Praxiserfolg unterstützen können. Vereinbare doch gleich ein erstes unverbindliches
                Kennenlernen mit Anja.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="space-y-4 pt-30 pl-40">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[var(--color-primary)] w-5 h-5" />
                    <a
                      href="mailto:help@zama-management.de"
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
                    >
                      help@zama-management.de
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="text-[var(--color-primary)] w-5 h-5" />
                    <a
                      href="tel:+491741729510"
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
                    >
                      0174 - 172 9510
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[var(--color-primary)] w-5 h-5" />
                    <div className="text-[var(--color-text)]">
                      Zama Management GmbH &amp; Co. KG
                      <br />
                      Kochgasse 7, <br />
                      06925 Annaburg, Germany
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-gray-50">
        <div className="w-full">
          <div className="relative h-[100vh] w-full overflow-hidden">
            <Image
              src="/assets/img/zama_kontakt.png"
              alt="Zama Consulting Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
