import React from "react";
import { FormLayout } from "../layout/FormLayout";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import { UserEdit } from "./UserEdit";
import { UserInfo } from "./UserInfo";
import { UsersList } from "./UsersList";

function App() {
  return (
    <div className="App">
      <FormLayout>
        <LogIn />
        <SignUp />
        <UserEdit />
        <UserInfo />
      </FormLayout>
      <UsersList />
    </div>
  );
}

export default App;
