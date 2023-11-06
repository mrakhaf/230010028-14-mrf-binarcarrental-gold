import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


import './index.css'
import { Router } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <Router/>
    
  </React.StrictMode>,
)
