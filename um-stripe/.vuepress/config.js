module.exports = {
    // Directory where will be generated the HTML files by VuePress
    dest: 'docs/v1/',

    // Base URL. Useful for GitHub pages.
    base: 'https://ultimatemember.github.io/docs-v3/um-stripe',
  
    // Title of your project
    title: 'Stripe - Ultimate Member Docs',
  
    // Description of your project
    description: 'Integrates the popular payment processing platform Stripe with Ultimate Member',
  
    head: [
      ['link', { rel: 'icon', href: '/favicon.svg' }], // Custom favicon
    ],
  
    // Plugins config
    plugins: {
      '@vuepress/google-analytics': {
        ga: 'UA-58599811-1', // GoogleAnalytics ID (optional. use your own ga)
      },
      '@vuepress/back-to-top': {},
    },
  
    themeConfig: {
      
    // logo
    logo: '/icon-128x128.png',

    nav: [
        { text: 'Home', link: '/' }, 
        {
            text: 'v1.x',
            ariaLabel: 'Version',
            items: [
              { text: 'v1.x', link: '/' },
            ]
          },
        { text: 'Support', link: 'https://ultimatemember.com/support/ticket' }, 

      ],
  
      sidebar:
        [
          // Normal documentation sidebar
          { 
            title: 'Getting Started',
            collapsable: false,
            children: [
              ['articles/introduction-to-ultimate-members-stripe-extension', 'Introduction' ],
            ],
          },
          {
            title: 'Developer',
            collapsable: false,
            children: [
              ['developer/hooks/actions','Actions'],
              ['developer/hooks/filters','Filters'],
              'developer/functions',
              'developer/classes',
              ['developer/hooks/snippets','Code Snippets'],
            ],
          },
        ]
      ,
  
      // You can ignore the following optional customizations --------------------
  
      markdown: {
        lineNumbers: false,
        toc: { includeLevel: [1, 2, 3] },
      },
  
      sidebarDepth: 3,
  
      lastUpdated: true,

      evergreen: false,
  
  
      // Repository configurations
      docsDir: 'docs',
      editLinks: true,
    },
  
    // custom webpack configuration
    configureWebpack: {
      resolve: {
        alias: {
          // Aliases
          '@github': '../../.github/assets',
        },
      },
    },
    plugins: [
        [
          'register-components',
        ]
      ]
  };