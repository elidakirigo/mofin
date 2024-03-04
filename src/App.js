import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import MembershipManagement from './pages/MembershipManagement'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />}>
					<Route path='/home' element={<Dashboard />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/dashboard/member-management' element={<MembershipManagement />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
