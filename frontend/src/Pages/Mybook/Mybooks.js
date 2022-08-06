import React, { useState } from "react";
import Mybook from "./Mybook";
import Header from "../../components/Header";
import "./Mybooks.scss";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
let booksInitial = [
  {
    id: 1,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 2,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 3,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 4,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 5,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 6,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
  {
    id: 7,
    name: "Python for Beginners",
    author: "Timothy C Needham",
    category: "Computer Science",
    language: "English",
    status: "Available",
  },
];

export default function Mybooks() {
  const [books, setBooks] = useState(booksInitial);

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
            return <Mybook book={item} />;
          })
        ) : (
          <p>No Tasks To Show Yet</p>
        )}
      </div>
    </div>
  );
}
