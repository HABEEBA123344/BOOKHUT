import React from "react";
import "./Myrequests.scss";

export default function Myrequest({ request }) {
  return (
    <div className="request1">
        <div>
        <p>
          {/* <b>Book id: </b>{request.id} */}
          <b>Name:</b> {request.name}
        </p>
    </div>
    
    <div className='detail'>
          <button className='btn btn-primary info'>Cancel request</button>
    </div>
    </div>
        
  );
}