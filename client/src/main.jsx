import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './app/store'
import { Provider } from 'react-redux'

import axios from 'axios';

import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

axios.defaults.baseURL=''
axios.defaults.withCredentials = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App>
    <RouterProvider router={router} />
    </App>
    </Provider>
  </StrictMode>,
)
