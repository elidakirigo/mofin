import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/Login'
import MembershipManagement from './pages/MembershipManagement'
import BusinessManagement from './pages/BusinessManagement'
import FundingManagement from './pages/FundingManagement'
import InvestmentManagement from './pages/InvestmentManagement'
import RecievablesManagement from './pages/RecievablesManagement'
import TaxManagement from './pages/TaxManagement'
import PaymentManagement from './pages/PaymentManagement'
import ChangeHistory from './pages/ChangeHistory'
import { useState } from 'react'
import Exhibition from './pages/Exhibition'

function App() {
	const [user] = useState(true)
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={user ? <Navigate to='/membershipManagement' /> : <Login />}></Route>
				<Route path='/' element={!user ? <Navigate to='/login' /> : <Dashboard />}>
					<Route path={`${/membershipManagement || / ? <MembershipManagement /> : <Dashboard />}`} element={<MembershipManagement />}></Route>
					<Route path='/businessManagement' element={<BusinessManagement />}></Route>
					<Route path='/fundingManagement' element={<FundingManagement />}></Route>
					<Route path='/investmentManagement' element={<InvestmentManagement />}></Route>
					<Route path='/recievableManagement' element={<RecievablesManagement />}></Route>
					<Route path='/taxManagement' element={<TaxManagement />}></Route>
					<Route path='/paymentManagement' element={<PaymentManagement />}></Route>
					<Route path='/changehistory' element={<ChangeHistory />}></Route>
					<Route path='/exhibition' element={<Exhibition />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
