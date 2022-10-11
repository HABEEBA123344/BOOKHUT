import React from "react";
import Login from "./Pages/login/Login";
import "./app.scss";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewbooks from "./Pages/view_books/Viewbooks";
import Mybooks from "./Pages/Mybook/Mybooks";
import Addbook from "./Pages/Addbooks/Addbook";
import Details from "./Pages/details/Details";
import Profile from "./Pages/profile/Profile";
import Myrequests from "./Pages/my_request/Myrequests";
import Sharedbooks from "./Pages/sharedbooks/Sharedbooks";
import Borrowedbooks from "./Pages/Borrowedbooks/Borrowedbooks";
import Notifications from "./Pages/notification/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Mybooks/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/notification" element={<Notifications/>} />
          <Route path="/view_books" element={<Viewbooks/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/sharedbooks" element={<Sharedbooks/>} />
          <Route path="/borrowedbooks" element={<Borrowedbooks/>} />
          <Route path="/myrequests" element={<Myrequests/>} />
          <Route path="/addbook" element={<Addbook/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
