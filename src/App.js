import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import MembershipManagement from './pages/MembershipManagement'
import BusinessManagement from './pages/BusinessManagement'
import FundingManagement from './pages/FundingManagement'
import InvestmentManagement from './pages/InvestmentManagement'
import RecievablesManagement from './pages/RecievablesManagement'
import TaxManagement from './pages/TaxManagement'
import PaymentManagement from './pages/PaymentManagement'
import ChangeHistory from './pages/ChangeHistory'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />}>
					<Route path='/membershipManagement' element={<MembershipManagement />}></Route>
					<Route path='/businessManagement' element={<BusinessManagement />}></Route>
					<Route path='/fundingManagement' element={<FundingManagement />}></Route>
					<Route path='/investmentManagement' element={<InvestmentManagement />}></Route>
					<Route path='/recievableManagement' element={<RecievablesManagement />}></Route>
					<Route path='/taxManagement' element={<TaxManagement />}></Route>
					<Route path='/paymentManagement' element={<PaymentManagement />}></Route>
					<Route path='/changehistory' element={<ChangeHistory />}></Route>
				</Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
