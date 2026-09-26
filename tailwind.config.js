/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f7f4',
          100: '#dedfd4',
          200: '#c2d5ca',
          300: '#9cb9a9',
          400: '#719882',
          500: '#4e7a64',
          600: '#3c614e',
          700: '#304c3e',
          800: '#273e33',
          900: '#1b3b2b',
          950: '#0c1a13',
        },
        terracotta: {
          light: '#df886f',
          DEFAULT: '#c86d51',
          dark: '#a8543b',
        },
        linen: {
          50: '#fdfcf9',
          100: '#f9f6f0',
          200: '#f4efe6',
          300: '#e8dfd1',
          400: '#d7c7b3',
        },
        earthgold: {
          light: '#e5be94',
          DEFAULT: '#d4a373',
          dark: '#b38252',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 59, 43, 0.08)',
        'elevated': '0 20px 40px -15px rgba(27, 59, 43, 0.16)',
        'glass': '0 8px 32px 0 rgba(27, 59, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
