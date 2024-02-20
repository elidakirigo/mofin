import DateRange from './DateRange/DateRange'
import TanStackTable from './TanStackTable'

export default function MembershipManagement() {
	return (
		<div className='flex flex-col  '>
			<div className='text-[#2a3958] font-semibold text-lg capitalize'>member management</div>

			<div className=' bg-slate-200 w-full h-16 rounded-xl shadow-sm mb-5'>
				<div>
					<span>Join Date -</span>{' '}
					<div className=''>
						<input id='default-checkbox' type='checkbox' value='' class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
						<input checked id='checked-checkbox' type='checkbox' value='' class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
					</div>
				</div>
			</div>
			<div className=''>
				<DateRange />
			</div>

			<div className='pt-4 min-h-screen '>
				<TanStackTable />
			</div>
		</div>
	)
}
