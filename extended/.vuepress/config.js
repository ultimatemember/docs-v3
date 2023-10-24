const fs = require("fs");
const path = require("path");

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() 
    );

    var arr = [];
    files.forEach( function( v, i ) { 
      arr.push( folder + '/' + v.replace('.md','') );
    });

    console.log(arr);

  return arr;
}
module.exports = {
    // Directory where will be generated the HTML files by VuePress
    dest: 'extended/dist/',     
    
    // Base URL. Useful for GitHub pages.     
    base: '/docs-v3/extended/',
  
    // Title of your project
    title: 'UM Extended - Docs',
  
    // Description of your project
    description: 'Explore our extended features/functionalities & ways to extend & customize Ultimate Member plugins.',
  
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
          text: 'v2.0.0',
          ariaLabel: 'Version',
          items: [
            { text: 'v2.0.0', link: '/' },
          ]
          },
          { link: '/developer/roadmap', text: 'Roadmap' },
        
        { text: 'Support', link: 'https://ultimatemember.com/support/ticket' }, 

      ],
  
      sidebar:
        [
          {   title: 'Getting Started',
              collapsable: false,
              sidebarDepth: 0,    // optional, defaults to 1
             children: [
                  ['/installation','Installation'],
              ],
          },
          // Normal documentation sidebar
          { 
            title: 'Developer',
            collapsable: false,
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
              ['developer/create-extensions', 'Create Extensions' ],
              ['developer/how-to-contribute', 'Contribute' ],
              ['developer/report-issues', 'Report Issues']
            ],
          },
          { 
            title: 'Extended',
            sidebarDepth: 0,    // optional, defaults to 1
            collapsable: false,
            children: getSideBar("article", "Extended"),
          }
      
        ]
      ,
  
      // You can ignore the following optional customizations --------------------
  
      markdown: {
        lineNumbers: false,
        toc: { includeLevel: [1, 2, 3] },
        extendMarkdown: md => {
          // use more markdown-it plugins!
          md.use(require('markdown-it-codetabs'))
        }
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
             ],
            
            customClass: 'your-customClass',
            disableGlobalUI: false,
          }
        }
  };


