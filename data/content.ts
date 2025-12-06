/**
 * General content and copy text
 */

import { COMPANY } from '@/lib/constants';

/**
 * Homepage content
 */
export const homepageContent = {
  hero: {
    title: 'Willkommen bei ZAMA',
    subtitle: 'Brückenbauer zwischen Menschen und Unternehmen',
  },
  cta: {
    title: 'Gemeinsam erfolgreich.',
    subtitle: 'Wann starten wir?',
    buttonText: 'KONTAKT',
  },
};

/**
 * Footer content
 */
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${COMPANY.SHORT_NAME}. Alle Rechte vorbehalten.`,
  contactTitle: 'KONTAKT',
  legalTitle: 'RECHTLICHES',
};

/**
 * SEO metadata
 */
export const seoMetadata = {
  defaultTitle: `${COMPANY.SHORT_NAME} - ${COMPANY.TAGLINE}`,
  defaultDescription:
    'ZAMA Management bietet professionelle Beratung in den Bereichen externe Abrechnung, Hygiene- und Praxismanagement sowie Team- und Führungskräftetraining.',
  keywords: [
    'ZAMA Management',
    'Praxismanagement',
    'Externe Abrechnung',
    'Hygiene Management',
    'Führungskräftetraining',
    'Teamtraining',
  ],
};
