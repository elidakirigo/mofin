import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />}>
					<Route path='/home' element={<Dashboard />}></Route>
					{/*<Route path='/profile' element={<Profile />}></Route>
					<Route path='/create' element={<AddEmployee />}></Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

