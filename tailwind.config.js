/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CSS variable mappings (for compatibility with existing code)
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        'color-text': 'var(--color-text)',
        'color-text-white': 'var(--color-text-white)',
        'color-primary': 'var(--color-primary)',
        'color-accent': 'var(--color-accent)',

        // Design system colors (preferred for new code)
        primary: '#c8b3d9',
        accent: '#FF9900',
        gray: {
          dark: '#1a1a1a',
          medium: '#3a3a3a',
          light: '#f5f5f5',
        },
      },
      fontFamily: {
        'satoshi-regular': ['var(--font-satoshi)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
