import React, { useState,useEffect } from "react";
import Mybook from "./Mybook";
import Header from "../../components/Header";
import "./Mybooks.scss";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Mybooks() {
  const {user} = useAuthContext()
  const [books, setBooks] = useState({});
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/books')
      const data = await res.json()
      
      if(res.ok){
        setBooks(data);
      }
    }
    fetchBooks();
  },[])
  return (
    <div>
      <Profile/>
      <div className="addbook">
        <Link to='/addbook'>
        <button className="add">Add Book</button>
        </Link>
      </div>
      <div className="books">
        {books.length > 0 ? (
          books.map((item) => {
            if(item.owner_id==user.id){
              return <Mybook book={item} />;
            }
          })
        ) : (
          <p>No Books To Show Yet</p>
        )}
      </div>
    </div>
  );
}
