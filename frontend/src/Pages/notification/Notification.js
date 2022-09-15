import React ,{useState} from "react";
import { ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Notifications.scss";
export default function Notification({ request }) {
  const navigate = useNavigate()
  const handleClick = async ()=>{
    const response =await fetch('requests/'+request._id,{
      method:'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      console.log(json)
      navigate('/home')
    }
  }
    const [accept, setAccept] =useState(false)
    const [val,setVal]=useState([])
    const handleAdd=()=>{
      const abc=[...val,[]]
      setVal(abc)
    }
    const handleChange=()=>{

    }
    const setdue=()=>{
      accept?setAccept(false):setAccept(true);
    }
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
          <button className="btn btn-success accept-btn"  onClick={setdue}>Accept</button>
          {accept?<input className="set-date"placeholder="Set due date" />:null}
          {accept?<button className="btn btn-primary">Set</button>:null}
          {/* {val.map((data,i)=>
            return(
              <input onChange={e=>handleChange(e,i)}/>
            )
          })} */}
        </div>
        <div className="text-center">
          <button className="btn btn-danger reject-btn" onClick={handleClick}>Reject</button>
        </div>
      </div>
    </div>
  );
 
}