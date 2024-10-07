import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/settings' element={
              <MainLayout>
                <Settings />
              </MainLayout>
            }/>

                <Route path='/settings/security' element={
                <MainLayout>
                <Settings />
                </MainLayout>
              } />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}
export default App;
