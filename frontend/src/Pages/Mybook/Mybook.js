import React from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../hooks/useBookContext";
import "./Mybooks.scss";
export default function Mybook({ book }) {
  const navigate=useNavigate()
  const {dispatch} = useBookContext() 
  const handleClick = async ()=>{
    const response =await fetch('books/'+book._id,{
      method:'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      console.log(json)
      navigate('/home')
    }
  }
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
        <i className="iconify edit" data-icon="bxs:edit"></i>
        <button onClick={handleClick}><span className="iconify" data-icon="fa-solid:trash"></span></button>
      </div>
    </div>
  );
}
