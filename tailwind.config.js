/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'faster-pulse': 'pulse 1000ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        monospace: 'Overpass Mono, monospace', // Adds a new `font-display` class
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

