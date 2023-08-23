import { useMemo } from 'react'
// import {
//     useReactTable,
//     getCoreRowModel,
//     flexRender
// } from '@tanstack/react-table'
const { ColumnDef, flexRender, getCoreRowModel, useReactTable } = require('@tanstack/react-table');

import fdata from './data.json'

// const data = useMemo(() => fdata, [])

// Data format
/* 
{
      "fundDetails": 7,
      "number": 1,
      "user": "true",
      "customer": "N/A",
      "loan": "N/A",
      "emi": "N/A",
      "amount": 1000,
      "type": "credit",
      "updated": "2023-08-07T15:35:02.184Z",
      "lastupdated": "N/A"
}
*/

const columns = [
    {
        header: 'ID',
        accesorKey: 'number',
        footer: 'ID',
    }
]

const table = useReactTable({ data, columns })

const page = ({ data, columns }) => {
  return (
    <div>page</div>
  )
}

export default page