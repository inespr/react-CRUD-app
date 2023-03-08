import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './style/App.scss'

import App from './components/App'
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { UsersList } from './components/UsersList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/users-list",
    element: <UsersList />,
  }

  // todo 404 - not exists
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <RouterProvider router={router} />  
  </React.StrictMode>,
);
