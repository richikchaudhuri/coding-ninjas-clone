/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Approximate Coding Ninjas brand palette — refine against the live site.
        cn: {
          orange: '#FF7C04',
          dark: '#0B0B14',
          navy: '#1B1B2F',
          gray: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
