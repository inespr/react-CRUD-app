import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUserX,
  FiEdit,
  FiInfo,
  FiMoreVertical,
  FiCornerDownLeft,
} from "react-icons/fi";
import "../style/User.scss";

export function User({
  userMail,
  userName,
  userSurname,
  userId,
  handleUserEvent,
}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [deleteMenu, setDeleteMenu] = useState(false);
  const DataUser = {
    userId,
    userName ,
    userSurname,
    userMail,
  };

  const bearer = localStorage.getItem("Token");
  console.log(userId);

  function showMenu() {
    setActiveMenu(!activeMenu);
  }
  function showDeteleMenu() {
    setDeleteMenu(!deleteMenu);
  }
  function deleteUser() {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    };
    fetch(
      `${import.meta.env.VITE_APP_MY_API_LINK}/users/${userId}`,
      options
    ).catch((error) => console.error("Error fetching DataUser: ", error));

    handleUserEvent("delete");
    setDeleteMenu(!deleteMenu);
    setActiveMenu(!activeMenu);
  }

  return (
    <div className="user" id="user">
      <button className="user--div" onClick={showMenu}>
        <span className="userMail">{userMail}</span>
        <FiMoreVertical
          className={
            activeMenu ? "moreVertical moreHorizontal" : "moreVertical"
          }
        />
      </button>
      {activeMenu &&
        (deleteMenu ? (
          <div className="user--delete--confirmation">
            <section className="delete">
              <button className="delete--button" onClick={deleteUser}>
                <span className="message--delete">DELETE USER</span>
                <FiUserX className="icon--delete" />
              </button>
            </section>
              <button className="return--button">
                <span onClick={showDeteleMenu}>RETURN</span>
                <FiCornerDownLeft className="return--icon" />
              </button>
          </div>
        ) : (
          <div className="user--menu" id="user--menu">
            <section className="menu--icon">
              <button onClick={showDeteleMenu} className="delete">
                <FiUserX />
              </button>
              <Link
                to="../user-edit"
                className="edit"
                onClick={localStorage.setItem("Data", JSON.stringify(DataUser))}
              >
                <FiEdit />
              </Link>
              <Link to={`../user-info`} className="info">
                <FiInfo />
              </Link>
            </section>
          </div>
        ))}
    </div>
  );
}
