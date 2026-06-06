/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Coding Ninjas brand palette.
        cn: {
          orange: '#FF7C04',
          'orange-dark': '#E56E00',
          'orange-light': '#FF9A3D',
          dark: '#0B0B14',
          navy: '#1B1B2F',
          gray: '#6B7280',
        },
      },
      fontFamily: {
        // @fontsource-variable/inter registers the family as "Inter Variable".
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'Arial', 'sans-serif'],
        // Expressive editorial display + technical "telemetry" numerals (Google Fonts).
        display: ['"Bricolage Grotesque"', '"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'grain-shift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2%, 1%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 32s linear infinite',
      },
    },
  },
  plugins: [],
}
