import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Addbook.scss";

export default function Addbook() {
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const [book, setBook] = useState({
    name: "",
    author: "",
    language: "",
    category: "",
    status:"Available",
    owner_id:user.id,
  });
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const { name, author, language, category,status,owner_id} = book;
    const res = await fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, author, language, category,status,owner_id
      })
    });
    const data= await res.json()
    if(!data.error){
      window.alert("Book added");
      navigate('/profile');
    }else{
      window.alert(data.error);
      console.log("Please give the data properly");
    }
  }
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setBook({ ...book, [name]: value });
  };
  function getSelectCategory(){
    book.category=document.getElementById("category").value;
    console.log(book.category);
  }
  return (
    <div className="main2">
      <div className="head">
        <Header />
      </div>
      <div className="mt-5 Container2">
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleInputs}
              value={book.name}
              required
            />
          </div>

          <div class="mb-4">
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Author"
              onChange={handleInputs}
              value={book.author}
              required
            />
          </div>

          <div class="mb-4">
            <input
              type="text"
              name="language"
              className="form-control"
              placeholder="Language"
              onChange={handleInputs}
              value={book.language}
              required
            />
          </div>

          <div class="mb-4">
            <label className="department">Category : </label>
            <select id="category" onChange={getSelectCategory}>
              <option value="Select">Select</option>
              <option value="CE">CE</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="ME">ME</option>
              <option value="Fiction">Fiction</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              name="register"
              value="register"
              className="btn btn-primary add-task-btn"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
