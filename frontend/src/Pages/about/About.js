import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./About.scss";

export default function About() {
  return (
    <div>
        <Header/>
        <div class="about">
          <h1 class="aboutus">ABOUT US</h1>
          Book Hut is a book sharing system built with the aim of digitalizing book sharing among communities and developing reading culture. The users can easily access the book of their interest without spending money. Also, the books can be shared after reading thereby utilizing it to the maximum. Moreover, Book Hut acts as a free virtual book club and connects people with similiar reading interests. 
        </div>
        <div class="box2">
  <div class="box1">
  <h3>Contact us !</h3>
  <p><span class="iconify" data-icon="ant-design:mail-outlined"></span>  bookhut@gmail.com</p>
  <p><span class="iconify" data-icon="carbon:phone"></span>  9876543210</p>
  <p><span class="iconify" data-icon="logos:linkedin-icon"></span>  <span class="iconify" data-icon="logos:facebook"></span></p>
  </div>

  <Footer/>
  </div>
    </div>
  )
}