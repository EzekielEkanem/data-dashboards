import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout.jsx';
import DetailView from '../routes/DetailView.jsx';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/BreweryDetail/:name" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
