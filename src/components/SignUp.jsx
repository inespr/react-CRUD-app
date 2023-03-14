import React from "react";
import { Link } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";

export function SignUp() {
  return (
    <div className="Form">
      <FormLayout>
        <h1>SignUp</h1>
        <form>
          <input type={"text"} placeholder="Name..." className="input" />
          <input type={"text"} placeholder="Surname..." className="input" />
          <input type={"email"} placeholder="Email..." className="input" />
          <input
            type={"password"}
            placeholder="Password..."
            className="input"
          />
          <Link to="../users-list">
            <button type={"submit"} className="button--continue">
              CONTINUE
            </button>
          </Link>
          <section className="LogIn--link">
            <p>
              or <Link to="../log-in">LogIn</Link>
            </p>
          </section>
        </form>
      </FormLayout>
    </div>
  );
}
