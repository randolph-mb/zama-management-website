/**
 * Design System Tokens
 * Centralized design values for consistent styling across the application
 */

/**
 * Color palette
 */
export const COLORS = {
  // Brand colors
  PRIMARY: '#c8b3d9',
  ACCENT: '#FF9900',

  // Neutral colors
  BLACK: '#000000',
  WHITE: '#ffffff',
  GRAY_DARK: '#1a1a1a',
  GRAY_MEDIUM: '#3a3a3a',
  GRAY_LIGHT: '#f5f5f5',

  // Text colors
  TEXT_DEFAULT: '#000000',
  TEXT_WHITE: '#ffffff',
  TEXT_MUTED: '#666666',

  // Background colors
  BG_DEFAULT: '#ffffff',
  BG_DARK: '#1a1a1a',
  BG_GRAY: '#3a3a3a',
} as const;

/**
 * Typography scale
 */
export const TYPOGRAPHY = {
  FONT_FAMILY: {
    DEFAULT: 'var(--font-satoshi), sans-serif',
    SATOSHI: 'var(--font-satoshi), sans-serif',
  },

  FONT_SIZE: {
    XS: '0.75rem',      // 12px
    SM: '0.875rem',     // 14px
    BASE: '1rem',       // 16px
    LG: '1.125rem',     // 18px
    XL: '1.25rem',      // 20px
    '2XL': '1.5rem',    // 24px
    '3XL': '1.875rem',  // 30px
    '4XL': '2.25rem',   // 36px
    '5XL': '3rem',      // 48px
    '6XL': '3.75rem',   // 60px
    '7XL': '4.5rem',    // 72px
  },

  FONT_WEIGHT: {
    NORMAL: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700',
    EXTRABOLD: '800',
  },

  LINE_HEIGHT: {
    TIGHT: '1.25',
    NORMAL: '1.5',
    RELAXED: '1.75',
    LOOSE: '2',
  },
} as const;

/**
 * Spacing scale (matches Tailwind defaults)
 */
export const SPACING = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

/**
 * Border radius values
 */
export const RADIUS = {
  NONE: '0',
  SM: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  MD: '0.375rem',   // 6px
  LG: '0.5rem',     // 8px
  XL: '0.75rem',    // 12px
  '2XL': '1rem',    // 16px
  FULL: '9999px',
} as const;

/**
 * Shadow values
 */
export const SHADOWS = {
  SM: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  MD: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  LG: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  XL: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  NONE: 'none',
} as const;

/**
 * Transition values
 */
export const TRANSITIONS = {
  FAST: 'all 150ms ease-in-out',
  DEFAULT: 'all 300ms ease-in-out',
  SLOW: 'all 500ms ease-in-out',
} as const;
