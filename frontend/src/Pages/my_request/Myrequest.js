import React from "react";
import { useNavigate } from "react-router-dom";
import "./Myrequests.scss";

export default function Myrequest({ request }) {
  const navigate = useNavigate()
  const handleClick = async ()=>{
    const response =await fetch('requests/'+request._id,{
      method:'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      console.log(json)
      navigate('/profile')
    }
  }
  return (
    <div className="request1">
        <div>
        <p>
          {/* <b>Book id: </b>{request.id} */}
          <b>Name:</b> {request.book_name}
        </p>
    </div>
    
    <div className='detail'>
          <button className='btn btn-primary info' onClick={handleClick}>Cancel request</button>
    </div>
    </div>
        
  );
}