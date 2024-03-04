import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import ArrowRight from '../svg/arrowRight'
// import { useState } from 'react'

export default function SidebarComponent() {
	const { collapseSidebar } = useProSidebar()
	// const [arrowToggle, setArrowToggle] = useState(false)

	// const toggleArrow = () => {}

	return (
		<Sidebar
			style={{ height: '100vh', backgroundColor: 'red' }}
			rootStyles={{
				// [`.${sidebarClasses.container}`]: {
				// 	backgroundColor: 'red',
				// },
			}}>
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
					},
				}}>
				<MenuItem
					onClick={() => {
						collapseSidebar()
						// toggleArrow()
					}}
					icon={<ArrowRight />}>
					<div style={{ maxWidth: '80%' }}>
						<img src={process.env.REACT_APP_SITE_LOGO} alt='' />
					</div>

					<ArrowRight />
				</MenuItem>
				<MenuItem component={<Link to='/calendar' />}> Calendar</MenuItem>
				<MenuItem component={<Link to='/e-commerce' />}> E-commerce</MenuItem>
				<SubMenu label='Charts'>
					<MenuItem> Pie charts </MenuItem>
					<MenuItem> Line charts </MenuItem>
				</SubMenu>
				<MenuItem> Documentation </MenuItem>
				<MenuItem> Calendar </MenuItem>
			</Menu>
		</Sidebar>
	)
}
