import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import {format} from 'date-fns'

const DateRange = () => {
	const [date, setDate] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	})

	const [openDate, setOpenDate] = useState(false)

	const handleChange = (ranges) => {
		setDate(ranges.selection)
	}

	const handleClick = () => {setOpenDate(!openDate)}
	// const handleClick = () => {
	// 	// or
	// 	setOpenDate((prev) => !prev)
	// }

	return (
		<div className='flex flex-col  items-center h-[100vh]'>
			<div className='flex'>
				<input className=' appearance-none border-[1px] focus:border-blue-800 rounded-lg w-full py-4 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white border-gray-500/50 shadow focus:ring-2 focus:ring-gray-400' id='inline-full-name' type='text'  value={format(date.startDate,'MMM,dd,yyyy')} onFocus={handleClick}  />
				<input className=' appearance-none border-[1px] focus:border-blue-800 rounded-lg w-full py-4 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white border-gray-500/50 shadow focus:ring-2 focus:ring-gray-400' id='inline-full-name' type='text'  value={format(date.endDate,'MMM,dd,yyyy')}  onFocus={handleClick}  />
			</div>

			{openDate && <DateRangePicker className='' ranges={[date]} onChange={handleChange} minDate={new Date()} />}
		</div>
	)
}

export default DateRange
