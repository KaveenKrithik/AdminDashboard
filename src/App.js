import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<UserPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

