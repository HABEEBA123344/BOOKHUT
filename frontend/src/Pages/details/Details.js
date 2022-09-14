import React from "react";
import Header from "../../components/Header";
import "./details.scss";
export default function Details() {
  return (
    <div className="viewdetails">
      <div>
        <Header />
      </div>
      <div className="outer">
        <div className="fulldetails">
          <div className="bookdetails">
            <h6>Book Details</h6>
            <p>
              <b>Name :</b> Python for Beginners
            </p>
            <p>
              <b>Author :</b> Timothy C Needham
            </p>
            <p>
              <b>Category :</b> Computer Science
            </p>
            <p>
              <b>Language :</b> English
            </p>
            <p>
              <b>Status :</b> Available
            </p>
          </div>
          <div className="ownerdetails">
            <h6>Owner Details</h6>
            <p>
              <b>Name :</b> Pournami K K
            </p>
            <p>
              <b>Department :</b> CSE
            </p>
            <p>
              <b>Year :</b> 4th
            </p>
            <p>
              <b>Email :</b> pou@gmail.com
            </p>
            <p>
              <b>Phone No :</b> 9876543210
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary request">Request</button>
        </div>
      </div>
    </div>
  );
}
