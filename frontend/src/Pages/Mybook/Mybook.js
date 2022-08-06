import React from "react";
import "./Mybooks.scss";
export default function Mybook({ book }) {
  return (
    <div className="book">
      <div>
        <p>
          <b>Name:</b> {book.name}
        </p>
        <p>
          <b>Author :</b> {book.author}
        </p>
        <p>
          <b>Category :</b> {book.category}
        </p>
        <p>
          <b>Language :</b> {book.language}
        </p>
        <p>
          <b>Status :</b> {book.status}
        </p>
      </div>
      <div className="icon">
        <span class="iconify edit" data-icon="bxs:edit"></span>
        <span class="iconify" data-icon="fa-solid:trash"></span>
      </div>
    </div>
  );
}
