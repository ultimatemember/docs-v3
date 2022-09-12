import UMFooter from '/components/footer'
import UM_Footer_Extras from '/components/UMFooterExtras'
import UM_Algolia_Search from '/components/AlgoliaSearch'
import { IconContext } from 'react-icons'
import { VscGithub } from 'react-icons/vsc'

export default {
  project: {
    link: 'https://github.com/ultimatemember/ultimatemember/',
    icon: <VscGithub />,
  },
  docsRepositoryBase:
    'https://github.com/ultimatemember/ultimatemember/blob/master',
  titleSuffix: ' – Ultimate Member',
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline">
        <img
          src="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-192x192.png"
          style={{
            width: '30px',
            float: 'left',
            'margin-right': '10px',
            'margin-top': '-6px',
          }}
        />
        <span className="relative  hidden lg:block md:inline-block ">
          Ultimate Member
        </span>
      </span>
      <span className="relative text-gray-500">Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Ultimate Member Docs" />
      <meta name="og:description" content="Ultimate Member Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <meta
        name="twitter:site:domain"
        content="https://ultimatememberpro.com"
      />
      <meta name="twitter:url" content="https://ultimatememberpro.com" />
      <meta name="og:title" content="Ultimate Member Docs" />
      <meta
        name="og:image"
        content="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
      <meta
        name="msapplication-TileImage"
        content="https://ultimatemember.com/wp-content/uploads/2022/05/cropped-favicon-32x32.png"
      />
    </>
  ),
  navigation: {
    next: true,
    prev: true,
  },
  search: {
    component: <UM_Algolia_Search />,
  },
  editLink: 'Edit this page on GitHub',
  footer: {
    component: <UMFooter />,
    text() {
      return <>Ultimate Member Group Ltd. © {new Date().getFullYear()} </>
    },
  },
  unstable_faviconGlyph: '👋',
  darkMode: true,
  toc: {
    // extraContent: <img src="https://placekitten.com/g/300/200" />,
    float: true,
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  bodyExtraContent: <UM_Footer_Extras />,
  sidebar: {
    defaultMenuCollapsed: true,
  },
}
