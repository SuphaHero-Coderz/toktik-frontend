import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    return (
        <nav className="navbar">
          <div className="logo">
          <img src="/images/toktik-logo.png" alt="TokTik Logo" style={{ height: '40px', marginRight: '10px' }} />
          </div>
          <ul className="navList">
            <li className="navItem">Home</li>
            <li className="navItem">
				<Link to="/upload">Upload</Link>
			</li>
          </ul>
        </nav>
      );
}

export default NavBar;
