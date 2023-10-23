import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";

const NavBar = () => {
	const [token, setToken] = useContext(UserContext)
	return (
		<nav className="navbar">
		<div className="logo">
			<img src="/images/toktik-logo.png" alt="TokTik Logo" style={{ height: '40px', marginRight: '10px' }} />
		</div>
		<ul className="navList">
			<li className="navItem"><Link to="/">Home</Link></li>
			{!token && <li className="navItem"><Link to="/upload">Upload</Link></li>}
			{!token && <li className="navItem"><Link to="/login">Login</Link></li>}
			{!token && <li className="navItem"><Link to="/register">Register</Link></li>}
			<li className="navItem"><LogoutButton/></li>
		</ul>
		</nav>
	);
}

export default NavBar;
