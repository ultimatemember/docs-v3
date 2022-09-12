import '../styles.css'
import 'nextra-theme-docs/style.css'

import Prism from 'prism-react-renderer/prism'
import 'prism-react-renderer/themes/vsDark'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  )
}
