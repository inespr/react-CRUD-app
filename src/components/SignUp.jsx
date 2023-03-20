import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";
import { Input } from "./Input";

export function SignUp() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [status, setStatus] = useState(" ");

  console.log("rendered once");

  function callApi(event) {
    event.preventDefault();
    setError(null);
    console.log(nameRef);
    console.log({
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (nameRef && surnameRef && emailRef && passwordRef) {
      fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
      
        .then((response) => {
          if (response.statusCode === 409) {
            console.log(response.statusCode);
            throw 409;
          } else if (response.statusCode === 500) {
            console.log(response.statusCode);
            throw 500;
          } 
          setError('');
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          if (error === 409) {
            console.log("Email already exists");
            setError("Email already exists");
          } else if (error === 500) {
            console.log("All fields are required");
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
        <form onSubmit={callApi} >
          <h1>SignUp</h1>
          <div className="inputs--button" onClick={(e) => setStatus(e.target.value)}>
            <Input
              placeholder="Name..."
              type="text"
              reference={nameRef}
              className="input"
            />
            <Input
              placeholder="Surname..."
              type="text"
              reference={surnameRef}
              className="input"
            />
            {error !== "Email already exist" ? (
              <Input
                placeholder="Email..."
                type="email"
                reference={emailRef}
                className="input"
                pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
              />
            ) : (
              <Input
                placeholder="Email..."
                type="email"
                reference={emailRef}
                className="input--error"
              />
            )}

            <Input
              placeholder="Password..."
              type="password"
              reference={passwordRef}
              className="input"
            />

            {error !== 'Email already exists' && error !== "All fields are required" ? (
              <div style={{ display: "none" }}></div>
            ) : (
              <button type="submit" className="button--error">
                <span className="button--error--name">{error}</span>
              </button>
            )}
            <button type="submit" className="button--continue">
              <span className="button--name">CONTINUE</span>
            </button>
          </div>
          <section className="link">
            <p>
              or <Link to="../log-in">LogIn</Link>
            </p>
          </section>
        </form>
      </FormLayout>
    </div>
  );
}
