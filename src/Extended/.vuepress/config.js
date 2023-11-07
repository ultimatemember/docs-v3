import fs from "fs";
import fs_path from "path";

import { defaultTheme, defineUserConfig,viteBundler } from 'vuepress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { palettePlugin } from '@vuepress/plugin-palette'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { searchPlugin } from '@vuepress/plugin-search'

function getSideBar(folder, title) {

  const files = fs
    .readdirSync(fs_path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(fs_path.join(`${__dirname}/../${folder}`, item)).isFile() 
    );

    var arr = [];
    files.forEach( function( v, i ) { 
      arr.push( '/' + folder + '/' + v.replace('.md','') );
    });


  return arr;
}
export default defineUserConfig({
    lang: 'en-US',
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
    theme: defaultTheme({
      
      // logo
      logo: '/icon-128x128.png',

      navbar: [
          { text: 'Home', link: '/' }, 
          {
            text: 'v2.0.0',
            children: [
              { text: 'v2.0.0', link: '/' },
            ]
            },
            { link: '/developer/roadmap', text: 'Roadmap' },
          
          { text: 'Support', link: 'https://ultimatemember.com/support/ticket' }, 

        ],
    
        sidebar:
          [
            {  
                  text: 'Getting Started',
                collapsable: false,
                sidebarDepth: 0,    // optional, defaults to 1
              children: [
                    {
                      link: '/installation', text: 'Installation',
                    },
                    { link: '/create-extensions', text: 'Create Extensions' },
                    { link: '/how-to-contribute', text: 'Contribute' },
                    { link: '/report-issues', text: 'Report Issues' }
                 
                ],
            },
            // Normal documentation sidebar
            { 
              text: 'Developer',
              collapsable: false,
              sidebarDepth: 0,    // optional, defaults to 1
              children: getSideBar("developer", "Developer"),
            },
            { 
              text: 'Extended',
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
        },
    
        sidebarDepth: 3,
    
        lastUpdated: true,

        evergreen: false,
        
        searchPlaceholder: 'Search Documentation',

        // Repository configurations
        docsDir: 'extended',
        editLinks: true,
        repo: 'http://github.com/ultimatemember/docs-v3/',
    }),
    alias: {
      '@theme/HomeFooter.vue': fs_path.resolve(__dirname, './components/UMHomeFooter.vue'),
      '@theme/PageEdit.vue': fs_path.resolve(__dirname, './components/UMPageEdit.vue'),
  
    },
    plugins: [
          activeHeaderLinksPlugin({
            // options
          }),
          palettePlugin({ preset: 'sass' }),
          nprogressPlugin(),
          backToTopPlugin(),
          mediumZoomPlugin({
            // options
          }),
          prismjsPlugin({
            preloadLanguages: ['bash','sh']
          }),
          searchPlugin( {
            locales: {
            '/': {
              placeholder: 'Search',
            },
               // exclude the homepage
           isSearchable: (page) => page.path !== '/',
   
          }}),
         
    ],
    bundler: viteBundler({     }),
   
  });
