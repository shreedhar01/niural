import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import {
  Ap_and_ar,
  Contractor_management,
  HireEmployees,
  Hire_contractor,
  Hris,
  Partners,
  Payroll,
  Peo,
  Wallet
} from "./pages/products"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Landing />} />
          <Route path='/products'>
            <Route path='peo' element={<Peo />} />
            <Route path='hris' element={<Hris />} />
            <Route path='wallet' element={<Wallet />} />
            <Route path='payroll' element={<Payroll />} />
            <Route path='partners' element={<Partners />} />
            <Route path='pay' element={<Ap_and_ar />} />
            <Route path='hire_employees' element={<HireEmployees />} />
            <Route path='hire_contractors' element={<Hire_contractor />} />
            <Route path='contractor_management' element={<Contractor_management />} />
          </Route>
          <Route path='/pricing' element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
