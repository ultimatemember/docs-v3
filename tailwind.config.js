const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.js',
    './pages/**/*.md',
    './pages/**/*.mdx',
    './theme.config.js',
    './styles.css',
  ],
  theme: {
    colors: {
      primary: '#6366f1',
      'um-secondary': '#6366f1',
      um: '#6366f1',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      indigo: colors.indigo,
      black: colors.black,
      gray: colors.gray,
    },
  },
}
