import { useEffect, useState } from 'react'

const DebouncedInput = ({ value: initialValue, debounce = 500, onChange, ...props }) => {
	const [value, setValue] = useState()

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value)
		}, debounce)

		return () => clearTimeout(timeout)
	}, [value])

	return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export default DebouncedInput
