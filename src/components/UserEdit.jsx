import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiCornerDownLeft, FiCheck, FiEdit } from "react-icons/fi";
import { FormLayout } from "../layout/FormLayout";

export function UserEdit() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const bearer = localStorage.getItem("Token");
  const dataUser = JSON.parse(localStorage.getItem("Data"));

  useEffect(() => {
    setName(dataUser.userName);
    setSurname(dataUser.userSurname);
    setEmail(dataUser.userMail);
  }, []);

  function callApi() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      }),
    };
    fetch(
      `${import.meta.env.VITE_APP_MY_API_LINK}/users/${dataUser.userId}`,
      options
    ).catch((error) => console.error("Error fetching data: ", error));
  }

  return (
    <div className="Form">
      <FormLayout>
        <form onSubmit={callApi} className="form">
          <Link to="../users" className="return">
            <FiCornerDownLeft />
          </Link>
          <div className="header">
            <h1>UserEdit</h1>
            <FiEdit />
          </div>

          <label>
            Name:
            <input
              type={"text"}
              placeholder="Name..."
              className="input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Surname:
            <input
              type={"text"}
              placeholder="Surname..."
              className="input"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type={"email"}
              placeholder="Email..."
              className="input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type={"password"}
              placeholder="Insert a new password"
              className="input"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type={"submit"} className="button--save">
            <span className="button--name">SAVE</span> <FiCheck />
          </button>
        </form>
      </FormLayout>
    </div>
  );
}
