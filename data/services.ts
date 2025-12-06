/**
 * Services data
 */

import { Service } from '@/types';
import { COLORS } from '@/lib/design-tokens';

/**
 * Service offerings
 */
export const services: Service[] = [
  {
    id: 'external-billing',
    icon: '/assets/img/icon_yellow.png',
    title: 'Externe Abrechnung',
    color: COLORS.PRIMARY,
  },
  {
    id: 'hygiene-practice-management',
    icon: '/assets/img/icon_lavender.png',
    title: 'Hygiene- und Praxismanagement',
    color: COLORS.PRIMARY,
  },
  {
    id: 'team-leadership-training',
    icon: '/assets/img/icon_green.png',
    title: 'Team- und Führungskräftetraining',
    color: COLORS.PRIMARY,
  },
];
