/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Day 4 Core Brand Palette: Forest Green (#1b3323), Warm Amber (#d4a359), Linen (#fdfbf7)
        forest: {
          50: '#f2f7f4',
          100: '#dfede4',
          200: '#c1dcd0',
          300: '#97c4b4',
          400: '#6ba894',
          500: '#488b77',
          600: '#366e5f',
          700: '#2c594e',
          800: '#24473e',
          900: '#1b3323', // Primary Forest Green
          950: '#0c1a12',
          DEFAULT: '#1b3323',
        },
        amber: {
          50: '#fcf8f0',
          100: '#f7eedb',
          200: '#efdab6',
          300: '#e5c189',
          400: '#dca762',
          500: '#d4a359', // Primary Warm Amber
          600: '#b88241',
          700: '#936233',
          800: '#774c2e',
          900: '#623e28',
          DEFAULT: '#d4a359',
        },
        // Backward-compatible alias for Warm Amber / Gold
        warmgold: {
          light: '#e5c189',
          DEFAULT: '#d4a359',
          dark: '#b88241',
        },
        earthgold: {
          light: '#e5c189',
          DEFAULT: '#d4a359',
          dark: '#b88241',
        },
        linen: {
          50: '#fdfbf7', // Primary Linen Background
          100: '#f8f4eb',
          200: '#f1e8d8',
          300: '#e6d6be',
          400: '#d7be9f',
          500: '#c4a27f',
          DEFAULT: '#fdfbf7',
        },
        terracotta: {
          50: '#faf2f0',
          light: '#df886f',
          DEFAULT: '#c86d51',
          dark: '#a8543b',
          hover: '#b55c42',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 51, 35, 0.08)',
        'elevated': '0 20px 40px -15px rgba(27, 51, 35, 0.16)',
        'glass': '0 8px 32px 0 rgba(27, 51, 35, 0.12)',
        'amber-glow': '0 0 25px rgba(212, 163, 89, 0.35)',
        'forest-glow': '0 0 25px rgba(27, 51, 35, 0.30)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'floatSlow 5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

