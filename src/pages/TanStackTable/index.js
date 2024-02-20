import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { USERS } from '../../components/data'
import { useState } from 'react'
import DownloadBtn from './DownloadBtn'
import DebouncedInput from './DebouncedInput'

const TanStackTable = () => {
	const [data, setData] = useState([...USERS])
	// const [data] = useState(() =>[ ...USERS])
	const [globalFilter, setGlobalFilter] = useState(' ')

	const columnHelper = createColumnHelper()
	const columns = [
		columnHelper.accessor('', {
			id: 'S.No',
			cell: (info) => <span>{info.row.index + 1}</span>,
			header: 'No.',
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

	const table = useReactTable({
		data,
		columns,
		state: { globalFilter },
		getFilteredRowModel: getFilteredRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})

	const HeaderGroups = table.getHeaderGroups()

	return (
		<div className='p-2 max-w-5xl mx-auto text-white fill-gray-400'>
			{/* {JSON.stringify(USERS)} */}
			<div className='flex justify-between mb-3'>
				<DebouncedInput />
				<DownloadBtn data={data} fileName={'Users'} />
			</div>

			<table className=' w-full text-left rounded'>
				<thead className='bg-indigo-600 '>
					{HeaderGroups.map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className='px-3.5 capitalize py-3 text-lg'>
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
			<div className='flex items-center justify-center my-5 gap-4 '>
				<button
					onClick={() => {
						table.previousPage()
					}}
					className='p-1 border border-gray-300 px-2 disabled:opacity-30 rounded-xl'
					disabled={!table.getCanPreviousPage()}>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
					</svg>
				</button>
				<span className='flex items-center gap-1'>
					<div>Page</div>
					<strong>
						{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</strong>
				</span>

				<button
					onClick={() => {
						table.nextPage()
					}}
					className='p-1 border border-gray-300 px-2 disabled:opacity-30 rounded-xl'
					disabled={!table.getCanNextPage()}>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
						<path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
					</svg>
				</button>
				<span className='flex items-center gap-1 '>
					| Go to page:
					<input
						type='number'
						defaultValue={table.getState().pagination.pageIndex + 1}
						disabled={table.getState().pagination.pageIndex < 0}
						className='border p-1 rounded-xl w-16 bg-transparent'
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0
							table.setPageIndex(page)
						}}
					/>
				</span>
				<select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value))
					}}
					className='p-2 bg-gray-300 w-30 border-[1px] rounded-xl border-gray-100 text-black'>
					{[5, 10, 20, 30, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize} className='bg-transparent'>
							show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default TanStackTable
