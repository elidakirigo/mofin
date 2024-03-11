import { useEffect, useState } from 'react'

const DebouncedInput = ({ value: initialValue, debounce = 500, onChange, ...props }) => {
	const [value, setValue] = useState()

	// eslint-disable-next-line
	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])
	// eslint-disable-next-line
	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value)
			// eslint-disable-next-line
		}, debounce)

		return () => clearTimeout(timeout)
		// eslint-disable-next-line
	}, [value])

	return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} className='text-black outline-none border-b-2 border-black' />
}

export default DebouncedInput
