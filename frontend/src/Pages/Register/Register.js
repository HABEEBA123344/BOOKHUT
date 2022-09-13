import React, { useState } from "react";
import "./register.scss";
import { Link, useNavigate, } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    department: "",
    year: "",
  });
  const {dispatch}=useAuthContext()

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, department,year } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, password, phone, department,year
      })
    });
    const data = await res.json();
    console.log(data);
    if(!data.error){
      window.alert("Registration successful");
      console.log("Registration successful");
      localStorage.setItem('user',JSON.stringify(data))
      dispatch({type:'LOGIN',payload:data})
      navigate("/");
    }else{
      window.alert(data.error);
      console.log("Invalid Registration");
    }
  }
  function getSelectDepart(){
    user.department=document.getElementById("depart").value;
    console.log(user.department);
  }
  function getSelectYear(){
    user.year=document.getElementById("year").value;
    console.log(user.year);
  }

  return (
    <div className="Container">
      <div className="left">
        <div className="outer1 text-center">
          <div>
          <img className="bookhut" src="assets/img/logo1.jpg" />
          </div>
          <div className="logo1">
          <h1 className="me-auto">
            Book Hut
          </h1>
          </div>
        </div>
   
        <img
          className="image"
          src="https://img.freepik.com/premium-vector/student-study-books-people-reading-studying-library-exam-preparation-friends-find-ideas-knowledge-self-education-vector-concept-illustration-reader-reading-education-stack-books_53562-13842.jpg?w=740"
          alt="Login image"
        />
      </div>
      <div className="right">
        <h2 className="form-title register">Register</h2>
        <form  onSubmit={PostData}>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              value={user.name}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPhone" className="form-label">
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="exampleInputPhone"
              value={user.phone}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="mb-3 cls">
            <div className="depart">
              <label className="department">Department : </label>
              <select id="depart" onChange={getSelectDepart}>
                <option value="Select">Select</option>
                <option value="CE">CE</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div className="year">
              <label className="form-label yr">
                Year : 
              </label>
              <select id="year" onChange={getSelectYear}>
                <option value="Select">Select</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            {/* <Link to="/"> */}
              <button
                type="submit"
                className="btn btn-primary text-center"
                name="register"
                value="register"
              >
                Register
              </button>
            {/* </Link> */}
          </div>
        </form>
        <div className="text-center">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
