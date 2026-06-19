/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      satoshi: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '18px', fontWeight: '500' }],
      sm: ['14px', { lineHeight: '20px', fontWeight: '400' }],
      base: ['16px', { lineHeight: '24px', fontWeight: '400' }],
      lg: ['18px', { lineHeight: '28px', fontWeight: '400' }],
      xl: ['20px', { lineHeight: '30px', fontWeight: '600' }],
      '2xl': ['24px', { lineHeight: '36px', fontWeight: '600' }],
      '3xl': ['32px', { lineHeight: '44px', fontWeight: '600' }],
      '4xl': ['40px', { lineHeight: '56px', fontWeight: '700' }],
      '5xl': ['48px', { lineHeight: '64px', fontWeight: '700' }],
      '6xl': ['56px', { lineHeight: '70px', fontWeight: '700' }],
      '7xl': ['64px', { lineHeight: '76px', fontWeight: '700' }],
      '8xl': ['72px', { lineHeight: '84px', fontWeight: '700' }],
      '9xl': ['84px', { lineHeight: '96px', fontWeight: '700' }],
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.03em',
      'tight-sm': '-0.02em',
      'tight-xs': '-0.01em',
      normal: '0em',
      wide: '0.025em',
    },
    extend: {
      lineHeight: {
        'xs': '18px',
        'sm': '20px',
        'base': '24px',
        'lg': '28px',
        'xl': '30px',
        'tight': '1.1',
        'snug': '1.2',
        'relaxed': '1.875',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
      },
      colors: {
        'heading': 'oklch(0.21 0.034 264.665)',
        'body': 'rgb(50, 55, 69)',
      },
    },
  },
  plugins: [],
}