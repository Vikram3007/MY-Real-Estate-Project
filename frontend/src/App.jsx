// src/App.jsx ✅ (DO NOT wrap again here)
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './House/Nav';
import Home from './House/Pages/Home';
import About from './House/Pages/About';
import Contact from './House/Pages/Contact';
import HomeClick2 from './House/HomeClickEvent/HomeCliclk2';
import PropertyDetails from './House/PropertyDetails';

// admin pages
// registration disabled; admin accounts must be created directly in database or via an existing admin
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import RequireAuth from './admin/RequireAuth';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* hide main nav when on admin pages */}
      {!location.pathname.startsWith('/admin') && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeclick" element={<HomeClick2 />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />

        {/* admin routes – registration is closed after initial setup */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
