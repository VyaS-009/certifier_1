import React from 'react';
import Navbar from './Components/Navbar'; // Adjust path as per your structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Studentpage from './pages/Studentpage';
import FormPage from './pages/FormPage';
import CertificatePage from './pages/CertificatePage';
import Admin from './pages/Admin';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<CertificatePage />} />
          <Route path="/student" element={<Studentpage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/success" element={<SuccessPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
