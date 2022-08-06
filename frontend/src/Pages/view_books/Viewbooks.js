import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "./Book";
import "./view_books.scss";

let bookInitial = [
  {
    id: 1,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 2,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 3,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 4,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 5,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 6,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Not Available",
  },
  {
    id: 7,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
  {
    id: 8,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    status: "Available",
  },
];
export default function Viewbooks() {
  const [books, setBooks] = useState(bookInitial);

  return (
    <div className="view">
      <Header />
      <div className="col-md-8 Search">
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title/Category"
          />
          <button className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="books1 mt-5">
        {books.length > 0 ? (
          books.map((item) => {
            return <Book book={item} />;
          })
        ) : (
          <p>No Tasks To Show Yet</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
