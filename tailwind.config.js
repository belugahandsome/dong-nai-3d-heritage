/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          ivory: '#FAF7F2',
          'ivory-dark': '#F0EBE1',
          'ivory-card': '#FFFDF9',
          emerald: '#0B2418',
          'emerald-dark': '#06160F',
          forest: '#143828',
          'forest-light': '#1E533C',
          gold: '#C5A059',
          'gold-light': '#E6C687',
          'gold-dark': '#9A7734',
          bronze: '#8A5D3B',
          'bronze-light': '#A77852',
          ruby: '#892B2B',
          terracotta: '#B85B38',
          charcoal: '#1A1E1C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(197, 160, 89, 0.35)',
        'glow-emerald': '0 0 30px rgba(20, 56, 40, 0.4)',
        'museum': '0 20px 40px -15px rgba(10, 35, 24, 0.15)',
        'museum-lg': '0 25px 60px -15px rgba(6, 22, 15, 0.25)',
      },
      backgroundImage: {
        'noise': "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 100%)",
      }
    },
  },
  plugins: [],
}
