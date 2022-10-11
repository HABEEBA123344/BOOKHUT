import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Profile from "../profile/Profile";
import Sharedbook from "./Sharedbook";
import './Sharedbooks.scss'

export default function Sharedbooks() {
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
  <div className="main4">
    
    <Profile/>
    
    <div className="books">
     
      {books.length > 0 ? (
        books.map((item) => {
          if(item.ownerid==user.id){
            return <Sharedbook book={item} />;
          }
        })
      ) : (
        <p>No Books</p>
      )}
    </div>
    </div>
  );
}
