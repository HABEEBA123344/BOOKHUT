import React, { useState } from "react";
import Profile from "../profile/Profile";
import Borrowedbook from "./Borrowedbook";
import "./Borrowedbook.scss";
let booksInitial = [
  {
    id: 1,
    name: "Python for Beginners",
    owner: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 2,
    name: "Python for Beginners",
    owner: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 3,
    name: "Python for Beginners",
    owner: "Neha",
    date_return: "10-07-2022",
  },
  {
    id: 4,
    name: "Python for Beginners",
    owner: "Neha",
    date_return: "10-07-2022",
  },
];

export default function Borrowedbooks() {
  const [books, setBooks] = useState(booksInitial);

  return (
    <div className="main3">
      <Profile/>

      <div className="books">
        {books.length > 0 ? (
          books.map((item) => {
            return <Borrowedbook book={item} />;
          })
        ) : (
          <p>No Tasks To Show Yet</p>
        )}
      </div>
    </div>
  );
}
