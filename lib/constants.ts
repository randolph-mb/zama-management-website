/**
 * Application-wide constants
 * Centralized constants for routes, breakpoints, and configuration
 */

/**
 * Application routes
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/leistungen',
  SEMINARS: '/seminare',
  TEAM: '/team',
  CONTACT: '/kontakt',
  IMPRINT: '/impressum',
  PRIVACY: '/datenschutz',
} as const;

/**
 * Responsive breakpoints (matches Tailwind defaults)
 */
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

/**
 * Asset paths
 * Central source of truth for all static assets
 */
export const ASSETS = {
  IMAGES: {
    // Brand
    LOGO: '/assets/Zama/ZAM_Logo_agate_d60d129616.png',
    LOGO_FOOTER: '/assets/Zama/ZAMA_Logo_ash_5d1188318c (1).png',

    // Icons
    TOOTH_GREEN: '/assets/Zama/Zama_Teeth_Icon_Green_1_b9adb4c354.png',
    TOOTH_LAVENDER: '/assets/Zama/Zama_Teeth_Icon_Lavender_1_6ac2558c4a.png',
    TOOTH_YELLOW: '/assets/Zama/Zama_Teeth_Icon_Yellow_1_b2243dad9a.png',

    // Feature Images
    BRIDGE_BUILDER: '/assets/Zama/Zama_Brueckenbauer_by_Christoph_Neumann_Kopie_be1bb1a863.webp',
    CONTACT_HERO: '/assets/Kontakt/1_Zama_Kontakt_by_Christoph_Neumann_e4825bb5fc.png',
  },
  VIDEOS: {
    // Note: Filenames copied exactly from filesystem (including spaces and double dots if any)
    HERO: '/assets/Zama/Zama-Management Seminare. Jetzt informieren..mp4',
    SEMINARS_TEASER: '/assets/Zama/Zama-Management Seminare. Jetzt informieren._2.mp4',
  },
} as const;

/**
 * Company information
 */
export const COMPANY = {
  NAME: 'Zama Management GmbH & Co. KG',
  SHORT_NAME: 'ZAMA',
  TAGLINE: 'Brückenbauer zwischen Menschen und Unternehmen',
} as const;

/**
 * Layout constants
 */
export const LAYOUT = {
  MAX_WIDTH: '1280px',
  HEADER_HEIGHT: '64px',
  CONTAINER_PADDING: {
    MOBILE: '1rem',
    DESKTOP: '2rem',
  },
} as const;

/**
 * Animation durations (in ms)
 */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  HEADER: 50,
  MODAL: 100,
  TOOLTIP: 200,
  DROPDOWN: 10,
} as const;
