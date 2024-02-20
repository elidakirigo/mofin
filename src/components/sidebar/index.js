import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import ArrowRight from '../svg/arrowRight'
import Logo from '../logo'
import HomeIcon from '../svg/Home'
import UserIcon from '../svg/UserIcon'

export default function SidebarComponent() {
	const { collapseSidebar } = useProSidebar()
	// const [arrowToggle, setArrowToggle] = useState(false)

	// const toggleArrow = () => {}

	return (
		<Sidebar
			className='h-full bg-[#2a3958]'
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
				</MenuItem>
				<MenuItem icon={<HomeIcon />}> Dashboard</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/membershipManagement' />}>
					{' '}
					Membership Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/businessManagement' />}>
					{' '}
					Business Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/fundingManagement' />}>
					{' '}
					Funding Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/investmentManagement' />}>
					{' '}
					Investment Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/recievableManagement' />}>
					{' '}
					Recievable Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/taxManagement' />}>
					{' '}
					Tax Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/paymentManagement' />}>
					{' '}
					Payment Management
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/changehistory' />}>
					{' '}
					change history
				</MenuItem>
				<MenuItem icon={<UserIcon />} component={<Link to='/exhibition' />}>
					{' '}
					exhibition
				</MenuItem>
				<SubMenu icon={<UserIcon />} label='System Management'>
					<MenuItem icon={<UserIcon />}> Pie charts </MenuItem>
					<MenuItem icon={<UserIcon />}> Line charts </MenuItem>
				</SubMenu>
			</Menu>
		</Sidebar>
	)
}
