/**
 * Common/shared types
 */

import { ReactNode } from 'react';

/**
 * Standard component props
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Image properties
 */
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

/**
 * Link properties
 */
export interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button properties
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Heading levels
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Heading properties
 */
export interface HeadingProps extends BaseComponentProps {
  level?: HeadingLevel;
  as?: HeadingLevel;
}

/**
 * Container sizes
 */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Container properties
 */
export interface ContainerProps extends BaseComponentProps {
  size?: ContainerSize;
  centered?: boolean;
}
