import { useRouter } from 'next/router'
import { IconContext } from 'react-icons'

import { FaUserFriends } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'
import Link from 'next/link'

import GitEditURL from './GitEditURL'
import UMSurvey from './UMSurvey'

function Footer() {
  const router = useRouter()
  if (router.pathname === '/') return <></>

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div>
          <h3 className="text-md font-bold mb-5">Did this doc help you?</h3>
          <div className="text-sm">
            <UMSurvey />
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold  mb-5">
            Help us make these docs great!
          </h3>
          <div className="text-sm">
            <p>
              All Ultimate Member docs are open source. See something that's
              wrong or unclear? Submit a pull request.
            </p>
            <GitEditURL />
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold  mb-5">Still need help?</h3>
          <div className="text-sm">
            <p>
              <Link href="https://wordpress.org/support/plugin/ultimate-member/">
                <a>
                  <IconContext.Provider
                    value={{ className: 'um-icons-inline' }}
                  >
                    <FaUserFriends />
                  </IconContext.Provider>
                  Create a topic on WP.org forum
                </a>
              </Link>
            </p>
            <p>
              <Link href="https://ultimatemember.com/support/">
                <a className="py-2 block">
                  <IconContext.Provider
                    value={{ className: 'um-icons-inline' }}
                  >
                    <TbMessages />
                  </IconContext.Provider>
                  Contact Support
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
