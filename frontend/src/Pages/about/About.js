import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./About.scss";

export default function About() {
  return (
    <div>
      <Header />
      <div class="about">
        <h1 class="aboutus">ABOUT US</h1>
        Book Hut is a book sharing system built with the aim of digitalizing
        book sharing among communities and developing reading culture. The users
        can easily access the book of their interest without spending money.
        Also, the books can be shared after reading thereby utilizing it to the
        maximum. Moreover, Book Hut acts as a free virtual book club and
        connects people with similiar reading interests.
      </div>
      <h3 className="team">OUR TEAM</h3>
      <div class="contain">
        
        <div className="card">
          <div className="content">
            <div className="imgbx">
              <img src="assets/img/habi.jpg" width="150" height="150"/>
            </div>
            <div className="contentbx">
              <h4>Habeeba M K</h4>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgbx">
              <img src="assets/img/neha.jpg" width="150" height="150"/>
            </div>
            <div className="contentbx">
              <h4>Neha P</h4>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgbx">
              <img src="assets/img/Pou.jpg" width="160" height="150"/>
            </div>
            <div className="contentbx">
              <h4>Pournami K K</h4>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgbx">
              <img src="assets/img/anu.jpg" width="150" height="150"/>
            </div>
            <div className="contentbx">
              <h4>Anuksha V</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="box2">
        <div class="box1">
          <h3>Contact us !</h3>
          <p>
            <span class="iconify" data-icon="ant-design:mail-outlined"></span>{" "}
            bookhut@gmail.com
          </p>
          <p>
            <span class="iconify" data-icon="carbon:phone"></span> 9876543210
          </p>
          <p>
            <span class="iconify" data-icon="logos:linkedin-icon"></span>{" "}
            <span class="iconify" data-icon="logos:facebook"></span>
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
