import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/LOGO.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


