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
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        'color-text': 'var(--color-text)',
        'color-text-white': 'var(--color-text-white)',
        'color-primary': 'var(--color-primary)',
        'color-accent': 'var(--color-accent)',
      },
      fontFamily: {
        'satoshi-regular': ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
