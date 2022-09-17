import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Profile from "../profile/Profile";
import Borrowedbook from "./Borrowedbook";
import "./Borrowedbook.scss";

export default function Borrowedbooks() {
  const [books, setBooks] = useState({});
  const {user} = useAuthContext()
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/accepts')
      const data = await res.json()
      if(res.ok){
        setBooks(data);
        console.log(data)
      }
    }
    fetchBooks();
  },[])
  return (
    <div className="main3">
      <Profile/>

      <div className="books">
        {books.length > 0 ? (
          books.map((item) => {
            if(item.borrower_id==user.id){
              return <Borrowedbook book={item} />;
            }
          })
        ) : (
          <p>No Books</p>
        )}
      </div>
    </div>
  );
}
