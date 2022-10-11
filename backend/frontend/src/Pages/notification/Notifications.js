import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import Header from "../../components/Header"
import './Notifications.scss'
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Notifications() {
  const {user} = useAuthContext()
  const [requests, setRequests] = useState({});
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/requests')
      const data = await res.json()
      
      if(res.ok){
        setRequests(data);
      }
    }
    fetchBooks();
  },[])
  return (
  <div className="notifications">
    
        <Header/>
    
    <div className="nots mt-5">
     
      {requests.length > 0 ? (
        requests.map((item) => {
          if(item.ownerid==user.id){
            return <Notification request={item} />;
          }
        })
      ) : (
        <p>No notifications</p>
      )}
    </div>
    </div>
  );
}