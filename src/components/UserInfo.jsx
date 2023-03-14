import React from "react";
import { Link } from "react-router-dom";
import { FiCornerDownLeft, FiInfo } from "react-icons/fi";
import { FormLayout } from "../layout/FormLayout";

export function UserInfo({ name, surname, email, password }) {
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
            Name...
          </div>
          <div type={"text"} className="input">
            Surname...
          </div>
          <div type={"email"} className="input">
            Email...
          </div>
          <div type={"password"} placeholder="" className="input">
            Password...
          </div>
        </form>
      </FormLayout>
    </div>
  );
}
