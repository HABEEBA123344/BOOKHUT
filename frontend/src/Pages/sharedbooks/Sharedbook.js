import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sharedbooks.scss";
export default function Sharedbook({ book }) {
  const navigate = useNavigate()
  const handleClick = async ()=>{
    const response =await fetch('accepts/'+book._id,{
      method:'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      console.log(json)
      navigate('/profile')
    }
  }
  return (
    <div className="book">
      <div>
        <p>
          <b>{book.book_name}</b>
        </p>
        <p>
          <b>Borrower :</b> {book.borrower_name}
        </p>
        <p>
          <b>Date of Return:</b> {book.dueDate.substring(0,10)}
        </p>
        <button className='btn btn-primary info returned' onClick={handleClick}>Returned</button>
      </div>
    </div>
  );
}
