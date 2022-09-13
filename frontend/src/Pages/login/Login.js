import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch}=useAuthContext()
  const loginUser = async(e) =>{
    e.preventDefault();
    const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,password
        })
      });
      const data = await res.json();
      console.log(data);
      if(data.error){
      window.alert("Invalid credential");
      console.log("Invalid credetial");
      navigate('/');
      }else{
      window.alert("Login successful");
      console.log("Login successful");
      localStorage.setItem('user',JSON.stringify(data))
      dispatch({type:'LOGIN',payload:data})
      navigate("/home");
    }
  }
  return (
    <div className="container1">
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
      <div className="right1">
        {/* <h1 className="logo1 me-auto">
            <img src="assets/img/logo.png" />
            Book Hut
          </h1> */}
        <h2 className="login">Login</h2>
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
              <button type="submit" className="btn btn-primary text-center">
                Login
              </button>
          </div>
        </form>
        <div className="text-center">
          <p>
            New User?{" "}
            <Link to="/register" className="reg">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
