import React from 'react'
import Link from 'next/link'
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from 'react-table'
import { Button, PageButton } from './shared/Button'
import { classNames } from './shared/Utils'
import { SortIcon, SortUpIcon, SortDownIcon } from './shared/Icons'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = (value) => {
    setGlobalFilter(value || undefined)
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="flex grow ">
          <span className="relative font-bold">
            <h2 className="text-lg">Browse by Modules</h2>
          </span>
        </div>
        <div className="flex">
          <input
            type="text"
            className="p-1 font-medium rounded-md border-solid border sm:w-auto lg:w-full md:w-1/2 float-right"
            value={value || ''}
            onChange={(e) => {
              setValue(e.target.value)
              onChange(e.target.value)
            }}
            placeholder={`Search for modules...`}
          />
        </div>
      </div>
    </>
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render('Header')}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : 'unknown'

  return (
    <span
      className={classNames(
        'px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm',
        status.startsWith('active') ? 'bg-green-100 text-green-800' : null,
        status.startsWith('inactive') ? 'bg-yellow-100 text-yellow-800' : null,
        status.startsWith('offline') ? 'bg-red-100 text-red-800' : null
      )}
    >
      {status}
    </span>
  )
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex pa-0 ma-0 w-100" style={{ width: '80%' }}>
      <div className="flex-shrink-0 h-10 w-10 pa-0 ma-0">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-md font-bold mt-2">{value}</div>
        {/* <div className="text-sm break-words">
          {row.original[column.emailAccessor]}
        </div> */}
      </div>
    </div>
  )
}

export function ButtonCell({ value, column, row }) {
  return (
    <>
      <Link href={row.original['url']}>
        <a
          className="button border text-md sm:text-sm py-1 px-2 mt-2 w-30 rounded float-right"
          style={{ width: '100px', 'text-align': 'center' }}
        >
          Visit Doc
        </a>
      </Link>
    </>
  )
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8, noDataText: 'No modules found...' },
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  )

  // Render the UI for your table
  return (
    <>
      <div className="">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="" key={column.id}>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}
      </div>
      {/* table */}
      <div className="flex flex-col mt-4">
        <div className="">
          <div className="">
            <div className="sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y ">
                <tbody {...getTableBodyProps()} className="divide-y">
                  {page.map((row, i) => {
                    // new
                    prepareRow(row)
                    return (
                      <tr className="border-t border-gray-300 dark:border-gray-700 sm:float-none md:float-left  w-1/2 sm:w-auto md:w-1/2">
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 "
                              style={{ width: '100%' }}
                              role="cell"
                            >
                              {cell.column.Cell.name === 'defaultRenderer' ? (
                                <div className="text-sm ">
                                  {cell.render('Cell')}
                                </div>
                              ) : (
                                cell.render('Cell')
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="justify-between">
        <div className="py-3 flex float-right ">
          <Button
            className="py-1 px-2 mt-2 rounded"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button
            className="py-1 ml-2 px-2 mt-2 rounded float-right"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
        <div className="py-3 hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm ">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{' '}
              <span className="font-medium">{pageOptions.length}</span> - Total
              {': '}
              {preGlobalFilteredRows.length}
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
    </>
  )
}

export default Table
