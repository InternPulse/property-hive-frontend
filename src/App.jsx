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
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Settings />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
