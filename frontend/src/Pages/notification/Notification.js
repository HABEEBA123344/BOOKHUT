import React, { useState } from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Notifications.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Notification({ request }) {
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = async () => {
    const response = await fetch("requests/" + request._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      navigate("/home");
    }
  };
  const [accept, setAccept] = useState(false);
  const [accepts] = useState({
    ownerid: request.ownerid,
    borrower_id: request.borrower_id,
    book_id: request.book_id,
    book_name : request.book_name,
    owner_name: user.name,
    borrower_name : request.borrower_name,
    dueDate : ''
  });
  const handleSet = async(e) =>{
    e.preventDefault()
    accepts.dueDate=selectedDate
    const { ownerid,borrower_id,book_id,book_name,owner_name,borrower_name,dueDate} = accepts;
    const res = await fetch("/accepts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerid,borrower_id,book_id,book_name,owner_name,borrower_name,dueDate
      })
    });
    const data= await res.json()
    if(!data.error){
      window.alert("Accepted");
    }else{
      window.alert(data.error);
    }
    const response = await fetch("requests/" + request._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      navigate("/home");
    }
  }
  const setdue = () => {
    accept ? setAccept(false) : setAccept(true);
  };
  return (
    <div className="not">
      <div className="fun">
        <p>
          <b>{request.book_name}</b>
        </p>
        <p>{request.borrower_name}</p>
      </div>

      <div className="buttons controls0">
        <div className="text-center">
          <button className="btn btn-success accept-btn" onClick={setdue}>
            Accept
          </button>
          {accept ? (
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
            />
          ) : null}
          {accept ? <button className="btn btn-primary" onClick={handleSet}>Set</button> : null}
        </div>
        <div className="text-center">
          <button className="btn btn-danger reject-btn" onClick={handleClick}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
