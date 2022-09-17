import React from "react";
import {NavLink, Link, useNavigate } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const navigate = useNavigate()
  const {logout}=useLogout()
  const handleClick=()=>{
    logout()
    navigate('/')
  }
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
            <button className="getstarted scrollto logout" onClick={handleClick}>
              Logout
            </button>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
}
