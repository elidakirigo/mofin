const CheckBox = ({ content, checked, onChange, id }) => {
	return (
		<div className='checkbox-wrapper-42'>
			<input id={`${content}`} type='checkbox' checked={checked} onChange={onChange}/>
			<label className='cbx' htmlFor={content}></label>
			<label className='lbl' htmlFor={content}>
				{content}
			</label>
		</div>
	)
}

export default CheckBox
