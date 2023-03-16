import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";
import { Input } from "./Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function CallAPI(event) {
    event.preventDefault();
    function ErrorInputs() {
      if (name && surname && email && password) {
        fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/auth/sign-up`, {
          method: "POST",

          body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            password: password,
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json(console.log(res)))
          .then((response) => {
            if (response.statusCode === 409) {
              console.log(response.statusCode);
              throw new Error("Error");
            }
            return response;
          })
          .catch((error) => {
            if ((error = 409)) {
              console.log("sdfsd");
              console.log(error);
              setError("Email already exist");
            }
          });
      } else {
        setError("All are REQUIRED");
      }
    }

    ErrorInputs();
  }
  useEffect(() => {
    setError('');
  }, [email, password, name, surname]);

  return (
    <div className="Form">
      <FormLayout>
        <form onSubmit={CallAPI}>
          <h1>SignUp</h1>
          <div className="inputs--button">
            <Input
              placeholder={"Name..."}
              type={"text"}
              onChange={(event) => setName(event.target.value)}
              className={"input"}
            />
            <Input
              placeholder={"Surname..."}
              type={"text"}
              onChange={(event) => setSurname(event.target.value)}
              className={"input"}
            />
            {error !== "Email already exist" ? (
              <Input
                placeholder={"Email..."}
                type={"email"}
                onChange={(event) => setEmail(event.target.value)}
                className={"input"}
              />
            ) : (
              <Input
                placeholder={"Email..."}
                type={"email"}
                onChange={(event) => setEmail(event.target.value)}
                className={"input--error"}
              />
            )}

            <Input
              placeholder={"Password..."}
              type={"password"}
              onChange={(event) => setPassword(event.target.value)}
              className={"input"}
            />

            {error !== "Email already exist" && error !== "All are REQUIRED" ? (
              <button type={"submit"} className="button--continue">
                <span className="button--name">CONTINUE</span>
              </button>
            ) : (
              <div type={"submit"} className="button--error">
                <span className="button--error--name">{error}</span>
              </div>
            )}
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
