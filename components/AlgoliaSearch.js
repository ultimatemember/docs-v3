import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DocSearch } from '@docsearch/react'

import '@docsearch/css'

export default function () {
  // DocSearch({
  //   container: '#docsearch',
  //   appId: '94b1e214a0e3e95100963b327a07a36a',
  //   indexName: 'um_doc',
  //   apiKey: 'YOUR_SEARCH_API_KEY',
  // })

  const router = useRouter()
  if (router.pathname === '/') return <></>

  // DocSearch({
  //   appId: 'R2IYF7ETH7',
  //   apiKey: '599cec31baffa4868cae4e79f180729b',
  //   indexName: 'docsearch',
  // })

  return (
    <DocSearch
      appId="TLV08NQE8S"
      apiKey="1e651f1c423582bce73e5d6295e23158"
      indexName="ultimatememberpro"
    />
  )

  return (
    <div className="relative flex items-center text-gray-900 dark:text-gray-300 contrast-more:text-gray-800 contrast-more:dark:text-gray-300">
      <input
        id="algolia-doc-search"
        className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors md:text-sm text-base leading-tight bg-black/[.03] dark:bg-gray-50/10 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:bg-dark dark:focus:ring-gray-100/20 placeholder:text-gray-400 dark:placeholder:text-gray-500 contrast-more:border contrast-more:border-current"
        type="search"
        placeholder="Search documentation...."
      />
      <div className="docsearch"></div>
    </div>
  )
}
