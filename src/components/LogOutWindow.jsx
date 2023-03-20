import React from "react";
import { Link } from "react-router-dom";
import { FiXCircle, FiCheck } from "react-icons/fi";

export function LogOutWindow() {
  function removeUser() {
    localStorage.removeItem('Token')
    localStorage.removeItem('EmailAcces')
  }
  return (
    <div className="LogOut">
      <Link to="../users-list">
        <FiXCircle className="closeCircle" />
      </Link>
      <h1>Log Out</h1>
      <Link to="../log-in" onClick={removeUser}>
        <FiCheck className="check" />
      </Link>
    </div>
  );
}
