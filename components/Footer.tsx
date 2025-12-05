import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#ebe8e1] text-[var(--color-text)]">
      {/* CTA Section - Part of Footer */}
      <div className="bg-[#ebe8e1] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-[var(--color-text)] text-3xl md:text-4xl mb-8 font-bold">
            Gemeinsam erfolgreich. <br />
            Wann starten wir?
          </h2>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-3 rounded bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] transition font-semibold"
          >
            KONTAKT
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/assets/img/logo_zama_footer.png"
              alt="Zama Management"
              width={120}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <div className="text-sm flex items-start">
              <MapPin className="mr-2 flex-shrink-0 w-4 h-4 mt-1" />
              <div>
                <p className="font-medium">Zama Management GmbH & Co. KG</p>
                <p>Kochgasse 7,</p>
                <p>06925 Annaburg, Germany</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">KONTAKT</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href="mailto:help@zama-management.de"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  help@zama-management.de
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href="tel:0174-1729510"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  0174 - 172 9510
                </Link>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href="https://www.instagram.com/zama_management/"
                  className="hover:text-[var(--color-accent)] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href="https://www.linkedin.com/in/anja-gutzmer-2abb18126/"
                  className="hover:text-[var(--color-accent)] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center">
                <MessageCircle className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href="https://wa.me/message/E7E67AZJKA23D1"
                  className="hover:text-[var(--color-accent)] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">RECHTLICHES</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm">
          <p>
            © 2025 <span className="font-medium">Zama Management</span>. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
