/**
 * Navigation data
 */

import { MenuItem, FooterLinkGroup } from '@/types';
import { ROUTES } from '@/lib/constants';

/**
 * Main navigation menu items
 */
export const mainMenuItems: MenuItem[] = [
  {
    label: 'ZAMA',
    url: ROUTES.HOME,
    active: true,
  },
  {
    label: 'LEISTUNGEN',
    url: ROUTES.SERVICES,
  },
  {
    label: 'SEMINARE',
    url: ROUTES.SEMINARS,
  },
  {
    label: 'TEAM',
    url: ROUTES.TEAM,
  },
];

/**
 * Footer link groups
 */
export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'RECHTLICHES',
    links: [
      {
        label: 'Impressum',
        href: ROUTES.IMPRINT,
      },
      {
        label: 'Datenschutz',
        href: ROUTES.PRIVACY,
      },
    ],
  },
];
