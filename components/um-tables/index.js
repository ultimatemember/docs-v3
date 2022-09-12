import React from 'react'
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
  ButtonCell,
} from './Table' // new
import { data } from './Data'

const getData = () => {
  return data
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Module Name',
        accessor: 'name',
        Cell: AvatarCell,
        imgAccessor: 'imgUrl',
        emailAccessor: 'description',
      },

      {
        Header: '',
        accessor: 'url',
        Cell: ButtonCell,
      },
    ],
    []
  )

  const data = React.useMemo(() => getData(), [])

  return (
    <div>
      <main className="max-w-5xl mx-auto">
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  )
}

export default App
