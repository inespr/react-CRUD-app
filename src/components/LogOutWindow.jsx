import React from "react";
import { Link } from "react-router-dom";
import { FiXCircle, FiCheck } from "react-icons/fi";

import '../style/LogOutWindow.scss';


export function LogOutWindow() {
  function removeUser() {
    localStorage.removeItem('Token')
    localStorage.removeItem('EmailAcces')
  }
  return (
    <div className="logOut">
      <div className="card">
      <div className="closeCircle">
      <Link to="../users-list">
        <FiXCircle  />
      </Link>
      </div>
     
      <h1>Log Out</h1>
      <Link to="../log-in" onClick={removeUser} className="check">
        <span>CONFIRM</span><FiCheck  />
      </Link>
      </div>
     
    </div>
  );
}
