import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import ManageProperties from './pages/manage/ManageProperties';
import AddProperties from './pages/manage/AddProperties';
import Preview from './pages/manage/Preview';


function App() {


  return (
    <>
          <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/manage-properties" element={<ManageProperties />} />
          <Route path="/manage-properties/add-property" element={<AddProperties />} />
          <Route path="/manage-properties/add-property/preview" element={<Preview />} />

        </Routes>
      </MainLayout>
    </Router>

    </>
  )
}

export default App
