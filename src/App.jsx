import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import SignInForm from './pages/authentication/buyer/user-sign-in';
import SignUpForm from './pages/authentication/buyer/user-sign-up';
import SignIn from './pages/Signin';
import ForgotPassword from './pages/authentication/buyer/forgortPassword';
import Verification from './pages/authentication/buyer/token-verification';
import EmailVerification from './pages/authentication/buyer/email-verification';
import ResetPassword from './pages/authentication/buyer/user-reset-password';
import CompanySignInForm from './pages/authentication/company/company-signin';
import CompanySignUpForm from './pages/authentication/company/company -signup';


function App() {


  return (
    <>
          <Router>
      {/* <MainLayout> */}
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          

          {/* Authentication Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/buyer-signin" element={<SignInForm />} />
          <Route path="/buyer-signup" element={<SignUpForm />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/token-verification" element={<Verification />} />
          <Route path="/email-verification" element={<EmailVerification />} /> 
          <Route path="/user-reset-password" element={<ResetPassword />} />
          <Route path="/company-signin" element={<CompanySignInForm />} />
          <Route path="/company-signup" element={<CompanySignUpForm />} />
        </Routes>

        
      {/* </MainLayout> */}
    </Router>

    </>
  )
}

export default App
