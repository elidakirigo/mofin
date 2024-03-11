import {  useState } from 'react'
import Logo from '../components/logo'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
	const [login, setLogin] = useState({ name: '', password: '' })
	const [status, setStatus] = useState(false)
	  const navigate = useNavigate() 

	return (
		<>
			{/* <Header /> */}
			<div className='flex'>
				<div className='h-screen  w-1/2'>
					<img src='https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-cover.fc484909.png&w=3840&q=75' className='w-full h-full' alt='' />
					<div className='absolute top-0 left-16'>
						<Logo />
					</div>
				</div>
				<div className='w-1/2 h-screen flex  justify-center items-center'>
					<form className='max-w-[400px] w-full p-10 '>
						<span className='text-black mb-7 text-right block'>IP : 98.207.254.136</span>
						<div className='md:flex md:items-center mb-6'>
							{/* <div className='md:w-1/3'>
								<label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-full-name'>
									Full Name
								</label>
							</div> */}

							<div className='w-full'>
								<h3>Full Name</h3>
								<input
									className=' appearance-none border-[1px] focus:border-blue-800 rounded-lg w-full py-4 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white border-gray-500/50 shadow focus:ring-2 focus:ring-gray-400'
									id='inline-full-name'
									type='text'
									value={login.name}
									onChange={(e) => {
										setLogin({ ...login, name: e.target.value })
									}}
								/>
							</div>
						</div>
						<div className='md:flex md:items-center mb-6'>
							{/* <div className='md:w-1/3'>
								<label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-password'>
									Password
								</label>
							</div> */}
							{status && (
								<div className='w-full'>
									Password
									<input
										className=' appearance-none border-[1px] focus:border-blue-800 rounded-lg w-full py-4 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white border-gray-500/50 shadow focus:ring-2 focus:ring-gray-400'
										id='inline-full-name'
										type='password'
										placeholder='Enter Your Secret Key'
										value={login.password}
										onChange={(e) => {
											setLogin({ ...login, password: e.target.value })
										}}
									/>
								</div>
							)}
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
								<Link
									className='shadow bg-[#2a3958] hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4  rounded-lg w-full disabled:bg-slate-600 disabled:text-gray-400 disabled:cursor-not-allowed block text-center'
									onClick={() => {
										if (login.name || login.password) setStatus(true)
										if (login.name && login.password) navigate('/')
									}}
								to={'/'}
									disabled={login.name.length < 1 && login.password.length < 1}>
									Login
								</Link>
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
