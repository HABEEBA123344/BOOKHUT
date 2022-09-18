import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "./Book";
import "./view_books.scss";

export default function Viewbooks() {
  const [query,setQuery]=useState('')
  const [type,setType]=useState('')
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
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch= async(e) =>{
    e.preventDefault()
    setType('text')
    const res = await fetch('/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,query
      })
    });
    const data = await res.json();
    if(!data.error){
      if(data.message){
        window.alert(data.message);
      }
      setBooks(data.books)
    }
  }
  const selectCategory= async() =>{
    setQuery(document.getElementById("category").value)
    setType('category')
    const res = await fetch('/search', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,query
      })
    });
    const data = await res.json();
    if(!data.error){
      setBooks(data.books)
    }
  }
  return (
    <div className="view">
      <Header />
      <div className="col-md-8 Search">
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title/Author"
            value={query}
            onChange={handleInput}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="category">
          <select id="category" onChange={selectCategory}>
              <option value="Category">Category</option>
              <option value="CE">CE</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="ME">ME</option>
              <option value="Fiction">Fiction</option>
          </select>
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
