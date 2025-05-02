import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">SkyHorizon</div>
      <ul className="menu">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/tours" activeClassName="active">Tours</NavLink></li>
        <li><NavLink to="/packages" activeClassName="active">Packages</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/about-us" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact-us" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;