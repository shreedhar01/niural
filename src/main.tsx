import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import {
  Landing,
  Pricing,
  NotFound,
  Announcement
} from "./pages"
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
import {
  Careers,
  ContactUs,
  Legal,
  PartnerProgram,
  PressAndMedia
} from "./pages/company"

import {
  AiRiskAnalyzer,
  Blogs,
  CaseStudies,
  Glossary
} from "./pages/resources"

import {
  HR,
  Operations,
  Payrolls
} from "./pages/solutions"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/niural' element={<App />} >
          <Route index element={<Landing />} />
          <Route path='products'>
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
          <Route path='company'>
            <Route path='careers' element={<Careers />} />
            <Route path='contact_us' element={<ContactUs />} />
            <Route path='legal' element={<Legal />} />
            <Route path='partner_program' element={<PartnerProgram />} />
            <Route path='press_&_media' element={<PressAndMedia />} />
          </Route>
          <Route path='resources'>
            <Route path='ai_risk_analyzer' element={<AiRiskAnalyzer />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='case_studies' element={<CaseStudies />} />
            <Route path='glossary' element={<Glossary />} />
          </Route>
          <Route path='solutions'>
            <Route path='hr' element={<HR />} />
            <Route path='operations' element={<Operations />} />
            <Route path='payrolls' element={<Payrolls />} />
          </Route>
          <Route path='pricing' element={<Pricing />} />
          <Route path="announcement/:id" element={<Announcement />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
