const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: colors.trueGray,
        whatsapp:{
          'teal-green':'#128C7E',
          'light-green':'#25D366',
          'teal-green-dark':'#075E54',
          'dark-100':'#2D3134',
          'dark-200':'#2A2F32',
          'dark-300':'#131C21',
          'blue':'#34B7F1',
          'blue-dark':'#085373',
        }
      },
      spacing:{
        'side-width': '25.75rem',
        '22':'5.5rem'
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'group-hover'],
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
