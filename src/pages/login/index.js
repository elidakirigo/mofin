import Button from '../../components/button'
import Header from '../../components/header'
import Input from '../../components/input'

export default function Login() {
	return (
		<>
		<Header/>
			<div className='flex flex-col  justify-center items-center h-[80vh] '>
				
				<Input />
				<Button content={'Login'} color={'#6f80a0'} />
			</div>
		</>
	)
}
