import Link from 'next/link'

function UMBreadCrumb(props) {
  if (props.type == 'action') {
    var link = <Link href="/developer/hooks/actions/">Actions</Link>
  } else {
    var link = <Link href="/developer/hooks/filters/">Filters</Link>
  }
  return (
    <>
      <ul class="nextra-breadcrumb mt-2.5 flex items-center gap-1 overflow-hidden text-sm text-gray-500 contrast-more:text-current">
        <li
          class="transition-colors whitespace-nowrap min-w-[24px] overflow-hidden text-ellipsis"
          title="Developers"
        >
          Developers
        </li>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-3.5 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <li
          class="transition-colors whitespace-nowrap min-w-[24px] overflow-hidden text-ellipsis"
          title="Hooks Reference"
        >
          Hooks Reference
        </li>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-3.5 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <li
          class="transition-colors whitespace-nowrap text-gray-700 dark:text-gray-400 font-medium contrast-more:font-bold contrast-more:text-current contrast-more:dark:text-current"
          title="Actions"
        >
          {link}
        </li>
      </ul>
    </>
  )
}

export default UMBreadCrumb
