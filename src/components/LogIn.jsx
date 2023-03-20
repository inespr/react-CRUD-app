import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";
import { Input } from "./Input";

export function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [status, setStatus] = useState(" ");
  const [data, setData] = useState("");

  function callApi(event) {
    event.preventDefault();
    if (emailRef && passwordRef) {
      fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/auth/log-in`, {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode === 404) {
            console.log(response.statusCode);
            throw new Error("ErrorNotFound");
          } else if (response.statusCode === 601) {
            throw new Error("ErrorValidation");
          }
          else if (response.statusCode === 500) {
            throw new Error("ErrorInternal");
          }
          return response;
        })
        .then((data) => {
          setData(data);
          localStorage.setItem("Token", (data.accessToken));
          console.log(data.accessToken);
        })
        .catch((error) => {
          if (error.message === "ErrorNotFound") {
            setError("Email not found or password invalid");
          } else if (error.message === "ErrorValidation") {
            setError("User is not validated");
          }
          else if (error.message === "ErrorInternal") {
            setError("All fields are required");
          }
        });
    }
  }
  useEffect(() => {
    setError("");
  }, [status]);

  return (
    <div className="Form">
      <FormLayout>
        <form onSubmit={callApi} onChange={(e) => setStatus(e.target.value)}>
          <h1>LogIn</h1>
          <div className="inputs--button">
            <Input
              placeholder="Email..."
              type="email"
              reference={emailRef}
              className="input"
            />
            <Input
              placeholder="Password..."
              type="password"
              reference={passwordRef}
              className="input"
            />
            {error !== "Email not found or password invalid" &&
            error !== "All fields are required" &&
            error !== "User is not validated" ? (
              <div style={{ display: "none" }}></div>
            ) : (
              <div type="submit" className="button--error">
                <span className="button--error--name">{error}</span>
              </div>
            )}
            {data ? (
              <Navigate to="../../users">
                <button type="submit" className="button--continue">
                  <span className="button--name">CONTINUE</span>{" "}
                </button>
              </Navigate>
             
            ) : (
              <button type="submit" className="button--continue">
                <span className="button--name">CONTINUE</span>{" "}
              </button>
            )}
          </div>
          <section className="link">
            <p>
              or <Link to="../sign-up">SingUp</Link>
            </p>
          </section>
        </form>
      </FormLayout>
    </div>
  );
}
