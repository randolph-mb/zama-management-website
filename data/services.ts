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
    icon: '/assets/Zama/Zama_Teeth_Icon_Yellow_1_b2243dad9a.png',
    title: 'Externe Abrechnung',
    color: COLORS.PRIMARY,
  },
  {
    id: 'hygiene-practice-management',
    icon: '/assets/Zama/Zama_Teeth_Icon_Lavender_1_6ac2558c4a.png',
    title: 'Hygiene- und Praxismanagement',
    color: COLORS.PRIMARY,
  },
  {
    id: 'team-leadership-training',
    icon: '/assets/Zama/Zama_Teeth_Icon_Green_1_b9adb4c354.png',
    title: 'Team- und Führungskräftetraining',
    color: COLORS.PRIMARY,
  },
];
