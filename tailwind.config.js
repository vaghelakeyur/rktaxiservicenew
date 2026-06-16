/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // Let data-theme attribute control dark mode instead of Tailwind's class-based system
  darkMode: ['attribute', 'data-theme'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent:  'var(--accent)',
        yellow:  'var(--yellow)',
        highlight: 'var(--highlight)',
        'bg-body':    'var(--bg-body)',
        'bg-section': 'var(--bg-section)',
        'bg-card':    'var(--bg-card)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'border-col':     'var(--border-color)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        card:    'var(--shadow)',
        'card-lg': 'var(--shadow-lg)',
        glow:    'var(--glow)',
      },
      backgroundImage: {
        'grad-primary': 'var(--grad-primary)',
        'grad-hero':    'var(--grad-hero)',
      },
      transitionDuration: {
        350: '350ms',
      },
    },
  },
  plugins: [],
}
