
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Component/Layout/Layout";
import Home from "../src/Component/Pages/Home/Home";
import Features from "./Component/Pages/Features/Features";
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import ManageProperties from './pages/manage/ManageProperties';
import AddProperties from './pages/manage/AddProperties';
import Preview from './pages/manage/Preview';
import Messages from './pages/Messages';
import SignInForm from './pages/authentication/buyer/user-sign-in';
import SignUpForm from './pages/authentication/buyer/user-sign-up';
import SignIn from './pages/Signin';
import ForgotPassword from './pages/authentication/buyer/forgortPassword';
import Verification from './pages/authentication/buyer/token-verification';
import EmailVerification from './pages/authentication/buyer/email-verification';
import ResetPassword from './pages/authentication/buyer/user-reset-password';
import CompanySignInForm from './pages/authentication/company/company-signin';
import CompanySignUpForm from './pages/authentication/company/company -signup';
import Inquiries from './pages/Inquiries';



function App() {
  return (
    <>
      
        

          <Router>

            <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/features" element={<Features />} />
          </Route>
        </Routes>

    

        <Routes>
          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/buyer-signin" element={<SignInForm />} />
          <Route path="/buyer-signup" element={<SignUpForm />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/token-verification" element={<Verification />} />
          <Route path="/email-verification" element={<EmailVerification />} /> 
          <Route path="/user-reset-password" element={<ResetPassword />} />
          <Route path="/company-signin" element={<CompanySignInForm />} />
          <Route path="/company-signup" element={<CompanySignUpForm />} />
        </Routes>      
    
          {/* Main Application Routes */}
         <Routes>
            <Route path="/dashboard" element={
            <MainLayout>
            <Dashboard />
            </MainLayout>
            } />
          <Route path="/manage-properties" element={
           <MainLayout>
            <ManageProperties />
            </MainLayout>
            } />
          <Route path="/manage-properties/add-property" element={
            <MainLayout>
            <AddProperties />
            </MainLayout>
            } />

            <Route path='/manage-properties/add-property/preview' element={
              <MainLayout>
                <Preview />
              </MainLayout>
            }/>
            <Route path="/transactions/*" element={
             <MainLayout>
              <Transactions />
              </MainLayout>
            } />

            <Route path='/inquiries' element={
              <MainLayout>
                <Inquiries />
              </MainLayout>
            } />
          <Route path="/manage-properties/add-property/preview" element={
            <MainLayout>
            <Preview />
            </MainLayout>} />
          <Route path="/messages" element={
            <MainLayout>
            <Messages />
            </MainLayout>
            } />
          </Routes>

    </Router>

    </>
  );

}

export default App;
