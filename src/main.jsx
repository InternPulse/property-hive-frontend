
// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DisplayContextProvider from './context/DisplayContextProvider.jsx'


// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayContextProvider>
    <App />
    </DisplayContextProvider>
  </StrictMode>,
);
