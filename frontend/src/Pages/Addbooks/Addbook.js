import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Addbook.scss";

export default function Addbook() {
  const [book, setbook] = useState({
    name: "",
    author: "",
    language: "",
    category: "",
  });
  return (
    <div className="main2">
      <div className="head">
        <Header />
      </div>
      <div className="mt-5 Container2">
        <form>
        <div class="mb-4">
          <input type="text" name="name" className="form-control" placeholder="Name" value={book.name} />
        </div>

        <div class="mb-4">
          <input type="text" name="author" className="form-control" placeholder="Author" value={book.author}/>
        </div>

        <div class="mb-4">
          <input type="text" name="language" className="form-control" placeholder="Language" value={book.language}/>
        </div>

        <div class="mb-4">
        <label className="department">Category : </label>
              <select>
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
          <button type="submit" name="register" value="register" className="btn btn-primary add-task-btn">Add Book</button>
        </div>
        </form>
        
      </div>
    </div>
  );
}
