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
    // Directory where will be generated the HTML files by VuePress
    dest: 'um-stripe/dist/',     
    
    // Base URL. Useful for GitHub pages.     
    base: '/docs-v3/um-stripe/',
  
    // Title of your project
    title: 'UM + Stripe Docs',
  
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
  
    theme: defaultTheme({
        
      // logo
      logo: '/icon-128x128.png',

      navbar: [
          { text: 'Home', link: '/' }, 
          {
            text: 'v1.0.2-beta.2',
            children: [
              { text: 'v1.0.2-beta.2', link: '/' },
            ]
            },
            { link: '/developer/roadmap', text: 'Roadmap' },
          
          { text: 'Support', link: 'https://ultimatemember.com/support/ticket' }, 

        ],
        sidebar:
          [
            // Normal documentation sidebar
            { 
              text: 'Getting Started',
              collapsable: false,
              sidebarDepth: 0,    // optional, defaults to 1
              children: [
                { link: '/article/1606-introduction-to-ultimate-members-stripe-extension', text: 'Introduction' },
                { link: '/article/1876-stripe-beta-test', text: 'For Beta Testers' },
              ],
            },
            {
              text: 'Developer',
              collapsable: false,
              children: [
                { link: '/developer/hooks/actions', text: 'Actions'},
                { link: '/developer/hooks/filters', text: 'Filters'},
                '/developer/functions',
                '/developer/classes',
                { link: '/developer/hooks/snippets', text: 'Code Snippets' },
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
        docsDir: 'um-stripe',
        editLinks: true,
        repo: 'http://github.com/ultimatemember/docs-v3/',
    }),
  
    // custom webpack configuration
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