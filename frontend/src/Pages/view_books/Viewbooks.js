import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "./Book";
import "./view_books.scss";

export default function Viewbooks() {
  const [books, setBooks] = useState({});
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/books')
      const data = await res.json()
      
      if(res.ok){
        setBooks(data)
      }
    }
    fetchBooks();
  },[])
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
          <p>No Books To Show Yet</p>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
