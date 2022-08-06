import React, { useState } from "react";
import Notification from "./Notification";
import Header from "../../components/Header"
import './Notifications.scss'
let booksInitial = [
  {
    id: 1,
    head:"Book Request",
    name: "Python for Beginners",
    borrower : "pournami",
 
  },
   {
    id: 2,
    head:"Due Date Extension Request",
    name: "Python for Beginners",
    borrower : "pournami",
  },
   {
    id: 3,
    head:"Book Request",
    name: "Python for Beginners",
    borrower : "pournami",
  },
  {
    id: 4,
    head:"Book Request",
    name: "Python for Beginners",
    borrower : "pournami",
  },
  
  
  
];

export default function Notifications() {
  const [books, setBooks] = useState(booksInitial);

  return (
  <div className="notifications">
    
        <Header/>
    
    <div className="nots mt-5">
     
      {books.length > 0 ? (
        books.map((item) => {
          return <Notification book={item} />;
        })
      ) : (
        <p>No Tasks To Show Yet</p>
      )}
    </div>
    </div>
  );
}