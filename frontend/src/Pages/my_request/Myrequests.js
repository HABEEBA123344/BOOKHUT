import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Profile from "../profile/Profile";
import Myrequest from "./Myrequest";
import "./Myrequests.scss";

export default function Myrequests() {
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
    <div>
      <Profile/>

      <div className="requests mt-5">
        {requests.length > 0 ? (
          requests.map((item) => {
            if(item.borrower_id==user.id){
              return <Myrequest request={item} />;
            }
          })
        ) : (
          <p>No Requests To Show Yet</p>
        )}
      </div>
    </div>
  );
}
