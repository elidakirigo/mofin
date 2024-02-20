import * as XLSX from 'xlsx/xlsx.mjs'
import Download from '../../components/svg/Download'

const DownloadBtn = ({ data = [], fileName, disabled }) => {
	return (
		<button
			onClick={() => {
				const datas = data?.length ? data : []
				const worksheet = XLSX.utils.json_to_sheet(datas)
				const workbook = XLSX.utils.book_new()
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
				XLSX.writeFile(workbook, fileName ? `${fileName}` : 'mofin.xlsx')
			}}
			className='bg-[#2a3958] hover:bg-gray-700 hover:text-[#2a3958] fill-white hover:fill-[#2a3958] px-4 py-3 flex text-white items-center gap-2 rounded-xl cursor-pointer disabled:bg-[#2a395881] disabled:text-white disabled:cursor-not-allowed'
			disabled={disabled}>
			{' '}
			Excel Download
			<Download />
		</button>
	)
}

export default DownloadBtn
