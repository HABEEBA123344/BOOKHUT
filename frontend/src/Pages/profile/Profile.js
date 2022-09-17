import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./profile.scss";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Profile() {
  const {user} = useAuthContext()
  return (
    <div>
      <Header />
      {user && (<div className="profile1">
        <span
          className="iconify user"
          data-icon="bxs:user-circle"
          width="200px"
          height="200px"
        ></span>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.year} year {user.depart}</p>
      </div>)}
      <div id="profile" className="profile mt-4">
        <div className="container nav2" >
          <nav>
          <ul
            id="profile-flters"
            className="d-flex justify-content-center"
            // data-aos="fade-up"
            // data-aos-delay="100"
          >
            <li data-filter="*">
              <NavLink to="/profile"  className={({ isActive }) => (isActive ? "filter-active" : "mybook2")}>My Books</NavLink>
            </li>
            <li data-filter=".filter-app">
              <NavLink to="/sharedbooks"  className={({ isActive }) => (isActive ? "filter-active" : "sharedbook")}>Shared Books</NavLink>
            </li>
            <li data-filter=".filter-card">
              <NavLink to="/borrowedbooks" className={({ isActive }) => (isActive ? "filter-active" : "borrowedbook")}>Borrowed Books</NavLink>
            </li>
            <li data-filter=".filter-web">
              <NavLink to="/myrequests" className={({ isActive }) => (isActive ? "filter-active" : "myrequest")}>My Requests</NavLink>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
