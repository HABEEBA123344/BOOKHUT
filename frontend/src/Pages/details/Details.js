import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBookContext } from "../../hooks/useBookContext";
import "./details.scss";
export default function Details() {
  const { book } = useBookContext();
  const [users, setUser] = useState({});
  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch("/books/" + book.book._id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
      }
    };
    fetchBook();
  }, []);
  const {user}=useAuthContext()
  const [request] = useState({
    ownerid: book.book.owner_id,
    borrower_id: user.id,
    book_id: book.book._id,
    book_name : book.book.name,
    borrower_name : user.name
  });
  console.log(request)
  const handleClick = async(e) =>{
    e.preventDefault()
    const { ownerid,borrower_id,book_id,book_name,borrower_name} = request;
    const res = await fetch("/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerid,borrower_id,book_id,book_name,borrower_name
      })
    });
    const data= await res.json()
    if(!data.error){
      window.alert("Request added");
    }else{
      window.alert(data.error);
    }
  }
  return (
    <div className="viewdetails">
      <div>
        <Header />
      </div>
      <div className="outer">
        <div className="fulldetails">
          <div className="bookdetails">
            <h6>Book Details</h6>
            <p>
              <b>Name :</b> {book.book.name}
            </p>
            <p>
              <b>Author :</b> {book.book.author}
            </p>
            <p>
              <b>Category :</b> {book.book.category}
            </p>
            <p>
              <b>Language :</b> {book.book.language}
            </p>
            <p>
              <b>Status :</b> {book.book.status}
            </p>
          </div>
          <div className="ownerdetails">
            <h6>Owner Details</h6>
            <p>
              <b>Name :</b> {users.name}
            </p>
            <p>
              <b>Department :</b> {users.department}
            </p>
            <p>
              <b>Year :</b> {users.year}
            </p>
            <p>
              <b>Email :</b> {users.email}
            </p>
            <p>
              <b>Phone No :</b> {users.phone}
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary request" onClick={handleClick}>Request</button>
        </div>
      </div>
    </div>
  );
}
