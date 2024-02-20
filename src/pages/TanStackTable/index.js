import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { USERS } from '../../components/data'
import { useState } from 'react'

const TanStackTable = () => {
	const [data, setData] = useState([...USERS])
	// const [data] = useState(() =>[ ...USERS])

	const columnHelper = createColumnHelper()
	const columns = [
		columnHelper.accessor('', {
			id: 'S.No',
			cell: (info) => <span>{info.row.index + 1}</span>,
			header: 'S.No',
		}),
		columnHelper.accessor('profile', {
			cell: (info) => <img src={info.getValue()} alt='...' className='rounded-full w-10 h-10 object-cover' />,
			header: 'Profile',
		}),
		columnHelper.accessor('firstname', {
			cell: (info) => <span>{info.getValue()}</span>,
			header: 'First Name',
		}),
		columnHelper.accessor('lastname', {
			cell: (info) => <span>{info.getValue()}</span>,
			header: 'Last Name',
		}),
		columnHelper.accessor('age', {
			cell: (info) => <span>{info.getValue()}</span>,
			header: 'Age',
		}),
		columnHelper.accessor('visits', {
			cell: (info) => <span>{info.getValue()}</span>,
			header: 'Visits',
		}),
		columnHelper.accessor('progress', {
			cell: (info) => <span>{info.getValue()}</span>,
			header: 'Progress',
		}),
	]

	const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

	const HeaderGroups = table.getHeaderGroups()

	return (
		<div className='p-2 max-w-5xl mx-auto text-white fill-gray-400'>
			{/* {JSON.stringify(USERS)} */}
			<table className='border border-gray-700 w-full text-left'>
				<thead className='bg-indigo-600 '>
					{HeaderGroups.map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className='px-3.5 capitalize py-2'>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.length
						? table.getRowModel().rows.map((row, i) => (
								<tr key={row.id} className={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id} className='px-3.5 py-2'>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
						  ))
						: null}
				</tbody>
			</table>
			{/* pagination */}
			<div className='flex items-center justify-end mt-2 gap-2'>
				<button onClick={() => {}} className='p-1 border border-gray-300 px-2 disabled:opacity-30'>
					{'<'}
				</button>
				<button onClick={() => {}} className='p-1 border border-gray-300 px-2 disabled:opacity-30'>
					{'>'}
				</button>
			</div>
		</div>
	)
}

export default TanStackTable
