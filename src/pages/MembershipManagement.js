import { useState } from 'react'
import DateRangeInput from './DateRange/DateRangeInput'
import TanStackTable from './TanStackTable'

export default function MembershipManagement() {
	const handleDateClick = (event) => {
		const btn = document.querySelectorAll('.day-btn')

		for (let index = 0; index < btn.length; index++) {
			btn[index].classList.remove('active')
			if (!btn[index].classList.contains('notActive')) {
				btn[index].classList.add('notActive')
			}
		}
		// 👇️ add class on click
		event.currentTarget.classList.remove('notActive')
		event.currentTarget.classList.add('active')
		// 👇️ remove class on click
	}

	const [isChecked, setIsChecked] = useState(false)

	const handleOnChange = () => {
		setIsChecked(!isChecked)
	}

	return (
		<div className='flex flex-col  '>
			<div className='text-[#2a3958] font-semibold text-xl capitalize mb-4'>member management</div>

			<div className=' bg-slate-100 w-full  rounded-xl shadow-sm mb-5 p-5'>
				<div className='flex gap-2 justify-start items-center mb-4'>
					<span className='w-[80px] text-[#2a3958]'>Join Date</span>
					<button className='day-btn border-[1px] py-2 px-4  border-gray-400 rounded-xl notActive ' onClick={handleDateClick}>
						today
					</button>
					<button className='day-btn border-[1px] py-2 px-4  border-gray-400 rounded-xl notActive ' onClick={handleDateClick}>
						Yesterday
					</button>
					<button className='day-btn border-[1px] py-2 px-4  border-gray-400 rounded-xl notActive ' onClick={handleDateClick}>
						1 week
					</button>
					<button className='day-btn border-[1px] py-2 px-4  border-gray-400 rounded-xl notActive ' onClick={handleDateClick}>
						1 month
					</button>
					<button className='day-btn border-[1px] py-2 px-4  border-gray-400 rounded-xl notActive ' onClick={handleDateClick}>
						3 month
					</button>
					<DateRangeInput />
				</div>
				<div className='flex'>
					<span className='w-[80px] text-[#2a3958]'>Channel </span>
					<div className='flex items-center gap-2'>
						<input type='checkbox' id='topping' name='topping' value='Paneer' checked={isChecked} onChange={handleOnChange} />
						<label for='pc' className=' font-medium text-gray-900 dark:text-gray-300'>
							PC
						</label>
						<div class='checkbox-wrapper-13'>
							<input id='c1-13' type='checkbox' checked={isChecked} />
							<label for='c1-13'>Checkbox</label>
						</div>
					</div>
				</div>
			</div>

			<div className='pt-4 min-h-screen '>
				<TanStackTable />
			</div>
		</div>
	)
}
