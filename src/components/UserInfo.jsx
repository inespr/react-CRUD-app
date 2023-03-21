import React from "react";
import { Link } from "react-router-dom";
import { FiCornerDownLeft, FiInfo } from "react-icons/fi";
import { FormLayout } from "../layout/FormLayout";

export function UserInfo() {
    const bearer = localStorage.getItem("Token");
    const dataUser = JSON.parse(localStorage.getItem("Data"));

    console.log(dataUser)

  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    };
    fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/users/${dataUser.userId}`, options)
    
    .catch((error) => console.error("Error fetching data: ", error));

  return (
    <div className="Form">
      <FormLayout>
        <form>
          <h1>UserInfo</h1>
          <FiInfo />
          <Link to="../users-list">
            <FiCornerDownLeft />
          </Link>
          <div type={"text"} className="input">
           {dataUser.userName}
          </div>
          <div type={"text"} className="input">
          {dataUser.userSurname}
          </div>
          <div type={"email"} className="input">
          {dataUser.userMail}
          </div>
        </form>
      </FormLayout>
    </div>
  );
}
