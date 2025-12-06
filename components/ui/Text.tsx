/**
 * Text component
 * Typography component for body text
 */

import { BaseComponentProps } from '@/types';

interface TextProps extends BaseComponentProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'white';
  as?: 'p' | 'span' | 'div';
}

export default function Text({
  children,
  size = 'base',
  weight = 'normal',
  color = 'default',
  as: Component = 'p',
  className = '',
}: TextProps) {
  // Size styles
  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // Weight styles
  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Color styles
  const colorStyles = {
    default: 'text-[var(--color-text)]',
    muted: 'text-gray-600',
    white: 'text-[var(--color-text-white)]',
  };

  const combinedClassName = `${sizeStyles[size]} ${weightStyles[weight]} ${colorStyles[color]} ${className}`;

  return <Component className={combinedClassName}>{children}</Component>;
}
