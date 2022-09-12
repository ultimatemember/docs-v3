const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  unstable_flexsearch: true,
})

module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: '/developer/modules',
        destination: '/developer/modules/overview',
        statusCode: 301,
      },
      {
        source: '/developer',
        destination: '/developer/getting-started',
        statusCode: 301,
      },
    ]
  },
})
