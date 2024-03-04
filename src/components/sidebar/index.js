import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import ArrowRight from '../svg/arrowRight'
import Logo from '../logo'
// import { useState } from 'react'

export default function SidebarComponent() {
	const { collapseSidebar } = useProSidebar()
	// const [arrowToggle, setArrowToggle] = useState(false)

	// const toggleArrow = () => {}

	return (
		<Sidebar
			style={{ height: '100vh', backgroundColor: 'red' }}
			rootStyles={
				{
					// [`.${sidebarClasses.container}`]: {
					// 	backgroundColor: 'red',
					// },
				}
			}>
			<Menu
				menuItemStyles={{
					button: {
						color: '#fff',

						// [`&.active`]: {
						// 	backgroundColor: '#13395e',
						// 	color: '#b6c8d9',
						// },
					},
					label: {
						display: 'flex',
						// flexWrap:'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
						fontSize: '20px',
						textTransform: 'capitalize',
					},
				}}>
				<MenuItem
					onClick={() => {
						collapseSidebar()
						// toggleArrow()
					}}
					icon={<ArrowRight />}>
					<div style={{ maxWidth: '80%' }}>
						<Logo />
					</div>

					<ArrowRight />
				</MenuItem>
				<MenuItem component={<Link to='/' />}> Dashboard</MenuItem>
				<MenuItem component={<Link to='/membershipManagement' />}> Membership Management</MenuItem>
				<MenuItem component={<Link to='/businessManagement' />}> Business Management</MenuItem>
				<MenuItem component={<Link to='/fundingManagement' />}> Funding Management</MenuItem>
				<MenuItem component={<Link to='/investmentManagement' />}> Investment Management</MenuItem>
				<MenuItem component={<Link to='/recievableManagement' />}> Recievable Management</MenuItem>
				<MenuItem component={<Link to='/taxManagement' />}> Tax Management</MenuItem>
				<MenuItem component={<Link to='/paymentManagement' />}> Payment Management</MenuItem>
				<MenuItem component={<Link to='/changehistory' />}> change history</MenuItem>
				<MenuItem component={<Link to='/exhibition' />}> exhibition</MenuItem>
				<SubMenu label='System Management'>
					<MenuItem> Pie charts </MenuItem>
					<MenuItem> Line charts </MenuItem>
				</SubMenu>
			</Menu>
		</Sidebar>
	)
}
