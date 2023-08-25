"use client"

import { useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table'
// const { flexRender, getCoreRowModel, useReactTable } = require('@tanstack/react-table');

import fdata from './data.json'

/* 
{
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



const page = () => {

  const data = useMemo(() => fdata, [])

  /**@type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: 'ID',
      accesorKey: 'number',
      footer: 'ID',
    },
    {
      header: 'User',
      accesorKey: 'user',
      footer: 'User',
    },
    {
      header: 'Customer',
      accesorKey: 'customer',
      footer: 'Customer',
    },

    {
      header: 'Loan',
      accesorKey: 'loan',
      footer: 'Loan',
    },
    {
      header: 'EMI',
      accesorKey: 'emi',
      footer: 'EMI',
    },
    {
      header: 'Amount',
      accesorKey: 'amount',
      footer: 'Amount',
    },
    {
      header: 'Type',
      accesorKey: 'type',
      footer: 'Type',
    },
    {
      header: 'Updated',
      accesorKey: 'updated',
      footer: 'Updated',
    },
    {
      header: 'Lastupdated',
      accesorKey: 'lastupdated',
      footer: 'Lastupdated',
    },
  ]

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), })


  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-10'>
      
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header, header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

        </tbody>

        <tfoot>

        </tfoot>
      </table>
    </div>
  )
}

export default page