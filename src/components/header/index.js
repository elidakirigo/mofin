import { Link } from 'react-router-dom'
import Input from '../Input'
import Logo from '../logo'
import BellIcon from '../svg/BellIcon'
import CogIcon from '../svg/CogIcon'
import LinkToIcon from '../svg/LinkToIcon'
import SearchIcon from '../svg/SearchIcon'
import { useState } from 'react'

export default function Header() {
	const [activateNotifs, setActivateNotifs] = useState(false)
	const [activateSettings, setActivateSettings] = useState(false)
	const [activateSearch, setActivateSearch] = useState(false)

	return (
		<div className='border-b-[1px] p-5 w-full flex justify-between shadow absolute top-0 bg-white '>
			<div className='flex justify-center items-center gap-3 ml-20'>
				<div className='max-w-[150px]'>
					<Logo />
				</div>

				<img src='https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg' className='w-[50px] h-[50px]' alt='' />
				<div>
					<h1 className='hidden md:block font-bold'>Excecutive Manager</h1>
					<span className='hidden md:block'>Elida wanjiku</span>
				</div>
			</div>
			<div className='flex gap-2.5 justify-between items-center'>
				<div className='p-3  border-[1px] border-[#2a3958] rounded-xl cursor-pointer relative flex mx-auto' onClick={() => setActivateNotifs(!activateNotifs)}>
					<div className='absolute -top-2 -right-2 rounded-full text-white text-[12px] pt-[1.5px] bg-red-500 text-center w-[20px] h-[20px]'>12</div>
					<BellIcon />
					{activateNotifs && (
						<div className='max-w-[400px] w-[500%] md:max-w-[800px] md:w-[800%] h-[200px] overflow-y-auto overflow-x-hidden absolute border-[1px] border-gray-300 z-50 top-[60px] -left-[100px] rounded-xl shadow-lg bg-white '>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-green-600 rounded-full py-1 px-2'>Approved</span>
								<h3>transaction code:3429678 has been accepted!</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-red-600 rounded-full py-1 px-2'>Denied</span>
								<h3>Sorry we could not process the transaction. Please try again</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-blue-600 rounded-full py-1 px-2'>Updated</span>
								<h3>Congratulations! you can resume with the transaction</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-orange-600 rounded-full py-1 px-2'>pending</span>
								<h3>Sorry our services are a little slow, please wait</h3>
							</div>{' '}
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-green-600 rounded-full py-1 px-2'>Approved</span>
								<h3>transaction code:3429678 has been accepted!</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-red-600 rounded-full py-1 px-2'>Denied</span>
								<h3>Sorry we could not process the transaction. Please try again</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-blue-600 rounded-full py-1 px-2'>Updated</span>
								<h3>Congratulations! you can resume with the transaction</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-orange-600 rounded-full py-1 px-2'>pending</span>
								<h3>Sorry our services are a little slow, please wait</h3>
							</div>{' '}
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-green-600 rounded-full py-1 px-2'>Approved</span>
								<h3>transaction code:3429678 has been accepted!</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-red-600 rounded-full py-1 px-2'>Denied</span>
								<h3>Sorry we could not process the transaction. Please try again</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-blue-600 rounded-full py-1 px-2'>Updated</span>
								<h3>Congratulations! you can resume with the transaction</h3>
							</div>
							<div className='p-4 border-b-[1px] border-b-gray-400/30 flex flex-col md:flex-row gap-2 justify-center items-center text-center md:text-start'>
								<span className='text-white bg-orange-600 rounded-full py-1 px-2'>pending</span>
								<h3>Sorry our services are a little slow, please wait</h3>
							</div>
						</div>
					)}
				</div>
				<div className='hidden md:flex md:justify-center md:items-center border-[1px] focus:border-[#2a3958] rounded-lg w-full py-3 px-4 text-[#2a3958] leading-tight focus:bg-white border-gray-500/50  focus:ring-2 focus:ring-gray-400 relative'>
					<SearchIcon />
					<input className=' appearance-none focus:border-none  focus:outline-none' id='inline-full-name' type='text' value='' onChange={() => {}} placeholder='Menu search' onFocus={() => setActivateSearch(true)} onBlur={() => setActivateSearch(false)} />
					{activateSearch && (
						<div className='max-w-[800px] w-[100%] h-[200px] overflow-y-auto overflow-x-hidden absolute border-[1px] border-gray-300 z-50 top-[60px] -left-[60px] rounded-xl shadow-lg bg-white '>
							<Link to={'/businessManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								business Management
							</Link>
							<Link to={'/membershipManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								membership Management
							</Link>
							<Link to={'/fundingManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								funding Management
							</Link>{' '}
							<Link to={'/investmentManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								investment Management
							</Link>{' '}
							<Link to={'/recievableManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								recievable Management
							</Link>{' '}
							<Link to={'/taxManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								tax tax Management
							</Link>{' '}
							<Link to={'/paymentManagement'} className='p-4 border-b-[1px] border-b-gray-400/30 w-full block font-semibold hover:bg-white hover:text-[#2a3958]'>
								payment Management
							</Link>
						</div>
					)}
				</div>

				<Link to={'/login'} className='p-3  border-[1px] border-[#2a3958] rounded-xl cursor-pointer'>
					<LinkToIcon />
				</Link>
				<div className='p-3  border-[1px] border-[#2a3958] rounded-xl cursor-pointer relative' onClick={() => setActivateSettings(!activateSettings)}>
					<CogIcon />
					{activateSettings && (
						<div className=' w-[170%]  overflow-y-auto overflow-x-hidden absolute border-[1px] border-gray-300 z-50 top-[60px] -left-[30px] rounded-xl shadow-lg bg-white p-3'>
							<h3 className=' border-b-[1px] border-b-gray-400/30'>Profile</h3>
							<Link className='' to={'/login'}>LogOut</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
