'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { contactInfo, footerLinks, homepageContent, footerContent } from '@/data';
import { ROUTES, ASSETS, COMPANY } from '@/lib/constants';
import { Container, Heading, Button } from '@/components/ui';

export default function Footer() {
  const pathname = usePathname();
  // Hide default CTA on Contact AND Seminars page (Seminars has its own custom CTA)
  const showCTA = pathname !== ROUTES.CONTACT && pathname !== ROUTES.SEMINARS;

  // Use beige background for Seminars page to match its theme
  const isSeminarsPage = pathname === ROUTES.SEMINARS;
  const footerBg = isSeminarsPage ? 'bg-[#f2f0e9]' : 'bg-[#ebe8e1]';
  const borderColor = isSeminarsPage ? 'border-gray-300' : 'border-gray-300'; // Can adjust if needed

  return (
    <footer className={`${footerBg} text-[var(--color-text)]`}>
      {/* CTA Section - Part of Footer, hidden on Contact & Seminars page */}
      {showCTA && (
        <div className={`${footerBg} py-20 text-center`}>
          <Container size="sm">
            <Heading level="h2" className="text-[var(--color-text)] mb-8">
              {homepageContent.cta.title} <br />
              {homepageContent.cta.subtitle}
            </Heading>
            <Link href={ROUTES.CONTACT}>
              <Button size="lg">{homepageContent.cta.buttonText}</Button>
            </Link>
          </Container>
        </div>
      )}

      {/* Footer Content */}
      <Container size="lg" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src={ASSETS.IMAGES.LOGO_FOOTER}
              alt={COMPANY.NAME}
              width={120}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <div className="text-sm flex items-start">
              <MapPin className="mr-2 flex-shrink-0 w-4 h-4 mt-1" />
              <div>
                <p className="font-medium">{COMPANY.NAME}</p>
                <p>{contactInfo.address.street},</p>
                <p>
                  {contactInfo.address.postalCode} {contactInfo.address.city},{' '}
                  {contactInfo.address.country}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">
              {footerContent.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[var(--color-accent)] transition"
                >
                  {contactInfo.email}
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 w-4 h-4 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-[var(--color-accent)] transition"
                >
                  {contactInfo.phone}
                </Link>
              </li>
              {contactInfo.social.instagram && (
                <li className="flex items-center">
                  <Instagram className="mr-2 w-4 h-4 flex-shrink-0" />
                  <Link
                    href={contactInfo.social.instagram}
                    className="hover:text-[var(--color-accent)] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                </li>
              )}
              {contactInfo.social.linkedin && (
                <li className="flex items-center">
                  <Linkedin className="mr-2 w-4 h-4 flex-shrink-0" />
                  <Link
                    href={contactInfo.social.linkedin}
                    className="hover:text-[var(--color-accent)] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
              )}
              {contactInfo.social.whatsapp && (
                <li className="flex items-center">
                  <MessageCircle className="mr-2 w-4 h-4 flex-shrink-0" />
                  <Link
                    href={contactInfo.social.whatsapp}
                    className="hover:text-[var(--color-accent)] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">
              {footerContent.legalTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks[0].links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--color-accent)] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t ${borderColor} text-center text-sm`}>
          <p>{footerContent.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
