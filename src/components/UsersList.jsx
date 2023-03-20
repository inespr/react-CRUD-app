import React, { useEffect, useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { User } from "./User";
import "../style/UsersList.scss";

export function UsersList() {
  const [data, setData] = useState();
  const bearer = localStorage.getItem("Token");
  console.log(bearer);

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
      });
  }, []);

  return (
    <section className="usersList">
      <section className="users--header">
        <div className="user--header--wrapper">
          <button className="userLogger">
            <span>GL</span>
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
          {data &&
            data.map((element, index) => {
              console.log(data.items);
              console.log(element.email);

              return <User key={index} userMail={element.email} />;
            })}
        </section>
      </div>
    </section>
  );
}
