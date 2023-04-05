import { useState } from "react"

const Table = ({ rows, columns }) => {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map(
          (_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }, () => 0).map(
                (_, col) => (
                  <td key={col}>
                    Hello
                  </td>
                ),
              )}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

const App = () => {
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  const [newRow, setNewRow] = useState(0)
  const [newCol, setNewCol] = useState(0)

  const addTable= (event) => {
    event.preventDefault()
    const newTable = {
      row: newRow,
      col: newCol
    }
    setRows(newRow)
    setCols(newCol)
    console.log(newTable)
    setNewRow('')
    setNewCol('')
  }

  const handleRowChange= ( {target} ) => {
    setNewRow(target.value)
    console.log(newRow)
  }

  const handleColChange= ( {target} ) => {
    setNewCol(target.value)
    console.log(newCol)
  }
  
  return (
    <div>
      <form onSubmit={addTable} >
        <div>
            Row
            <input
                value={newRow}
                type="number"
                onChange={handleRowChange}
            />
        </div>
        <div>Column
            <input
                value={newCol}
                type="number"
                onChange={handleColChange}
            />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    {Boolean(rows) && Boolean(cols) && (
        <Table rows={rows} columns={cols} />
      )}
    </div>
  )
}

export default App