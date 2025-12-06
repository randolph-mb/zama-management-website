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
 */
export const ASSETS = {
  IMAGES: {
    LOGO: '/assets/img/logo_zama.png',
    LOGO_FOOTER: '/assets/img/logo_zama_footer.png',
    BRIDGE_BUILDER: '/assets/img/Zama_Brueckenbauer_by_Christoph_Neumann_Kopie_be1bb1a863.webp',
  },
  VIDEOS: {
    HERO: '/assets/videos/hero_video.mp4',
    SEMINARS: '/assets/videos/seminare_video.mp4',
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
