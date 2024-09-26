import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import ManageProperties from './pages/manage/ManageProperties';
import AddProperties from './pages/manage/AddProperties';
import Preview from './pages/manage/Preview';
import Messages from './pages/Messages';


function App() {


  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} ></Route>
            </Routes>

          
          
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
  )
}

export default App
