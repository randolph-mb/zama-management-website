/**
 * Container component
 * Responsive container with max-width constraints
 */

import { ContainerProps } from '@/types';

export default function Container({
  children,
  size = 'lg',
  centered = true,
  className = '',
}: ContainerProps) {
  // Size mappings
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const centerStyles = centered ? 'mx-auto' : '';
  const paddingStyles = 'px-4 sm:px-6 lg:px-8';

  const combinedClassName = `${sizeStyles[size]} ${centerStyles} ${paddingStyles} ${className}`;

  return <div className={combinedClassName}>{children}</div>;
}
