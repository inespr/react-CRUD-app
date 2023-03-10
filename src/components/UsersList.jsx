import React from 'react'
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { User } from './User';


export function UsersList() {
  return (
    <>
    <section className='users--header'>
      <div className='userLogger'>
      <FiUser/>
      <span>GL</span>
      </div>
      <Link to='../log-out' className='logOut'><FiLogOut/></Link>
    </section>
    <div className="userslist">
      <h1 className='tittle'>Users List</h1>
      <User/>
    </div>
    </>
    
  );
}