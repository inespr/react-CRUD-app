import React, { useEffect, useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { User } from "./User";
import "../style/UsersList.scss";
import { useNavigate } from "react-router-dom";

export function UsersList() {
  const [data, setData] = useState([]);
  const bearer = localStorage.getItem("Token");
  const emailAcces = localStorage.getItem("EmailAcces");

  const [activeMenu, setActiveMenu] = useState(false);
  const [iconName, setIconName] = useState("");
  const [checkUser, setCheckUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (bearer) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
      };
      fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/users`, options)
        .then((res) => res.json())
        .then((data) => {
          setData(data.items);
          console.log(data);
          console.log(data.items);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      navigate("../log-in");
    }
  }, [bearer, checkUser]);

  function handleDeleteUser(param) {
    if (param === "delete") {
      console.log("usuario borrado", checkUser);
      setCheckUser(!checkUser);
      console.log("usuario borrado", checkUser);
    } else {
      console.log("no borrado");
    }
  }

  useEffect(() => {
    data &&
      data.map((element) => {
        if (element.email === emailAcces) {
          setIconName(element.name.charAt(0) + element.surname.charAt(0));
        }
        return null;
      });
  }, [data, emailAcces]);

  function showMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <section className="usersList">
      <section className="users--header">
        <div className="user--header--wrapper">
          <button className="userLogger" onClick={showMenu}>
            <span>{iconName.toUpperCase()}</span>
          </button>
          {activeMenu && (
            <div className="user--data">
              <span className="user--data--mail">{emailAcces}</span>
              <Link to="../log-out" className="logOut">
                <span>Log out </span>
                <FiLogOut />
              </Link>
            </div>
          )}
        </div>
      </section>
      <div className="userslist">
        <h1 className="tittle">Users List</h1>
        <section className="Users">
          {data.map((element, index) => {
            return (
              <User
                key={index}
                userMail={element.email}
                userName={element.name}
                userSurname={element.surname}
                userId={element.id}
                handleUserEvent={handleDeleteUser}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}
