import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./profile.scss";
import { NavLink, useNavigate } from "react-router-dom";

export default function Profile() {
  // const navigate = useNavigate;
  // const [userData, setUserData] = useState(); 

  // const callProfile = async() =>{
  //   try{
  //     const res = await fetch("/profile", {
  //       method: "GET",
  //       headers: {
  //         Accept : "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials:"include"
  //     });
  //     const data = await res.json();
  //     setUserData(data);
  //     if(!data){
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   }catch(err){
  //     console.log(err);
  //   }
    
  // }
  // useEffect(() => {
  //   callProfile();
  // }, []);
  return (
    <div>
      <Header />
      <div className="profile1" method="GET">
        <span
          className="iconify user"
          data-icon="bxs:user-circle"
          width="200px"
          height="200px"
        ></span>
        <h2>Habeeba M K</h2>
        <p>habimammu@gmail.com</p>
        <p>9961867658</p>
        <p>S6 CSE</p>
      </div>
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
