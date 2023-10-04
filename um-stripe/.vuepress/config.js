module.exports = {
    // Directory where will be generated the HTML files by VuePress
    dest: 'um-stripe/dist/',     
    
    // Base URL. Useful for GitHub pages.     
    base: '/docs-v3/um-stripe/',
  
    // Title of your project
    title: 'Stripe - Ultimate Member Docs',
  
    // Description of your project
    description: 'Integrates the popular payment processing platform Stripe with Ultimate Member',
  
    head: [
      ['link', { rel: 'icon', href: 'https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png' }], // Custom favicon
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
          text: 'v1.0.0-beta.10',
          ariaLabel: 'Version',
          items: [
            { text: 'v1.0.0-beta.10', link: '/' },
          ]
          },
          { link: '/developer/roadmap', text: 'Roadmap' },
        
        { text: 'Support', link: 'https://ultimatemember.com/support/ticket' }, 

      ],
  
      sidebar:
        [
          // Normal documentation sidebar
          { 
            title: 'Getting Started',
            collapsable: false,
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
              ['article/1606-introduction-to-ultimate-members-stripe-extension', 'Introduction' ],
              ['article/1876-stripe-beta-test', 'For Beta Testers' ],
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
      
      searchPlaceholder: 'Search Documentation',

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
    plugins: {
          'register-components': {},
          '@vuepress/plugin-medium-zoom':{
            selector: 'img'
          },
          '@vuepress/back-to-top': {},
          'vuepress-plugin-right-anchor': {
            ignore: [
              '/developer/hooks/actions.html',
              '/developer/hooks/filters.html'
              // more...
            ],
            
            customClass: 'your-customClass',
            disableGlobalUI: false,
          }
        }
  };