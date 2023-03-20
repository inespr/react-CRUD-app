import React, { useEffect, useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { User } from "./User";
import "../style/UsersList.scss";

export function UsersList() {
  const [data, setData] = useState([]);
  const bearer = localStorage.getItem("Token");
  const emailAcces = localStorage.getItem("EmailAcces");
  const [iconName, setIconName] = useState("");

  useEffect(() => {
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
  }, [bearer]);

  useEffect(() => {
    // This useEffect runs whenever the 'data' state is updated
    data &&
      data.map((element) => {
        if (element.email === emailAcces) {
          setIconName(element.name.charAt(0) + element.surname.charAt(0));
        }
        return null;
      });
  }, [data, emailAcces]);

  return (
    <section className="usersList">
      <section className="users--header">
        <div className="user--header--wrapper">
          <button className="userLogger">
            <span>{iconName.toUpperCase()}</span>
          </button>
          <div className="">
            <Link to="../log-out" className="logOut">
              <FiLogOut />
            </Link>
          </div>
        </div>
      </section>
      <div className="userslist">
        <h1 className="tittle">Users List</h1>
        <section className="Users">
          {data.map((element, index) => {
            return <User key={index} userMail={element.email} />;
          })}
        </section>
      </div>
    </section>
  );
}
