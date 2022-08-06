import React from "react";
import {NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="home">
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <NavLink activeClassName="active" className="nav-link scrollto" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="nav-link  scrollto" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="nav-link scrollto" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" className="nav-link scrollto" to="/notification">
              <span
                className="iconify noti"
                data-icon="clarity:notification-line"
              ></span>
            </NavLink>
          </li>
          <li>
            <Link className="getstarted scrollto" to="/">
              Logout
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
}
