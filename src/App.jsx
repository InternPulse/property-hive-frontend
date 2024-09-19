// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import ManageProperties from "./pages/manage/ManageProperties";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-properties" element={<ManageProperties />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
