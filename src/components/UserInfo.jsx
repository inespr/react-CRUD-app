import React from "react";
import { Link } from "react-router-dom";
import { FiCornerDownLeft, FiInfo } from "react-icons/fi";
import { FormLayout } from "../layout/FormLayout";
import "../style/UsersList.scss";
import "../style/User.scss";

export function UserInfo() {
  const bearer = localStorage.getItem("Token");
  const dataUser = JSON.parse(localStorage.getItem("Data"));

  console.log(dataUser);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  };
  fetch(
    `${import.meta.env.VITE_APP_MY_API_LINK}/users/${dataUser.userId}`,
    options
  ).catch((error) => console.error("Error fetching data: ", error));

  return (
    <div className="Form">
      <FormLayout>
        <form className="form">
        <Link to="../users" className="return">
            <FiCornerDownLeft />
          </Link>
          <div className="header">
          <h1>UserInfo</h1>
          <FiInfo />
          </div>

          <label>
            Name:
            <div type={"text"} className="input">
              {dataUser.userName}
            </div>
          </label>
          <label>
            Surname:
            <div type={"text"} className="input">
              {dataUser.userSurname}
            </div>
          </label>
          <label>
            Email:
            <div type={"email"} className="input">
              {dataUser.userMail}
            </div>
          </label>
        </form>
      </FormLayout>
    </div>
  );
}
