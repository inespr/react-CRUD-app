import React from "react";
import { Link } from "react-router-dom";
import {
  FiUserX,
  FiEdit,
  FiInfo,
  FiMoreVertical,
  FiMoreHorizontal,
  FiCornerDownLeft,
} from "react-icons/fi";

export function User({ userMail }) {
  return (
    <div className="user">
      <div className="user--div">
        <span className="userMail">inesprom28@hiberus.es</span>
        <FiMoreVertical className="moreVertical" />
      </div>
      <div className="user--menu">
        <span className="userMail">inesprom28@hiberus.es</span>
        <FiMoreHorizontal className="moreHorizontal" />
        <section className="menu--icon">
          <FiUserX />
          <Link to="../user-edit">
            <FiEdit />
          </Link>
          <Link to="../user-info">
            <FiInfo />
          </Link>
        </section>
      </div>
      <div className="user--delete--confirmation">
        <section className="delete">
          <button className="delete--button">
            <span className="message--sure">Are you sure?</span>
            <span className="message--delete">DELETE USER</span>
            <FiUserX className="icon--delete" />
          </button>
        </section>
        <section className="return">
          <button className="return--button">
            <span>RETURN</span>
            <FiCornerDownLeft className="return--icon" />
          </button>
        </section>
      </div>
    </div>
  );
}
