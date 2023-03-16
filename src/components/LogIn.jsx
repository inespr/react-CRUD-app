import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";
import { Input } from "./Input";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function CallAPI(event) {
    event.preventDefault();
    function ErrorInputs() {
      if (email && password) {
        fetch(`${import.meta.env.VITE_APP_MY_API_LINK}/auth/log-in`, {
          method: "POST",

          body: JSON.stringify({
            email: email,
            password: password,
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.statusCode === 404) {
              console.log(response.statusCode);
              throw new Error("ErrorVFound");
            }
            else if(response.statusCode === 601){
              throw new Error("ErrorValid");
            }
            return response;
          })
          .catch((error) => {
            if ((error = "ErrorFound")) {
              setError("Email not found or password invalid");
            }
            else if(error = "ErrorValid"){
              setError("User is not validated")
            }
          });
      } else {
        setError("All are REQUIRED");
      }
    }
    ErrorInputs();
  }
  useEffect(() => {
    setError('')
  }, [email, password]);
    return (
      <div className="Form">
        <FormLayout>
          <form onSubmit={CallAPI}>
            <h1>LogIn</h1>
            <div className="inputs--button">
              <Input
                placeholder={"Email..."}
                onChange={(event) => setEmail(event.target.value)}
                className="input"
              />
              <Input
                placeholder={"Password..."}
                onChange={(event) => setPassword(event.target.value)}
                className="input"
              />
              {error !== "Email not found or password invalid" &&
              error !== "All are REQUIRED" && error!== "User is not validated"? (
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
                or <Link to="../sign-up">SingUp</Link>
              </p>
            </section>
          </form>
        </FormLayout>
      </div>
    );
  
}
