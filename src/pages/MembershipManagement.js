import { useState } from 'react'
import DateRangeInput from './DateRange/DateRangeInput'
import TanStackTable from './TanStackTable'
import CheckBox from '../components/checkBox'
import { Data } from '../components/data'

export default function MembershipManagement() {
	const fillArray = (arrayLength, data) => new Array(arrayLength).fill(data)
	// const [checkDate, setCheckDate] = useState(fillArray(btn.length, 'notActive'))
	const [checkedChannel, setCheckedChannel] = useState(fillArray(5, false))
	const [checkedpost, setCheckedPost] = useState(fillArray(5, false))
	// console.log(checkedChannel)
	const handleDateClick = (event = null) => {
		const btn = document.querySelectorAll('.day-btn')

		for (let index = 0; index < btn.length; index++) {
			btn[index].classList.remove('active')
			if (!btn[index].classList.contains('notActive')) {
				btn[index].classList.add('notActive')
			}
		}
		// 👇️ add class on click
		event?.currentTarget.classList.remove('notActive')
		event?.currentTarget.classList.add('active')
		// 👇️ remove class on click
	}

	const handleChannelChange = (position = null, data = null) => {
		const updatedCheckedChannel = checkedChannel.map((item, index) => (index === data?.indexOf(position?.target.id) ? !item : false))
		setCheckedChannel(updatedCheckedChannel)
	}

	const handlePostChange = (position = null, data = null) => {
		const updatedCheckedPost = checkedpost.map((item, index) => (index === data?.indexOf(position?.target.id) ? !item : false))
		setCheckedPost(updatedCheckedPost)
	}

	const handleReset = () => {
		handleDateClick()
		handlePostChange()
		handleChannelChange()
	}

	const CheckBoxMapping = ({ data, choice, fn }) => data.map((content, i) => <CheckBox id={i} checked={choice[i]} content={content} onChange={(e) => fn(e, data)} />)

	return (
		<div className='flex flex-col '>
			<div className='text-[#2a3958] font-semibold text-xl capitalize mb-4'>member management</div>

			<div className='  bg-slate-100 w-full  rounded-xl shadow-sm mb-5 p-5'>
				<div className='flex  flex-wrap gap-2 justify-start items-center mb-4'>
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
				<div className='flex mb-4 flex-wrap'>
					<span className='w-[80px] text-[#2a3958]'>Channel </span>
					<div className='flex flex-wrap items-center gap-2 ml-2'>
						<CheckBoxMapping data={Data.channel} choice={checkedChannel} fn={handleChannelChange} />
					</div>
				</div>
				<div className='flex flex-wrap mb-4'>
					<span className='w-[80px] text-[#2a3958]'>Posting </span>
					<div className='flex flex-wrap items-center gap-2 ml-2'>
						<CheckBoxMapping data={Data.posting} choice={checkedpost} fn={handlePostChange} />
					</div>
				</div>
				<div className='flex '>
					<button className='  bg-[#2a3958] py-3 px-5 rounded-xl text-white mx-auto mt-5'>Search</button>
					<button className='bg-[#fff] py-3 px-5 rounded-xl text-[#2a3958] border-gray-500 border-[1px] mx-auto mt-5' onClick={handleReset}>
						Reset
					</button>
				</div>
			</div>

			<div className='pt-4 min-h-screen '>
				<TanStackTable />
			</div>
		</div>
	)
}
