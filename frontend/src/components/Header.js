import React from "react";
import Navbar from "./Navbar";
import "./header.scss";

export default function Header() {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <img src="assets/img/logo.png" />
            Book Hut
          </h1>
          <Navbar />
        </div>
      </header>
    </div>
  );
}
