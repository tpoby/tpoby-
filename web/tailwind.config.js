/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette (April Greiman inspired)
        primary: {
          blue: '#3B82F6',
          pink: '#FF1493',
          cyan: '#00FFFF',
          magenta: '#FF00FF',
        },
        // Geometric palette (Kandinsky inspired)
        geometric: {
          red: '#EF4444',
          yellow: '#F59E0B',
          blue: '#3B82F6',
        },
        // Neutral palette (Zinc scale)
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        // Semantic colors
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 10vw, 6rem)', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vh, 8rem)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        cursorBlink: {
          '0%, 40%': { opacity: '1' },
          '50%, 90%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'spin-slow': 'spinSlow 8s linear infinite',
        'cursor-blink': 'cursorBlink 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
