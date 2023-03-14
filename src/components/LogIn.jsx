import React from "react";
import { Link } from "react-router-dom";
import { FormLayout } from "../layout/FormLayout";

export function LogIn() {
  return (
    <div className="Form">
      <FormLayout>
      <h1>LogIn</h1>
        <form>
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
          <section className="signUp--link">
            <p>or </p>
            <Link to="../sign-up">SingUp</Link>
          </section>
        </form>
      </FormLayout>
    </div>
  );
}
