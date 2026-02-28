// src/main.jsx ✅ (keep this)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Only one router here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
