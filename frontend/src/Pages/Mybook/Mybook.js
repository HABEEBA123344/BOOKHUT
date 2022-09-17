import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../../hooks/useBookContext";
import "./Mybooks.scss";
export default function Mybook({ book }) {
  const navigate=useNavigate()
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
  const [status, setStatus] = useState(book.status);
  const InlineEdit = ({ status, setStatus }) => {
    const [editingValue, setEditingValue] = useState(status);
    
    const onChange = (event) => setEditingValue(event.target.value);
    
    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === "Escape") {
        event.target.blur();
      }
    }
    
    const onBlur = (event) => {
      if (event.target.value.trim() === "") {
        setEditingValue(status);
      } else {
        setStatus(event.target.value)
      }
    }
    return (
      <input
        className="statuss"
        type="text"
        aria-label="Field name"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    );
  };
  const editStatus = async() =>{
    const res = await fetch('books/'+book._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status
      })
    });
    const data = await res.json();
    console.log(data);
    if(data.message){
      window.alert(data.message);
    }
  }
  return (
    <div className="book10">
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
          <b>Status :</b><InlineEdit status={status} setStatus={setStatus} />
        </p>
      </div>
      <div className="buttonsss">
        <button className='btn btn-primary info delete' onClick={handleClick}>Delete Book</button>
        <button className='btn btn-primary info editss' onClick={editStatus}>Edit Status</button>
      </div>
    </div>
  );
}
