import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "../src/Component/Pages/Home/Home";
import Features from "./Component/Pages/Features/Features";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/features" element={<Features />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
