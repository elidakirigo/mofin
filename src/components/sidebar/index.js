import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import ArrowRight from '../svg/arrowRight'
import Logo from '../logo'
import HomeIcon from '../svg/Home'
import UserIcon from '../svg/UserIcon'
import { useState } from 'react'
import BriefCase from '../svg/BriefCase'
import Euros from '../svg/Euros'
import Chart from '../svg/Chart'
import Info from '../svg/info'
import PaymentCard from '../svg/PaymentCard'
import Tax from '../svg/Tax'
import Exhibition from '../svg/Exhibition'
import System from '../svg/System'

export default function SidebarComponent() {
	const { collapseSidebar } = useProSidebar()
	// const [isCollapsed, setIsCollapsed] = useState(false)

	// const [arrowToggle, setArrowToggle] = useState(false) 

	// const toggleArrow = () => {}

	return (
		<div
			style={{
				' .ps-menu-root': {
					backgroundColor: 'yellow !important',
					width: '300px !important',
				},
			}}>
			<Sidebar
				className='h-[100%] min-h-screen overflow-y-auto'
				rootStyles={{
					' .ps-sidebar-root': {
						backgroundColor: 'yellow !important',
						width: '300px !important',
					},
					' .ps-sidebar-container': {
						backgroundColor: 'white !important',
						color: '#2a3958 !important',
					},
					' .ps-menu-button': {
						color: '#2a3958 !important',

					},
					' .ps-menu-button:hover': {
						color: '#fff !important',
						backgroundColor: '#224ba2 !important',
					},
					'& .ps-menuitem-root.active': {
						color: '#2a3958 !important',
						backgroundColor: '#cecece !important',
					},
				}}>
				<Menu
					menuItemStyles={{
						button: {
							color: '#fff',
						},
						label: {
							display: 'flex',
							// flexWrap:'wrap',
							justifyContent: 'space-between',
							alignItems: 'center',
							fontSize: '17px',
							textTransform: 'capitalize',
						},
					}}>
					<MenuItem
						onClick={() => {
							collapseSidebar()
							// toggleArrow()
						}}
						icon={<ArrowRight />}
						className='mt-[20px] mb-[80px] w-[100%]'>
						<div>
							<Logo />
						</div>
					</MenuItem>
					<MenuItem icon={<HomeIcon />} active={'Dashboard'}>
						{' '}
						Dashboard
					</MenuItem>
					<MenuItem icon={<UserIcon />} component={<Link to='/membershipManagement' />}>
						{' '}
						Membership Management
					</MenuItem>
					<MenuItem icon={<BriefCase />} component={<Link to='/businessManagement' />}>
						{' '}
						Business Management
					</MenuItem>
					<MenuItem icon={<Euros />} component={<Link to='/fundingManagement' />}>
						{' '}
						Funding Management
					</MenuItem>
					<MenuItem icon={<Chart />} component={<Link to='/investmentManagement' />}>
						{' '}
						Investment Management
					</MenuItem>
					<MenuItem icon={<Info />} component={<Link to='/recievableManagement' />}>
						{' '}
						Recievable Management
					</MenuItem>
					<MenuItem icon={<PaymentCard />} component={<Link to='/taxManagement' />}>
						{' '}
						Tax Management
					</MenuItem>
					<MenuItem icon={<Tax />} component={<Link to='/paymentManagement' />}>
						{' '}
						Payment Management
					</MenuItem>
					<MenuItem icon={<System />} component={<Link to='/changehistory' />}>
						{' '}
						change history
					</MenuItem>
					<MenuItem icon={<Exhibition />} component={<Link to='/exhibition' />}>
						{' '}
						exhibition
					</MenuItem>
					<SubMenu icon={<System />} label='System Management'>
						<MenuItem icon={<UserIcon />}> Pie charts </MenuItem>
						<MenuItem icon={<UserIcon />}> Line charts </MenuItem>
					</SubMenu>
				</Menu>
			</Sidebar>
		</div>
	)
}
