import React from 'react'
import { Link } from 'react-router-dom';
import { FiCornerDownLeft, FiInfo } from "react-icons/fi";

export function UserInfo({name, surname, email, password}) {
  return (
    <div className="UserInfo">
      <form>
        <h1>UserInfo</h1>
        <FiInfo/>
        <Link to='../users-list'><FiCornerDownLeft/></Link>
        <div type={'text'} className='input'>Name...</div>
        <div type={'text'} className='input'>Surname...</div>
        <div type={'email'} className='input'>Email...</div>
        <div type={'password'} placeholder='' className='input'>Password...</div>
      </form>
    </div>
  );
}