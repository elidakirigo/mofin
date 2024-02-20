const CheckBox = ({ content ,isChecked,onChange,i}) => {
	return (
		<div className='checkbox-wrapper-46' key={i}>
			<input className='inp-cbx' id={`${content} 'cbx-46'`} type='checkbox' checked={isChecked} onChange={onChange}/>
			<label className='cbx' for={content}>
				<span>
					<svg width='12px' height='10px' viewbox='0 0 12 10'>
						<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
					</svg>
				</span>
				<span>{content}</span>
			</label>
		</div>
	)
}

export default CheckBox
