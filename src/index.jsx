import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './style/App.scss'
import './style/LogIn.scss'
import './style/SignUp.scss'
import './style/UsersList.scss'

import App from './components/App'
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { UsersList } from './components/UsersList';
import ErrorPage from './components/ErrorPage';
import { UserInfo } from './components/UserInfo';
import { UserEdit } from './components/UserEdit';
import { LogOutWindow } from './components/LogOutWindow';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/users-list",
    element: <UsersList />,
  },
  {
    path: "/user-info",
    element: <UserInfo />,
  },
  {
    path: "/user-edit",
    element: <UserEdit />,
  },
  {
    path: "/log-out",
    element: <LogOutWindow />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <RouterProvider router={router} />  
  </React.StrictMode>,
);
