import { DatePicker } from 'antd'
// import { useState } from 'react'
// // import 'antd/dist/antd.css'
// import moment from 'moment'

const DateRangeInput = () => {
	const { RangePicker } = DatePicker
	// const [dates, setDates] = useState([])

	return <RangePicker 
	// onChange={(value) => 
	// 	setDates(value.map((item) => moment(item).format('DD-MM-YYYY')))} 
	className=' p-3 flex-grow' />
}

export default DateRangeInput
