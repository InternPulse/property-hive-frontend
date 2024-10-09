import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { Toaster } from "./components/ui/sonner.jsx";
import DisplayContextProvider from "./context/DisplayContextProvider.jsx";
import "./index.css";
import { store } from "./redux/store.js";


// @ts-ignore

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DisplayContextProvider>
        <App />
        <Toaster />
      </DisplayContextProvider>
    </Provider>
  </StrictMode>,
);
