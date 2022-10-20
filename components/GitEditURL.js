import parseGitUrl from 'parse-git-url'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { IconContext } from 'react-icons'
import { AiOutlinePullRequest } from 'react-icons/ai'
import Link from 'next/link'

export default function getGitEditUrl() {
  const config = useConfig()
  const router = useRouter()
  const filePath = router.pathname
  const repo = parseGitUrl(config.docsRepositoryBase || '')
  if (!repo) throw new Error('Invalid `docsRepositoryBase` URL!')

  const subdir = 'pages'
  const path = `blob/${'master/' || '/main'}${subdir}${filePath}`

  switch (repo.type) {
    case 'github':
      return (
        <Link
          href={
            'https://github.com/' + repo.owner + '/docs-v3/' + path + '.mdx'
          }
        >
          <a className="bg-transparent font-semibold  py-2 px-4 border hover:border-um rounded my-3 mt-25 inline-block">
            <IconContext.Provider value={{ className: 'um-icons-inline' }}>
              <AiOutlinePullRequest />
            </IconContext.Provider>
            Make a contribution
          </a>
        </Link>
      )
  }
  return ''
}
