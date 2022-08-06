import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Addbook.scss";

export default function Addbook() {
  const navigate = useNavigate();
  const [book, setbook] = useState({
    name: "",
    author: "",
    language: "",
    category: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setbook({ ...book, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, author, language, category } = book;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, author, language, category
      })
    });
    const data = await res.json();
    if(data.error){
      window.alert("Book added successfully");
      console.log("Book added successfully");
      navigate("/profile");
    }else{
      window.alert("Please fill the data properly");
      console.log("Please fill the data properly");
    }
  }
  return (
    <div className="main2">
      <div className="head">
        <Header />
      </div>
      <div className="mt-5 Container2">
        <form onSubmit={PostData}>
        <div class="mb-4">
          <input type="text" name="name" className="form-control" placeholder="Name" value={book.name}
              onChange={handleInputs} />
        </div>

        <div class="mb-4">
          <input type="text" name="author" className="form-control" placeholder="Author" value={book.author}
              onChange={handleInputs}/>
        </div>

        <div class="mb-4">
          <input type="text" name="language" className="form-control" placeholder="Language" value={book.language}
              onChange={handleInputs}/>
        </div>

        <div class="mb-4">
          <input type="text" name="category"className="form-control" placeholder="Category" value={book.category}
              onChange={handleInputs}/>
        </div>

        <div className="text-center">
          <button type="submit" name="register" value="register" className="btn btn-primary add-task-btn" onClick={PostData}>Add Book</button>
        </div>
        </form>
        
      </div>
    </div>
  );
}
