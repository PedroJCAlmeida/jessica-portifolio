/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Branding Palette
        brand: {
          burgundy: '#5A2A3B',
          gold: '#E3B76E',
          charcoal: '#1E1E22',
          cream: '#F8F7F3',
          purple: '#8C6DB2',
        },
        // Semantic Mapping
        primary: {
          50: '#fdf2f4',
          100: '#fbe7ec',
          200: '#f5ccd5',
          300: '#eca0b0',
          400: '#e06c85',
          500: '#d14362',
          600: '#b82d4d', // Lighter hover
          700: '#5A2A3B', // DEFAULT - Main Brand Color
          800: '#83182f', // Darker active
          900: '#4a101b',
        },
        secondary: {
          50: '#fdf9f0',
          100: '#faefdb',
          200: '#f3dcb8',
          300: '#ebc48f',
          400: '#E3B76E', // DEFAULT - Gold
          500: '#d99f4d',
          600: '#bc7e35',
          700: '#966029',
          800: '#7a4d25',
          900: '#633e21',
        },
        accent: {
          50: '#f6f4fa',
          100: '#efeaf5',
          200: '#dcd3eb',
          300: '#c2b3dd',
          400: '#a58ecd',
          500: '#8C6DB2', // DEFAULT - Creative Purple
          600: '#74529b',
          700: '#604182',
          800: '#4f356a',
          900: '#412c55',
        },
        neutral: {
          50: '#F8F7F3', // Cream background
          100: '#f1f0ec',
          200: '#e3e2de',
          300: '#cfcecb',
          400: '#9ca3af', // Gray placeholder
          500: '#6b7280', // Body text secondary
          600: '#4b5563',
          700: '#374151',
          800: '#1E1E22', // Dark Text
          900: '#111113', // Almost Black
        },
        dark: {
          DEFAULT: '#1E1E22',
          surface: '#2A2A30'
        },
        light: {
          DEFAULT: '#F8F7F3',
          surface: '#FFFFFF'
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'], // Titles
        'serif': ['Merriweather', 'Georgia', 'serif'], // Body/Reading
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'body': ['Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #5A2A3B 0%, #1E1E22 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E3B76E 0%, #bc7e35 100%)',
        'gradient-creative': 'linear-gradient(135deg, #5A2A3B 0%, #8C6DB2 100%)',
      },
    },
  },
  plugins: [],
}