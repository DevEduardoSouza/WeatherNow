import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path='/home' element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
