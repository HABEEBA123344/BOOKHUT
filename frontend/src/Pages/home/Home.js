import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.scss";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="name">Book Hut</h1>
              <h2>"Knowledge increase by sharing not by saving"</h2>
              <div className="d-flex justify-content-center justify-content-lg-start viewbook">
                <Link to="/view_books" className="btn-get-started scrollto">
                  View Books
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 home-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/bs4.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
