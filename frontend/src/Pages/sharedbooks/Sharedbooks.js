import React, { useState } from "react";
import Profile from "../profile/Profile";
import Sharedbook from "./Sharedbook";
import './Sharedbooks.scss'
let booksInitial = [
  {
    id: 1,
    name: "Python for Beginners",
    borrower: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 2,
    name: "Python for Beginners",
    borrower: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 3,
    name: "Python for Beginners",
    borrower: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 4,
    name: "Python for Beginners",
    borrower: "Neha",
    date_return: "10-07-2022",
  },
   

  
];

export default function Sharedbooks() {
  const [books, setBooks] = useState(booksInitial);
  return (
  <div className="main4">
    
    <Profile/>
    
    <div className="books">
     
      {books.length > 0 ? (
        books.map((item) => {
          return <Sharedbook book={item} />;
        })
      ) : (
        <p>No Tasks To Show Yet</p>
      )}
    </div>
    </div>
  );
}
