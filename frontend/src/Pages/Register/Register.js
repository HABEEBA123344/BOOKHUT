import React, { useState } from "react";
import "./register.scss";
import { Link, useNavigate, } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    cls: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, cls, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, phone, cls, password
      })
    });
    const data = await res.json();
    console.log(data);
    if(!data.error){
      window.alert("Registration successful");
      console.log("Registration successful");
      navigate("/");
    }else{
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
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
          <div className="mb-3">
            <label for="exampleInputClass" className="form-label">
              Class
            </label>
            <input
              type="text"
              name="cls"
              className="form-control"
              id="exampleInputClass"
              value={user.cls}
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
