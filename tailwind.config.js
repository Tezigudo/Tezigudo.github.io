/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'FutoMin': ['A-OTF Futo Min A101 Pro Bold', 'sans-serif'],
        'KozMin': ['KozMinPro Bold', 'sans-serif'],
      },
      'torea-bay': {
        DEFAULT: '#171F99',
        '50': '#7C83EB',
        '100': '#6B72E9',
        '200': '#4751E3',
        '300': '#242FDE',
        '400': '#1C26BC',
        '500': '#171F99',
        '600': '#101568',
        '700': '#080B37',
        '800': '#010107',
        '900': '#000000'
      },
      'onahau': {
        DEFAULT: '#D2E7FE',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FAFCFF',
        '500': '#D2E7FE',
        '600': '#9BCAFD',
        '700': '#64ACFC',
        '800': '#2D8FFA',
        '900': '#0573EA'
      },
      'dawn-pink': {
        DEFAULT: '#F5EEE8',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#F5EEE8',
        '600': '#E4D1C1',
        '700': '#D3B49A',
        '800': '#C29773',
        '900': '#B07A4D'
      },

      backgroundImage: {
        'tearmat': "url('/src/assets/images/tearmatt.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('prettier-plugin-tailwindcss')],
}