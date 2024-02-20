import Input from '../components/Input'
import Button from '../components/button'
import Header from '../components/header'

export default function Login() {
	return (
		<>
			{/* <Header /> */}
			<div className='flex'>
				<div className='h-screen  w-1/2'>
					<img src='https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-cover.fc484909.png&w=3840&q=75' className='w-full h-full'/>
				</div>
				<div className='w-1/2 h-screen flex  justify-center items-center'>
					<form className='max-w-[400px] w-full p-10 '>
						<div className='md:flex md:items-center mb-6'>
							{/* <div className='md:w-1/3'>
								<label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-full-name'>
									Full Name
								</label>
							</div> */}
							<div className='w-full'>
								<Input />
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							{/* <div className='md:w-1/3'>
								<label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-password'>
									Password
								</label>
							</div> */}
							<div className='w-full'>
								<Input />
							</div>
						</div>
						{/* <div className='md:flex md:items-center mb-6'>
							<div className='md:w-1/3'></div>
							<label className='md:w-2/3 block text-gray-500 font-bold'>
								<input className='mr-2 leading-tight' type='checkbox' />
								<span className='text-sm'>Send me your newsletter!</span>
							</label>
						</div> */}
						<div className='md:flex md:items-center'>
							{/* <div className='md:w-1/3'></div> */}
							<div className='w-full'>
								<button className='shadow bg-[#2a3958] hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4  rounded-lg w-full' type='button'>
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			{/* <div className='flex flex-col  justify-center items-center h-[80vh] '>
				<Input />
				<Button content={'Login'} color={'#6f80a0'} />
			</div> */}
		</>
	)
}
