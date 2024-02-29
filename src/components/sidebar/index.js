import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

export default function SidebarComponent() {
	return (
		<Sidebar>
			<Menu>
				<Menu
					menuItemStyles={{
						button: {
							backgroundColor: 'var(--primary-blue)',
							color: '#fff',
							// the active class will be added automatically by react router
							// so we can use it to style the active menu item

							[`&.active`]: {
								backgroundColor: '#13395e',
								color: '#b6c8d9',
							},
						},
					}}>
					<MenuItem component={<Link to='/documentation' />}>
						<img src={process.env.REACT_APP_SITE_LOGO} />
					</MenuItem>
					<MenuItem component={<Link to='/calendar' />}> Calendar</MenuItem>
					<MenuItem component={<Link to='/e-commerce' />}> E-commerce</MenuItem>
				</Menu>
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
