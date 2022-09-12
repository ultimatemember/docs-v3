import { IconContext } from 'react-icons'
import Link from 'next/link'

import { AiFillDislike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'

export default function () {
  return (
    <>
      <button class="bg-transparent font-semibold  py-2 px-2 mr-3 border hover:border-um rounded ">
        <IconContext.Provider
          value={{
            className: 'um-icons-inline',
            style: { 'font-size': '20px' },
          }}
        >
          <AiFillLike />
        </IconContext.Provider>
      </button>
      <button class="bg-transparent font-semibold  py-2 px-2 border hover:border-um rounded ">
        <IconContext.Provider
          value={{
            className: 'um-icons-inline',
            style: { 'font-size': '20px' },
          }}
        >
          <AiFillDislike />
        </IconContext.Provider>
      </button>
    </>
  )
}
