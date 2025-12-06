/**
 * Heading component
 * Semantic heading with consistent typography
 */

import { HeadingProps } from '@/types';

export default function Heading({
  children,
  level = 'h2',
  as,
  className = '',
}: HeadingProps) {
  const Component = as || level;

  // Typography styles per level
  const levelStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-semibold',
    h6: 'text-base md:text-lg font-semibold',
  };

  const combinedClassName = `${levelStyles[level]} ${className}`;

  return <Component className={combinedClassName}>{children}</Component>;
}
