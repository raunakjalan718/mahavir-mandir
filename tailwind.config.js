/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffeedb',
          200: '#ffd9b3',
          300: '#ffbd7D',
          400: '#ff9838',
          500: '#f57c00', // core warm saffron
          600: '#e65100', // rich deep saffron
          700: '#bf360c', // vermilion / sindoor
          800: '#992908',
          900: '#7a220a',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9c4',
          200: '#fff176',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#e65100',
        },
        cream: {
          50: '#ffffff',
          100: '#fffdf9',
          200: '#faf6f0', // soft warm cream background from screenshots
          300: '#f4efe6',
          400: '#eae2d5',
          500: '#dcd1bf',
        },
        espresso: {
          50: '#f6f4f2',
          100: '#e7e3df',
          800: '#33251d',
          900: '#211814', // deep warm dark text
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'scallop': '3rem 3rem 1rem 1rem',
      },
      backgroundImage: {
        'mandala-pattern': "radial-gradient(circle at center, rgba(230, 81, 0, 0.05) 0%, transparent 70%)",
        'saffron-gradient': "linear-gradient(135deg, #e65100 0%, #f57c00 50%, #ffb300 100%)",
        'gold-shimmer': "linear-gradient(90deg, #ffc107 0%, #ffe082 50%, #ffc107 100%)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        bellRing: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-15deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bell-ring': 'bellRing 0.6s ease-in-out',
      }
    },
  },
  plugins: [],
}
