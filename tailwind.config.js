/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Classical & Peaceful Color Palette
        cream: {
          50: '#FAF6EF',  // Warm Cream Background
          100: '#F5EFE4',
          200: '#EAE1D2',
          DEFAULT: '#FAF6EF',
        },
        linen: {
          50: '#F8F4EC',
          100: '#F1EADF',  // Soft Linen Surface
          200: '#E7DDD0',
          300: '#D6C8B7',
          DEFAULT: '#F1EADF',
        },
        espresso: {
          50: '#8A7A71',
          100: '#6F6258',  // Muted Text
          200: '#4A3D36',
          900: '#2B211B',  // Deep Espresso Text
          950: '#1E1612',
          DEFAULT: '#2B211B',
        },
        sage: {
          50: '#F3F5F1',
          100: '#E1E6DC',
          200: '#C2CDBB',
          500: '#7D8B73',  // Primary Muted Sage Accent
          600: '#64715A',
          700: '#4D5845',
          DEFAULT: '#7D8B73',
        },
        brass: {
          50: '#FAF5EC',
          100: '#F2E6D2',
          500: '#B08D57',  // Antique Brass Accent Highlight
          600: '#947340',
          700: '#765B31',
          DEFAULT: '#B08D57',
        },
        hairline: {
          DEFAULT: '#E3D9CA', // Border Color
          dark: '#3B332C',
        },
        charcoal: {
          50: '#352F2B',
          100: '#2A2421',
          bg: '#1E1A17',      // Warm Dark Mode Base
          surface: '#26211D', // Warm Dark Mode Surface
          DEFAULT: '#1E1A17',
        },
        // Backward-compatibility aliases for components
        forest: {
          50: '#F3F5F1',
          100: '#E1E6DC',
          500: '#7D8B73',
          600: '#64715A',
          700: '#4D5845',
          800: '#384232',
          900: '#2B211B',
          950: '#1E1A17',
          DEFAULT: '#7D8B73',
        },
        amber: {
          50: '#FAF5EC',
          100: '#F2E6D2',
          500: '#B08D57',
          600: '#947340',
          DEFAULT: '#B08D57',
        },
        warmgold: {
          light: '#C7A772',
          DEFAULT: '#B08D57',
          dark: '#947340',
        },
        terracotta: {
          DEFAULT: '#7D8B73',
          hover: '#64715A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      spacing: {
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 8px 30px -10px rgba(43, 33, 27, 0.05)',
        'subtle': '0 4px 20px -4px rgba(43, 33, 27, 0.04)',
        'elevated': '0 16px 40px -12px rgba(43, 33, 27, 0.08)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
}


