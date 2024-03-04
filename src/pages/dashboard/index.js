import Header from '../../components/header'
import SidebarComponent from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
	return (
		<>
			<Header />
			<div className='flex'>
				<SidebarComponent />
					<Outlet />
			</div>
		</>
	)
}
