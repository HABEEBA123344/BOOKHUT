import React, { useState } from "react";
import Profile from "../profile/Profile";
import Myrequest from "./Myrequest";
import "./Myrequests.scss";
let requestsInitial = [
  {
    id: 1,
    name: "Python for Beginners",
  },
  {
    id: 2,
    name: "Python for Beginners",
  },
  {
    id: 3,
    name: "Python for Beginners",
  },
];

export default function Myrequests() {
  const [requests, setRequests] = useState(requestsInitial);

  return (
    <div>
      <Profile/>

      <div className="requests mt-5">
        {requests.length > 0 ? (
          requests.map((item) => {
            return <Myrequest request={item} />;
          })
        ) : (
          <p>No Requests To Show Yet</p>
        )}
      </div>
    </div>
  );
}
