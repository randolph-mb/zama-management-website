/**
 * Button component
 * Reusable button with variants and sizes
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonProps } from '@/types';
import { COLORS } from '@/lib/design-tokens';

const Button = forwardRef<HTMLButtonElement, ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      className = '',
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    // Variant styles
    const variantStyles = {
      primary: `bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] active:scale-95`,
      secondary: `bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] active:scale-95`,
      outline: `border-2 border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white`,
      ghost: `text-[var(--color-text)] hover:bg-gray-light`,
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2',
      lg: 'px-8 py-3 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClassName}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
